<template>
  <v-row justify="center">
    <v-card class="mx-auto my-12" max-width="600">
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <div class="mx-auto my-10 text-center">
                <v-btn icon height="100">
                  <v-avatar color="brown" size="100" class="my-6">
                    <img src="../../../public/images/default.png" />
                  </v-avatar>
                </v-btn>
              </div>
              <v-text-field label="チーム名" required v-model="title">
              </v-text-field>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="submit">
          <v-icon>mdi-send</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    dialog: false,
    title: null,
    content: null,
    files: null,
  }),
  methods: {
    ...mapActions("messages", ["createMessage"]),
    closeDialog() {
      this.title = null;
      this.content = null;
      this.files = null;
    },
    async submit() {
      let params = new FormData();
      params.append("title", this.title);
      params.append("content", this.content);
      params.append("team_id", this.$route.params.team_id);
      if (this.files !== null) {
        params.append("files", this.files);
      }
      this.createMessage(params);
      this.closeDialog();
    },
  },
};
</script>
