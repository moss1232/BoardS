<template>
  <div>
    <h1>CalendarDetails</h1>
    <div v-for="message in messages" :key="message.id">
      <h2>{{ message.title }}</h2>
      <h2>{{ message.content }}</h2>
    </div>

    <button type="submit" @click="fetchMessages()">fetchmessages</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data: () => ({}),
  computed: {
    ...mapGetters("messages", ["messages"]),
  },
  methods: {
    ...mapActions("messages", ["fetchMessages"]),
  },
  mounted() {
    this.fetchMessages();
  },
};
</script>
