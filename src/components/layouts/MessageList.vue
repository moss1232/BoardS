<template>
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-list two-line>
            <template>
              <v-list-item v-for="message in messages" :key="message.title"
              link to="#">
                <v-list-item-avatar color="grey darken-1"> </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>
                    {{ message.title }}
                    </v-list-item-title>
                  <v-list-item-subtitle>
                    {{ message.content }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <MessageCreateFormButton />
  </v-container>
</template>

<script>
import MessageCreateFormButton from "./MessageCreateFormButton.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  components: { MessageCreateFormButton },
  data: () => ({
      }),
  computed: {
    ...mapGetters("messages", ["messages"]),
  },
  methods: {
    ...mapActions("messages", ["fetchMessages"]),
  },
  mounted() {
    this.fetchMessages()
  },
};
</script>
