<template>
  <v-app-bar app color="white" flat>
    <v-avatar
      :color="$vuetify.breakpoint.smAndDown ? 'grey darken-1' : 'transparent'"
      size="32"
    ></v-avatar>

    <v-tabs centered class="ml-n9" color="grey darken-1">
      <v-tab v-for="[icon, text, link_to] in links" :key="icon" :to="link_to">
        {{ text }}
      </v-tab>
    </v-tabs>
    <v-btn @click="logout">logout</v-btn>
    <v-avatar
      class="hidden-sm-and-down"
      color="grey darken-1 shrink"
      size="32"
    ></v-avatar>
  </v-app-bar>
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    links: [
      ["mdi-message", "Message", "/"],
      // ["mdi-checkbox-outline", "Todo", "/todo"],
      ["mdi-calendar", "Schedule", "/schedule"],
    ],
  }),

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

        console.log("ログアウトしました")
        window.localStorage.removeItem('name')
        window.localStorage.removeItem('access-token')
        window.localStorage.removeItem('client')
        window.localStorage.removeItem('uid')
        // window.localStorage.removeItem('name')
        this.$router.push({ name: "Login" });

        return res;
      } catch (error) {
        console.log({ error });
      }
    },
  },
};
</script>
