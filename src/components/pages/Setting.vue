<template>
  <v-card class="mx-auto mt-12" max-width="600">
    <v-row>
      <v-container class="px-10">
        <v-list-item-content class="justify-center">
          <div class="mx-auto mt-10 text-center">
            <v-avatar color="brown" size="100" class="my-6">
              <img src="../../../public/images/default.png" />
            </v-avatar>
          </div>
          <div class="btn-contain">
            <label class="upload-img-btn">
              画像を変更
              <input type="file" name="image" style="display: none" />
            </label>
          </div>

          <v-card-text class="mb-n2" dense>名前{{name}}</v-card-text>
          <v-text-field outlined  dense v-model="name"></v-text-field>
          <v-card-text class="my-n2"> メールアドレス</v-card-text>
          <v-text-field outlined dense></v-text-field>
          <v-card-text class="mb-n2"> パスワードの変更</v-card-text>
          <v-text-field outlined  dense></v-text-field>
          <div  class="btn-contain">
          <v-btn @click="logout"> 保存 </v-btn>
          </div>
          <div  class="btn-contain">
          <v-btn @click="logout"> ログアウト </v-btn>
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
    email: "",
    password: "",
  }),
  computed: {
  },
  methods: {
    async logout() {
      try {
        const res = await axios.delete("http://localhost:3000/auth/sign_out", {
          headers: {
            uid: window.localStorage.getItem("uid"),
            "access-token": window.localStorage.getItem("access-token"),
            client: window.localStorage.getItem("client"),
          },
        });

        console.log("ログアウトしました");
        window.localStorage.removeItem("access-token");
        window.localStorage.removeItem("client");
        window.localStorage.removeItem("uid");
        this.$router.push({ name: "Login" });

        return res;
      } catch (error) {
        console.log({ error });
      }
    },
        async fetchCurrentUser() {
      const res = await axios.get(
        "http://127.0.0.1:3000/api/users",
        {
          headers: {
            uid: window.localStorage.getItem("uid"),
            "access-token": window.localStorage.getItem("access-token"),
            client: window.localStorage.getItem("client"),
          },
        }
      );
      console.log(res)
      this.name = res.data.name;
      this.email = res.data.email;
    },
  },
  created() {
    this.fetchCurrentUser();
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
</style>
