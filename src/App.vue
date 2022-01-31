<template>
  <v-app id="inspire">
    <router-view name="header" />
    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  // name: 'App',

  data: () => ({
  }),
};
</script>
