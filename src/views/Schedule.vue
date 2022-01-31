<template>
  <v-app id="inspire">
    <Header />    
    <v-main class="grey lighten-3">
      <v-container>
        <v-row>
          <teamlist/>
          <Calendar/>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Calendar from '../components/Calendar.vue'
import Teamlist from '../components/Teamlist.vue'
import Header from '../components/Header.vue'

export default {
  components: { Header, Calendar, Teamlist }
}
</script>