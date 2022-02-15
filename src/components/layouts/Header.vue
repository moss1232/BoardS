<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <!-- <v-sheet color="grey lighten-4" class="pt-4 px-4">
        <v-row align="center">
          <v-col cols="12">
            <v-select :items="items" item-text="state" label="Team"></v-select>
          </v-col>
        </v-row>
      </v-sheet>

      <v-divider></v-divider> -->

      <v-list>
        <v-list-item-group mandatory color="indigo">
          <v-list-item
            v-for="[icon, text, link_to] in team_links"
            :key="icon"
            :to="link_to"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white" flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
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
  </div>
</template>

<script>
import axios from "axios";
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    drawer: null,
    links: [
      ["mdi-message", "Message", "/"],
      ["mdi-calendar", "Schedule", "/schedule"],
    ],
    team_links: [
      ["mdi-message", "team1", "/"],
      ["mdi-checkbox-outline", "team2", "/todo"],
      ["mdi-calendar", "team3", "/schedule"],
    ],
  }),

    computed: {
      ...mapGetters("teams", ["teams"]),
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
        ...mapActions("teams", ["fetchTeams"]),
  },

  mounted() {
    this.fetchTeams();
    console.log(this.teams)
  },
};
</script>
