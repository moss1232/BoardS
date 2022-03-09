<template>
  <v-card class="mx-auto my-12" max-width="600">
    <v-list-item-content class="justify-center">
      <div class="mx-auto text-center">
        <v-avatar color="brown" size="100" class="my-6">
          <img src="../../../public/images/default.png" />
        </v-avatar>
      </div>
      <v-card-text> 名前：{{user.name}}</v-card-text>
      <v-card-text> メールアドレス：{{user.email}}</v-card-text>
      <v-card-text> パスワードの変更{{user}}</v-card-text>
    </v-list-item-content>
    <div>
      
    </div>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({
    drawer: null,
  }),
  computed: {
    ...mapGetters("users", ["user"]),
  },
  methods: {
    ...mapActions("users", ["fetchUser"]),
  },
  created() {
    this.fetchUser();
  },
};
</script>
