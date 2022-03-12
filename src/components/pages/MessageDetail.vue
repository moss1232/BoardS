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
              {{ title }}
            </span>
          </v-card-title>
          <v-card-text class="text-h6">
            <!-- {{ message.content }} -->
          </v-card-text>
          <!-- <img
            v-if="message.message_files_url"
            :src="message.message_files_url"
          /> -->
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      title: "",
      content: "",
    };
  },

  methods: {
    async fetchDetailMessage() {
      const res = await axios.get(
        `http://127.0.0.1:3000/api/teams/${this.$route.params.team_id}/messages/${this.$route.params.message_id}`,
        {
          headers: {
            uid: window.localStorage.getItem("uid"),
            "access-token": window.localStorage.getItem("access-token"),
            client: window.localStorage.getItem("client"),
          },
        }
      );
      this.title = res.data.title;
      this.content = res.data.content;
    },
  },

  created() {
    this.fetchDetailMessage();
  },
};
</script>
