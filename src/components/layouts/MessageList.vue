<template>
  <v-container>
    <v-row justify="center">
      <v-expansion-panels popout>
        <v-expansion-panel
          v-for="message in messages"
          :key="message.title"
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row align="center" class="spacer" no-gutters>
              <v-col cols="4" sm="2" md="1">
                <v-avatar size="36px">
                  <img v-if="message.avatar" alt="Avatar" />
                </v-avatar>
              </v-col>
              <v-col class="hidden-xs-only" sm="5" md="3">
                <strong v-html="message.title"></strong>
              </v-col>
              <v-col class="text-no-wrap" cols="5" sm="3">
                <strong v-html="message.content"></strong>
              </v-col>
            </v-row>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-divider></v-divider>
            <v-card-text v-text="lorem"></v-card-text>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-row>
    <MessageCreateFormButton />
  </v-container>
</template>

<script>
import MessageCreateFormButton from "./MessageCreateFormButton.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { MessageCreateFormButton },
  data: () => ({}),
  computed: {
    ...mapGetters("messages", ["messages"]),
  },
  methods: {
    ...mapActions("messages", ["fetchMessages"]),
  },
  mounted() {
    this.fetchMessages();
  },
};
</script>
