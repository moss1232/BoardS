<template>
  <v-container fill-height>
    <v-card width="400px" class="mx-auto">
      <v-card-text>
        <v-form @submit.prevent="login">
          <v-text-field
            prepend-icon="mdi-email"
            label="メールアドレス"
            v-model="email"
          />
          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            prepend-icon="mdi-lock"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            v-model="password"
          />
          <div class="red--text">{{ error }}</div>
          <v-container>
            <v-row justify="center">
              <v-col cols="12" sm="6">
                <div class="text-center">
                  <v-btn class="info" type="submit">ログイン</v-btn>
                  <v-btn text to="/signup">新規登録はこちら</v-btn>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      showPassword: false,
      email: "",
      password: "",
      error: null,
    };
  },
  methods: {
    async login() {
      try {
        this.error = null;
        const res = await axios.post("http://localhost:3000/auth/sign_in", {
          email: this.email,
          password: this.password,
        });
        if (!res) {
          throw new Error("メールアドレスかパスワードが違います");
        }
        console.log({ res });
        if (!this.error) {
          window.localStorage.setItem(
            "access-token",
            res.headers["access-token"]
          );
          window.localStorage.setItem("client", res.headers.client);
          window.localStorage.setItem("uid", res.headers.uid);
          this.redirectToMessage();
        }
        return res;
      } catch (error) {
        console.log({ error });
        this.error = "メールアドレスかパスワードが違います";
      }
    },
    redirectToMessage() {
      this.$router.push({ name: "TeamMessages", params: { team_id: 1 } });
    },
  },
};
</script>
