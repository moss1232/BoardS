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
              {{ current_message.title }}
            </span>
          </v-card-title>
          <v-card-text class="text-h6">
            {{ current_message.content }}
          </v-card-text>

          <!-- <v-avatar>
            <img
              v-if="message.message_user_avatar"
              alt="Avatar"
              :src="message.message_user_avatar"
            />
            <img v-else src="../../../public/images/default.png" />
          </v-avatar> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters("messages", ["messages"]),
  },
  methods: {
    ...mapActions("messages", ["fetchMessages"]),
    // getMessage() {},
  },
  created() {
    this.fetchMessages(this.$route.params.team_id)
  },
};
</script>
