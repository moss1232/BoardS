<template>
  <v-card class="mx-auto my-12" max-width="600">
    <v-list>
      <v-list-item>
                  <TeamCreateFormButton />

        <!-- <v-list-item-icon>
          <v-icon>mdi-plus-circle-outline</v-icon>
        </v-list-item-icon> -->
        <v-list-item-title>チームを作成</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-magnify</v-icon>
        </v-list-item-icon>
        <v-list-item-title>チームに参加</v-list-item-title>
      </v-list-item>
      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-trash-can-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title>チームを抜ける</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>


<script>
import TeamCreateFormButton from "./TeamCreateForm.vue";

import { mapGetters, mapActions } from "vuex";

export default {
    components: { TeamCreateFormButton },

  data: () => ({
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
