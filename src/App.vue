<template>
  <v-app>
    <router-view name="header" />
    <v-main class="grey lighten-3">
      <router-view/>
    </v-main>
    <router-view name="footer" />
  </v-app>
</template>
