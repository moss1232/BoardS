<template>
  <v-card class="mx-auto my-12" max-width="600">
    <v-list>
      <v-list-item v-for="team in teams" :key="team.name">
        <v-list-item-avatar>
          <img v-if="team.team_avatar_url" alt="Avatar" :src="team.team_avatar_url" />
          <img v-else src="../../../public/images/default.png" />
        </v-list-item-avatar>
        <v-list-item-title>{{ team.name }}</v-list-item-title>
        <v-list-item-icon>
          <v-btn icon @click="submit(team.name)">
            <v-icon> mdi-trash-can-outline </v-icon>
          </v-btn>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
    <v-snackbar v-model="snackbar" :timeout="timeout" :color="color">
      {{ snackbar_text }}
    </v-snackbar>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    file: null,
    showPassword: false,
    dialog: false,
    password: "",
    name: "",
    avatar: "",
    snackbar: false,
    snackbar_text: "",
    color: "",
    timeout: 2000,
  }),
  computed: {
    ...mapGetters("teams", ["teams"]),
  },
  methods: {
    ...mapActions("teams", ["fetchTeams", "leaveTeam"]),
    test(a) {
      console.log(a);
    },

    async submit(teamname) {
      this.leaveTeam(teamname).then(
        (response) => {
          this.snackbar_text = "削除しました";
          this.color = "blue";
          this.snackbar = true;
          console.log(response);
        },
        (error) => {
          this.snackbar_text = "削除に失敗しました";
          this.color = "red";
          this.snackbar = true;
          console.log(error);
        }
      );
    },
  },
  created() {
    this.fetchTeams();
  },
};
</script>
