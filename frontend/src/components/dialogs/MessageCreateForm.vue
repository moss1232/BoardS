<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      @click:outside="closeDialog"
      :width="$vuetify.breakpoint.xs ? 300 : 600"
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
                <v-text-field label="タイトル" required v-model="title">
                </v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  filled
                  label="テキスト"
                  type="text"
                  required
                  auto-grow
                  v-model="content"
                >
                </v-textarea>
              </v-col>
              <v-col cols="12">
                <v-file-input
                  truncate-length="100"
                  label="ファイル名"
                  chips
                  type="file"
                  v-model="files"
                ></v-file-input>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            :disabled="isInvalid"
            color="blue darken-1"
            text
            @click="submit"
          >
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],
  data: () => ({
    dialog: false,
    title: null,
    content: null,
    files: null,
  }),
  validations: {
    title: { required },
    content: { required },
  },
  computed: {
    isInvalid() {
      return this.$v.$invalid;
    },
  },
  methods: {
    ...mapActions("messages", ["createMessage"]),
    closeDialog() {
      this.title = null;
      this.content = null;
      this.files = null;
      this.dialog = false;
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
