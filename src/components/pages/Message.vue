<template>
  <v-container class="py-8 px-6">
    <v-row>
      <v-col>
        <v-card>
          <v-list two-line>
            <template>
              <v-list-item v-for="message in messages" :key="message.title" link 
            :to="{ name: 'TeamMessageDetail', params: { message_id: message.id } }"
              >
            <v-list-item-avatar>
              <img v-if = "message.message_user_avatar" alt="Avatar" :src="message.message_user_avatar" />
              <img v-else src='../../../public/images/default.png'>
            </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title class="hidden-xs-only" sm="5" md="3"
                    >{{ message.title }},
                  </v-list-item-title>

                  <v-list-item-subtitle class="text-no-wrap" cols="5" sm="3">
                    {{ message.content }}
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

  computed: {
    ...mapGetters("messages", ["messages"]),
  },
  methods: {
    ...mapActions("messages", ["fetchMessages"]),
  },

  created() {
    this.fetchMessages(this.$route.params.team_id);
    this.$watch(
      () => this.$route.params.team_id,
      (newVal) => {
        this.fetchMessages(newVal)
      }
    );
  },
};
</script>
