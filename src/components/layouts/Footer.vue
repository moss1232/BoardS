<template>
  <v-footer app height="72" inset>
    <v-container>
      <v-row>
        <v-col>
          <v-form>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  v-model="message"
                  label="Message"
                  type="text"
                  append-icon="mdi-send"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    message: "",
  }),

  methods: {
    sendMessage() {},
  },
};
</script>
