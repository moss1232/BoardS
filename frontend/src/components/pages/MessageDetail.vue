<template>
  <v-container class="py-8 px-6">
    <v-row>
      <v-col>
        <v-card>
          <v-card-title class="text-h5">
            <v-avatar class="mr-6">
              <img v-if="avatar" alt="Avatar" :src="avatar" />
              <img
                v-else
                alt="Avatar"
                src="../../../public/images/default.png"
              />
            </v-avatar>
            <span>
              {{ title }}
            </span>
          </v-card-title>
          <v-card-text class="text-h6">
            {{ content }}
          </v-card-text>
          <img class="ml-4" v-if="files" :src="files" />
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
      files: null,
      avatar: null,
    };
  },

  methods: {
    async fetchDetailMessage() {
      const res = await axios.get(
        `${process.env.VUE_APP_API_URL}/api/teams/${this.$route.params.team_id}/messages/${this.$route.params.message_id}`,
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
      this.files = res.data.attached_file;
      this.avatar = res.data.user_avatar;
    },
  },

  created() {
    this.fetchDetailMessage();
  },
};
</script>
