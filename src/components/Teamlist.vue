<template>
  <v-col cols="2">
    <v-sheet rounded="1g">
      <v-list color="transparent">
        <v-list-item
        v-for="(item, i) in items"
        :key="i"
        link
        >
          <v-list-item-icon>
            <v-icon v-text="item.icon"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-col>
</template>

<script>
  export default {
    data: () => ({
      selectedItem: 1,
      items: [
        { text: 'labo', icon: 'mdi-clock' },
        { text: 'bascket ball', icon: 'mdi-account' },
        { text: 'part time', icon: 'mdi-flag' },
      ],
    }),
  }
</script>
