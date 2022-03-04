<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      max-width="600px"
      persistent
      @click:outside="closeDialog"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" v-bind="attrs" v-on="on" fab bottom right fixed>
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" sm="6" md="4">
                <v-text-field
                  label="タイトル"
                  required
                  v-model="title"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="テキスト"
                  type="text"
                  required
                  auto-grow
                  v-model="content"
                ></v-textarea>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="submit">
            <!-- {{user}} -->
            <v-icon>mdi-send</v-icon>
            <v-icon></v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";

export default {
  data: () => ({
    dialog: false,
    title: "",
    content: "",
    team_id: ""
  }),
  methods: {
    ...mapActions("messages", ["createMessage"]),
    closeDialog() {
      this.title = null;
      this.content = null;
      this.dialog = false;
    },
    submit() {
      const params = {
        title: this.title,
        content: this.content,
        team_id: this.$route.params['team_id'],
      };
      this.createMessage(params);
      this.closeDialog();
    },
  },
};
</script>
