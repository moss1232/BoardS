<template>
  <v-container class="py-8 px-6">
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="text-h5">
            <v-avatar class="mr-6">
              <img src="../../../public/images/default.png" />
            </v-avatar>
            <span>
              {{ message.title }}
            </span>
          </v-card-title>
          <v-card-text class="text-h6">
            {{ message.content }}
          </v-card-text>


        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
// import { mapGetters } from "vuex";

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters("messages", ["message"]),
  },
  methods: {
    ...mapActions("messages", ["fetchDetailMessages"]),
  },
  created() {
    // store.dispatch('fetchDetailMessages', { team_id: this.$route.params.team_id, id: this.$route.params.id })
    this.fetchDetailMessages({team_id: this.$route.params.team_id, message_id: this.$route.params.message_id})
    console.log(this.message)
  },
};
</script>
