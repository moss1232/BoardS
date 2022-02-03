<template>
  <v-app id="inspire">
    <router-view name="sidebar" />
    <v-main class="grey lighten-3">
      <router-view name="default"/>
    </v-main>
    <router-view name="footer"/>
  </v-app>
</template>

<script>
export default {
  data: () => ({
  }),
};
</script>
