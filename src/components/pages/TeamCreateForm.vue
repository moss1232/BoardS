<template>
  <v-card class="mx-auto mt-12" max-width="300">
    <v-row>
      <v-container class="px-10">
        <v-list-item-content class="justify-center">
          <!-- <img src="../../../public/images/default.png" /> -->
          <div class="preview mb-2">
            <img width="100" height="100" id="image_preview" :src="file" />
          </div>
          <div class="btn-contain mb-4">
            <label class="upload-img-btn">
              変更
              <input
                type="file"
                style="display: none"
                id="inputFile"
                accept="image/*"
              />
            </label>
          </div>
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
            <v-btn @click="submit" :disabled="isInvalid" class="info"> 保存 </v-btn>
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
// import axios from "axios";
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  validations: {
    name: { required },
    password: { required },
  },

  data: () => ({
    showPassword: false,
    name: "",
    password: "",
    file: "",
    error: null,
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
    ...mapActions("teams", ["fetchTeams", "createTeam"]),

    handleFiles() {
      const img = document.querySelector("#image_preview");
      const selectedFile = document.getElementById("inputFile").files[0];
      console.log(selectedFile);
      const reader = new FileReader();
      reader.onload = (function (aImg) {
        return function (e) {
          aImg.src = e.target.result;
        };
      })(img);
      reader.readAsDataURL(selectedFile);
      this.file = selectedFile;
    },
    async submit() {
      const params = new FormData();
      params.append("name", this.name);
      params.append("password", this.password);
      params.append("file", this.file);
      this.createTeam(params)
      .then(response => {
          this.snackbar_text = "保存しました";
          this.color = "blue";
          this.snackbar = true;
          console.log(response);
        },
        error => {
          this.snackbar_text = "入力内容に誤りがあります";
          this.color = "red";
          this.snackbar = true;
          console.log(error);
        }
      );
    },
  },

  created() {
    this.fetchTeams();
  },
  mounted() {
    const inputFile = document.getElementById("inputFile");
    inputFile.addEventListener("change", this.handleFiles);
  },
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
