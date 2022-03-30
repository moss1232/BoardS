<template>
  <v-card class="mx-auto mt-12" max-width="300">
    <v-row>
      <v-container class="px-10">
        <v-list-item-content class="justify-center">
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
            prepend-icon="mdi-account-circle"
            label="ユーザ名"
            v-model="name"
          />
          <div class="btn-contain">
            <v-btn @click="updateUser" class="info"> 保存 </v-btn>
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

export default {
  data: () => ({
    name: "",
    user_id: "",
    prefile: "",
    file: "",
    error: "",
    snackbar: false,
    snackbar_text: "",
    color: "",
    timeout: 2000,
  }),
  computed: {},
  methods: {
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
    async fetchUser() {
      const res = await axios.get(`${process.env.VUE_APP_API_URL}/api/users`, {
        headers: {
          uid: window.localStorage.getItem("uid"),
          "access-token": window.localStorage.getItem("access-token"),
          client: window.localStorage.getItem("client"),
        },
      });
      this.name = res.data.name;
      this.file = res.data.profile_avatar;
      this.prefile = res.data.profile_avatar;
      this.user_id = res.data.id;
    },
    async updateUser() {
      try {
        this.error = null;
        const params = new FormData();
        params.append("name", this.name);
        if(this.file != this.prefile){
          params.append("avatar", this.file);
        }
        const res = await axios.put(
          `${process.env.VUE_APP_API_URL}/api/users/${this.user_id}`,
          params,
          {
            headers: {
              uid: window.localStorage.getItem("uid"),
              "access-token": window.localStorage.getItem("access-token"),
              client: window.localStorage.getItem("client"),
            },
          }
        );
        console.log(res);

        if (!this.error) {
          window.localStorage.setItem("uid", res.headers.uid);
          this.snackbar_text = "保存しました";
          this.color = "blue";
          this.snackbar = true;
        }
      } catch (error) {
        console.log({ error });
        this.snackbar_text = "入力内容に誤りがあります";
        this.color = "red";
        this.snackbar = true;
      }
    },
  },
  created() {
    this.fetchUser();
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
