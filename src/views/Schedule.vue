<template>
  <v-container>
    <v-row>
      <teamlist/>
      <calendar/>
    </v-row>
  </v-container>
</template>

<script>
import Calendar from '../components/Calendar.vue'
import Teamlist from '../components/Teamlist.vue'

export default {
  components: { Calendar, Teamlist }
}
</script>