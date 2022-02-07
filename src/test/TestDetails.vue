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
import axios from "axios";

export default {
  data: () => ({
    messages: [],
  }),
  methods: {
    fetchMessages() {
      axios
        .get("http://localhost:3000/messages")
        .then((response) => {
          this.messages = response.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
</script>
