<template>
  <v-container>
    <v-row>
      <teamlist/>
      <todolist/>
    </v-row>
  </v-container>
</template>

<script>
import Teamlist from '../components/Teamlist.vue'
import Todolist from '../components/Todolist.vue'

export default {
  components: { Teamlist, Todolist },
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