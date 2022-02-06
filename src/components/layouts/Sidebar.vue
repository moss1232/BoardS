<template>
  <v-navigation-drawer v-model="drawer" app>
    <v-sheet color="grey lighten-4" class="pt-4 px-4">
      <v-row align="center">
        <v-col cols="12">
          <v-select :items="items" item-text="state" label="Team"></v-select>
        </v-col>
      </v-row>
    </v-sheet>

    <v-divider></v-divider>

    <v-list>
      <v-list-item-group v-model="model" mandatory color="indigo">
        <v-list-item
          v-for="[icon, text, link_to] in links"
          :key="icon"
          :to="link_to"
          link
        >
          <!-- <router-link to="/todo"> -->

          <v-list-item-icon>
            <v-icon>{{ icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item-content>
          <!-- </router-link> -->
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    links: [
      ["mdi-message", "Message", "/"],
      ["mdi-checkbox-outline", "Todo", "/todo"],
      ["mdi-calendar", "Schedule", "/schedule"],
      ["mdi-account-circle", "Setting", "/setting"],
    ],

    items: [{ state: "Florida" }, { state: "Georgia" }],
  }),
};
</script>
