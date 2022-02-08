<template>
  <v-app>
    <!-- <router-view name="sidebar" /> -->
    <router-view name="header" />
    <v-main class="grey lighten-3">
      <router-view name="main_header" />
      <router-view name="default" />
    </v-main>
    <router-view name="footer" />
  </v-app>
</template>

<script>
export default {
  data: () => ({}),
};
</script>
