<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item-group mandatory color="indigo">
          <v-list-item
            v-for="team in teams"
            :key="team.name"
            :to="`${team.id}`"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ team.name }}</v-icon>
            </v-list-item-icon>
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
        <v-tab 
        :to="{ name: 'Message', params: { id: $route.params['id'] } }">
          message
        </v-tab>
        <v-tab 
        :to="{ name: 'Calendar', params: { id: $route.params['id'] } }">
          calendar
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

  created() {
    this.fetchTeams();
    console.log(this.teams);
  },
};
</script>
