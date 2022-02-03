<template>
  <v-col>
    <v-sheet
    min-height="85vh"
    rounded="lg"
    >
    <v-container>
      <v-row>
        <v-col cols="12">
        <v-card
          class="pa-2"
          outlined
          tile
        >
          .col-9
        </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container>
      <v-row>
        <v-col cols="12">
            <v-form>
            <v-container>
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    v-model="message"
                    :append-icon="marker ? 'mdi-map-marker' : 'mdi-map-marker-off'"
                    :append-outer-icon="message ? 'mdi-send' : 'mdi-microphone'"
                    :prepend-icon="icon"
                    filled
                    clear-icon="mdi-close-circle"
                    clearable
                    label="Message"
                    type="text"
                    @click:append="toggleMarker"
                    @click:append-outer="sendMessage"
                    @click:prepend="changeIcon"
                    @click:clear="clearMessage"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
    </v-sheet>
  </v-col>
</template>

<script>
  export default {
    data: () => ({
      password: 'Password',
      show: false,
      message: '',
      marker: true,
      iconIndex: 0,
      icons: [
        'mdi-emoticon',
        'mdi-emoticon-cool',
        'mdi-emoticon-dead',
        'mdi-emoticon-excited',
        'mdi-emoticon-happy',
        'mdi-emoticon-neutral',
        'mdi-emoticon-sad',
        'mdi-emoticon-tongue',
      ],
    }),

    computed: {
      icon () {
        return this.icons[this.iconIndex]
      },
    },

    methods: {
      toggleMarker () {
        this.marker = !this.marker
      },
      sendMessage () {
        this.resetIcon()
        this.clearMessage()
      },
      clearMessage () {
        this.message = ''
      },
      resetIcon () {
        this.iconIndex = 0
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
    },
  }
</script>