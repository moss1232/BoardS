<template>
  <div class="container">
    <v-container>
      <div class="my-8"></div>
      <v-row>
      <v-col cols="12">
        <div class="content">
        <img src="../../../public/images/Content team-pana.png" width="500px" height="500px" />
        <img src="../../../public/images/Digital presentation-amico (1).png" width="500px" height="500px" />
        <div class="text-h3 my-4 font-weight-black">
          simple and easy shared tool!
        </div>
        <div class="text-h5 mt-8">
          schedule adjustment by the small team without stress
        </div>
          <!-- <h1>simple and easy shared tool!</h1> -->
        <v-btn class="info my-12" @click="redirectToLogin"> start! </v-btn>
        </div>
      </v-col>
        <!-- <img src="../../../public/images/sample1.png" width="660px" height="300px" />
        <img src="../../../public/images/sample2.png" width="660px" height="300px" /> -->
    </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  methods: {
    redirectToLogin() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style scoped>
.content{
  text-align: center;

}
</style>
