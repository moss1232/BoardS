<template>
  <div class="container">
    <v-sheet height="100vh">
      <v-container class="pt-16">
        <div class="my-12">
        </div>
        <v-row class="justify-center my-30">
          <img
            height="150"
            width="200"
            id="image_preview"
            src="../../../public/images/logo2.png"
          />
        </v-row>
        <v-row class="justify-center">
          <span> </span>
          <v-btn class="info" @click="redirectToLogin"> 始める </v-btn>
        </v-row>
      </v-container>
    </v-sheet>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToLogin() {
      this.$router.push({ name: "Login" });
    },
  }
};
</script>

<style scoped>
</style>
   