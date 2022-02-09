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
                <v-text-field label="タイトル" required v-model="title"></v-text-field>
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
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    title: '',
    content: '',
    dialog: false,
    newTask: null,
  }),
  computed: {
    ...mapGetters("messages", ["message"]),
  },
  methods: {
    ...mapActions("messages", ['setMessage', 'setEditMode', "createMessage"]),
    closeDialog() {
      this.setEditMode(false);
      this.setMessage(null);
    },
    submit() {
      const params = {
        title: this.title,
        content: this.content,
        
      };
      this.createMessage(params);
      this.closeDialog();
    },
  },
};
</script>
