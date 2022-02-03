<template>
  <v-container>
    <v-row>
      <messageList/>
    </v-row>
  </v-container>
</template>

<script>
import MessageList from '../components/MessageList.vue'

export default {
  components: { MessageList },
  data: () => ({
  }),
}
</script>