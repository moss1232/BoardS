<template>
      <v-footer
      app
      height="72"
      inset
    >
    <v-container>
      <v-row>
        <v-col>
            <v-form>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="message"
                    filled
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

      <!-- <v-text-field
        background-color="grey lighten-1"
        dense
        flat
        hide-details
        rounded
        solo
      ></v-text-field> -->
    </v-footer>
</template>

<script>
  export default {
    data: () => ({
      message: '',
    }),

    methods: {
      sendMessage () {
      },
    },
  }
</script>