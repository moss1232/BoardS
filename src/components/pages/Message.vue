<template>
  <v-container class="py-8 px-6">
    <v-row>
      <v-col>
        <v-card>
          <v-list two-line>
            <template>
              <v-list-item v-for="message in messages" :key="message.title">
                <v-list-item-avatar color="grey darken-1" size="36px">
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="hidden-xs-only" sm="5" md="3"
                    >{{ message.title }}
                  </v-list-item-title>

                  <v-list-item-subtitle class="text-no-wrap" cols="5" sm="3">
                    {{ message.content }},{{ $route.params.id }}
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-list>
          <MessageCreateFormButton />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MessageCreateFormButton from "../layouts/MessageCreateFormButton.vue";
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

  created() {
    this.fetchMessages(this.$route.params.id);
    this.$watch(
      () => this.$route.params.id,
      (newVal) => {
        this.fetchMessages(newVal)
      }
    );
  },
};
</script>
