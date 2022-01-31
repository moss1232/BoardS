<template>
  <v-app id="inspire">
    <Header />    
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>

          <!-- container -->
          <v-col>
            <v-sheet
              min-height="70vh"
              rounded="lg"
            >
            <calendar/>
            </v-sheet>
          </v-col>

        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Calendar from '../components/Calendar.vue'
import Header from '../components/Header.vue'

export default {
  components: { Header, Calendar },
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