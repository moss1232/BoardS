<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item-group mandatory color="indigo">
          <v-list-item
            v-for="team in teams"
            :key="team.name"
            link
            :to="{ name: 'TeamMessages', params: { team_id: team.id } }"
          >
            <v-list-item-avatar>
              <img
                v-if="team.team_avatar_url"
                alt="Avatar"
                :src="team.team_avatar_url"
              />
              <img v-else src="../../../public/images/default.png" />
            </v-list-item-avatar>

            <v-list-item-title>{{ team.name }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white" flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-avatar></v-avatar>

      <v-tabs centered class="ml-n9" color="grey darken-1">
        <v-tab
          :to="{
            name: 'TeamMessages',
            params: { team_id: $route.params['team_id'] },
          }"
        >
          <!-- <v-icon>mdi-message</v-icon> -->

          message
        </v-tab>
        <v-tab
          :to="{
            name: 'TeamCalendars',
            params: { team_id: $route.params['team_id'] },
          }"
        >
          calendar
        </v-tab>
      </v-tabs>
      <v-btn icon :to="{ name: 'Setting' }">
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    drawer: null,
  }),

  computed: {
    ...mapGetters("teams", ["teams"]),
  },
  methods: {
    // async logout() {
    //   try {
    //     const res = await axios.delete("http://localhost:3000/auth/sign_out", {
    //       headers: {
    //         uid: window.localStorage.getItem("uid"),
    //         "access-token": window.localStorage.getItem("access-token"),
    //         client: window.localStorage.getItem("client"),
    //       },
    //     });

    //     console.log("ログアウトしました");
    //     window.localStorage.removeItem("access-token");
    //     window.localStorage.removeItem("client");
    //     window.localStorage.removeItem("uid");
    //     this.$router.push({ name: "Login" });

    //     return res;
    //   } catch (error) {
    //     console.log({ error });
    //   }
    // },
    ...mapActions("teams", ["fetchTeams"]),
  },

  created() {
    this.fetchTeams();
    console.log(this.teams);
  },
};
</script>
