<template>
  <v-container fill-height>
    <v-card width="400px" class="mx-auto">
      <v-card-text>
        <v-form @submit.prevent="signUp">
          <v-text-field
            prepend-icon="mdi-account-circle"
            label="ユーザ名"
            v-model="name"
          />
          <v-text-field
            prepend-icon="mdi-email"
            label="メールアドレス"
            v-model="email"
            type="email"
          />
          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            prepend-icon="mdi-lock"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード"
            v-model="password"
          />
          <v-text-field
            v-bind:type="showPassword ? 'text' : 'password'"
            @click:append="showPassword = !showPassword"
            prepend-icon="mdi-lock-check"
            v-bind:append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
            label="パスワード確認"
            v-model="passwordConfirmation"
          />
          <div class="red--text">{{ error }}</div>
          <v-container>
            <v-row justify="center">
              <v-col cols="12" sm="6">
                <div class="text-center">
                  <v-btn class="info" type="submit">新規登録</v-btn>
                  <!-- <v-btn text>アカウントをお持ちの方はこちら</v-btn> -->
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
      name: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      error: null,
    };
  },
  methods: {
    async signUp() {
      this.error = null;
      try {
        const res = await axios.post("http://localhost:3000/auth", {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation,
        });
        if (!res) {
          throw new Error("アカウントを登録できませんでした");
        }
        if (!this.error) {
          window.localStorage.setItem(
            "access-token",
            res.headers["access-token"]
          );
          window.localStorage.setItem("client", res.headers.client);
          window.localStorage.setItem("uid", res.headers.uid);
          this.redirectToMessage();
        }
        console.log({ res });
        return res;
      } catch (error) {
        this.error = "アカウントを登録できませんでした";
      }
    },
    redirectToMessage() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
