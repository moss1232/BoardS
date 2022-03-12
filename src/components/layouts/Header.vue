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
                :to= "{name: link}"
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
      <v-avatar></v-avatar>
      <template v-if="$route.params.team_id">
        <v-tabs centered class="ml-n9" color="grey darken-1">
          <v-tab
            :to="{
              name: 'TeamMessages',
              params: { team_id: $route.params['team_id'] },
            }"
          >
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
      </template>
    </v-app-bar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    drawer: null,
    team_settings: [
      ["mdi-plus-circle-outline", "チームを作成", "TeamCreate"],
      ["mdi-magnify", "チームを見つける", "TeamSearch"],
      ["mdi-trash-can-outline", "チームを抜ける", "TeamLeave"],
    ],
  }),

  computed: {
    ...mapGetters("teams", ["teams"]),
  },
  methods: {
    ...mapActions("teams", ["fetchTeams"]),
  },

  created() {
    this.fetchTeams();
    console.log(this.teams);
  },
};
</script>
