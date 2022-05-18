<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list>
        <v-list-item-group mandatory color="indigo">
          <v-list-group :value="false" prepend-icon="mdi-account-multiple">
            <template v-slot:activator>
              <v-list-item-title>Teams</v-list-item-title>
            </template>
            <v-list-item
              v-for="team in teams"
              :key="team.name"
              link
              :to="{ name: 'TeamMessages', params: { team_id: team.id } }"
            >
              <v-list-item-avatar size="24">
                <img
                  v-if="team.team_avatar_url"
                  alt="Avatar"
                  :src="team.team_avatar_url"
                />
                <img v-else src="../../../public/images/default.png" />
              </v-list-item-avatar>
              <v-list-item-title>{{ team.name }}</v-list-item-title>
            </v-list-item>
            <v-list-group :value="false" sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>その他</v-list-item-title>
                </v-list-item-content>
              </template>
              <v-list-item
                dense
                v-for="([icon, title, link], i) in team_settings"
                :key="i"
                link
                :to="{ name: link }"
              >
                <v-list-item-icon>
                  <v-icon v-text="icon"></v-icon>
                </v-list-item-icon>
                <v-list-item-title v-text="title"></v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-list-group>
          <v-list-item link :to="{ name: 'Setting' }">
            <v-list-item-icon>
              <v-icon> mdi-cog-outline </v-icon>
            </v-list-item-icon>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="white" flat>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <template v-if="$route.params.team_id">
        <v-tabs centered color="grey darken-1">
          <v-tab
            :to="{
              name: 'TeamMessages',
              params: { team_id: $route.params['team_id'] },
            }"
          >
            <v-icon v-if="$vuetify.breakpoint.xs">mdi-message-text</v-icon>
            <div v-else>message</div>
          </v-tab>
          <v-tab
            :to="{
              name: 'TeamCalendars',
              params: { team_id: $route.params['team_id'] },
            }"
          >
            <v-icon v-if="$vuetify.breakpoint.xs">mdi-calendar</v-icon>
            <div v-else>Calendar</div>
          </v-tab>
        </v-tabs>
      </template>
      <v-btn icon fab right fixed @click="logout" v-if="log_in">
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn icon fab right fixed @click="redirectToLogin" v-else color="red">
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import axios from "axios";

export default {
  data: () => ({
    log_in: null,
    drawer: null,
    team_settings: [
      ["mdi-plus-circle-outline", "チームを作成", "TeamCreate"],
      ["mdi-magnify", "チームに参加", "TeamSearch"],
      ["mdi-trash-can-outline", "チームを抜ける", "TeamLeave"],
    ],
  }),

  computed: {
    ...mapGetters("teams", ["teams"]),
  },
  methods: {
    ...mapActions("teams", ["fetchTeams"]),
    async logout() {
      try {
        const res = await axios.delete(
          `${process.env.VUE_APP_API_URL}/auth/sign_out`,
          {
            headers: {
              uid: window.localStorage.getItem("uid"),
              "access-token": window.localStorage.getItem("access-token"),
              client: window.localStorage.getItem("client"),
            },
          }
        );

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
    redirectToLogin() {
      this.$router.push({ name: "Login" });
    },
    tokenTest() {
      const tokens = [
        window.localStorage.getItem("uid"),
        window.localStorage.getItem("access-token"),
        window.localStorage.getItem("client"),
      ];
      const tokenCheck = (arg) => !!arg == true;
      this.log_in = tokens.every(tokenCheck);
    },
  },

  created() {
    this.fetchTeams();
    this.tokenTest();
  },
};
</script>
