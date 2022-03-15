<template>
  <v-card class="mx-auto mt-12" max-width="300">
    <v-row>
      <v-container class="px-10">
        <v-list-item-content class="justify-center">
          <v-text-field
            prepend-icon="mdi-account-multiple"
            label="チーム名"
            v-model="name"
          />
          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            prepend-icon="mdi-lock"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            v-model="password"
          />
          <div class="btn-contain">
            <v-btn :disabled="isInvalid" class="info" @click="searchTeam">
              検索
            </v-btn>
            <v-dialog
              v-model="dialog"
              max-width="600px"
              persistent
              @click:outside="closeDialog"
            >
              <v-card>
                <img width="100" height="100" id="image_preview" :src="file" />

                <v-card-title class="justify-center">
                  {{ name }}
                </v-card-title>
                <v-card-title class="justify-center">
                  このチームに参加しますか？
                </v-card-title>
                <v-card-actions class="justify-center">
                  <v-btn icon>
                    <v-icon color="green" @click="JoinTeamTransaction"
                      >mdi-check-circle-outline</v-icon
                    >
                  </v-btn>
                  <v-btn icon>
                    <v-icon color="red" @click="closeDialog"
                      >mdi-close-box-outline</v-icon
                    >
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-snackbar v-model="snackbar" :timeout="timeout" :color="color">
              {{ snackbar_text }}
            </v-snackbar>
          </div>
        </v-list-item-content>
      </v-container>
    </v-row>
  </v-card>
</template>

<script>
import axios from "axios";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";
import { mapActions } from "vuex";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required },
    password: { required },
  },

  data: () => ({
    file: null,
    showPassword: false,
    dialog: false,
    password: "bbbbbb",
    name: "team3",
    avatar: "",
    snackbar: false,
    snackbar_text: "",
    color: "",
    timeout: 2000,
  }),
  computed: {
    isInvalid() {
      return this.$v.$invalid || this.isInvalidDatetime;
    },
  },

  methods: {
    ...mapActions("teams", ["JoinTeam"]),

    closeDialog() {
      this.dialog = false;
    },

    async searchTeam() {
      const res = await axios.get(`http://127.0.0.1:3000/api/teams/search`, {
        headers: {
          uid: window.localStorage.getItem("uid"),
          "access-token": window.localStorage.getItem("access-token"),
          client: window.localStorage.getItem("client"),
        },
        params: {
          name: this.name,
          password: this.password,
        },
      });
      console.log(res);
      if (res.data === null) {
        this.snackbar_text = "入力内容に誤りがあります";
        this.color = "red";
        this.snackbar = true;
      } else if (res.data !== null) {
        this.name = res.data.name;
        this.avatar = res.data.team_avatar_url;
        this.dialog = true;
      }
    },
    JoinTeamTransaction() {
      const params = new FormData();
      params.append("name", this.name);
      console.log(params)
      this.JoinTeam(params).then(
        (response) => {
          this.closeDialog();
          this.snackbar_text = "チームに参加しました";
          this.color = "blue";
          this.snackbar = true;
          console.log(response);
        },
        (error) => {
          this.snackbar_text = "チームに参加できませんでした";
          this.color = "red";
          this.snackbar = true;
          console.log(error);
        }
      );
    },
  },

  //     async submit() {
  //   const params = new FormData();
  //   params.append("name", this.name);
  //   params.append("password", this.password);
  //   params.append("file", this.file);
  //   this.createTeam(params)
  //   .then(response => {
  //       this.snackbar_text = "保存しました";
  //       this.color = "blue";
  //       this.snackbar = true;
  //       console.log(response);
  //     },
  //     error => {
  //       this.snackbar_text = "入力内容に誤りがあります";
  //       this.color = "red";
  //       this.snackbar = true;
  //       console.log(error);
  //     }
  //   );
  // },
  created() {},
};
</script>

<style scoped>
.upload-img-btn {
  display: inline-block;
  outline: none;
  cursor: pointer;
  font-weight: 500;
  border: 1px solid transparent;
  border-radius: 2px;
  height: 36px;
  line-height: 34px;
  font-size: 14px;
  color: #241c15;
  background-color: #efeeea;
  transition: background-color 0.2s ease-in-out 0s, opacity 0.2s ease-in-out 0s;
  padding: 0 18px;
}
.upload-img-btn:hover {
  color: #241c15;
  background-color: #d9d7cd;
}

.btn-contain {
  text-align: center;
}

.preview {
  text-align: center;
}

#image_preview {
  border-radius: 50%;
}
</style>
