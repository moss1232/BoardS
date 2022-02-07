<template>
  <v-container class="py-8 px-6" fluid>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-list two-line>
            <template v-for="n in 6">
              <v-list-item :key="n">
                <v-list-item-avatar color="grey darken-1"> </v-list-item-avatar>

                <v-list-item-content>
                  <v-list-item-title>
                    Title 
                    </v-list-item-title>

                  <v-list-item-subtitle>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Nihil repellendus distinctio similique
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider v-if="n !== 6" :key="`divider-${n}`" inset></v-divider>
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
  data: () => ({}),
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
