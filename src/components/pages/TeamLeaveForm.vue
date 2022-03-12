<template>
  <v-card class="mx-auto my-12" max-width="600">
    <v-list>
      <v-list-item v-for="team in teams" :key="team.name">
        <v-list-item-avatar>
          <img
            v-if="team.team_avatar_url"
            alt="Avatar"
            :src="team.team_avatar_url"
          />
          <img v-else src="../../../public/images/default.png" />
        </v-list-item-avatar>

        <v-list-item-title>{{ team.name }}</v-list-item-title>
        <v-list-item-icon>
          <v-btn icon>
            <v-icon> mdi-trash-can-outline </v-icon>
          </v-btn>
        </v-list-item-icon>
      </v-list-item>
    </v-list>
  </v-card>
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
    ...mapActions("teams", ["fetchTeams"]),
  },
  created() {
    this.fetchUser();
  },
};
</script>
