<template>
  <v-card class="mx-auto mt-12" max-width="300">
    <v-row>
      <v-container class="px-10">
        <v-list-item-content class="justify-center">
          <!-- <div class="mx-auto mt-10 text-center">
            <v-avatar color="brown" size="100" class="my-6">
              <img src="../../../public/images/default.png" />
            </v-avatar>
          </div> -->
          <div class="preview">
            <img
              width="100"
              height="100"
              id="image_preview"
              src="../../../public/images/default.png"
            />
          </div>
          <div class="btn-contain">
            <label class="upload-img-btn">
              変更
              <input
                type="file"
                name="image"
                style="display: none"
                id="input"
              />
            </label>
          </div>

          <v-card-text class="mb-n2" dense>名前</v-card-text>
          <v-text-field outlined dense v-model="name"></v-text-field>
          <v-card-text class="my-n2"> メールアドレス</v-card-text>

          <v-text-field outlined dense v-model="email"></v-text-field>

          <div class="btn-contain">
            <v-btn @click="submit"> 保存 </v-btn>
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
    user_id: "",
    error: "",
  }),
  computed: {},
  methods: {
    handleFiles() {
      const img = document.querySelector("#image_preview");
      const selectedFile = document.getElementById("input").files[0];
      console.log(selectedFile);
      const reader = new FileReader();
      reader.onload = (function (aImg) {
        return function (e) {
          aImg.src = e.target.result;
        };
      })(img);
      reader.readAsDataURL(selectedFile);
    },
    async fetchUser() {
      const res = await axios.get("http://127.0.0.1:3000/api/users/", {
        headers: {
          uid: window.localStorage.getItem("uid"),
          "access-token": window.localStorage.getItem("access-token"),
          client: window.localStorage.getItem("client"),
        },
      });
      console.log(res);
      this.name = res.data.name;
      this.email = res.data.email;
      this.user_id = res.data.id;
    },
    async updateUser(user) {
      try {
        this.error = null;
        const res = await axios.put(
          `http://127.0.0.1:3000/api/users/${this.user_id}`,
          user,
          {
            headers: {
              uid: window.localStorage.getItem("uid"),
              "access-token": window.localStorage.getItem("access-token"),
              client: window.localStorage.getItem("client"),
            },
          }
        );
        if (!res) {
          throw new Error("メールアドレスかパスワードが違います");
        }
        if (!this.error) {
          window.localStorage.setItem("uid", res.headers.uid);
        }
      } catch (error) {
        console.log({ error });
        this.error = "メールアドレスかパスワードが違います";
      }
    },
    submit() {
      const params = {
        name: this.name,
        email: this.email,
      };
      this.updateUser(params);
    },
  },
  created() {
    this.fetchUser();
  },
  mounted() {
    window.addEventListener("change", this.handleFiles);
  },
  beforeDestroy() {
    window.removeEventListener("change", this.handleFiles);
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
