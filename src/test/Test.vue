<template>
  <div>
    <h1>Calendar</h1>
    <p>messages:</p>
    <p>{{ messages }}</p>
    <ul>
      <li v-for="message in messages" :key="message.id">
        {{ message.title }}
      </li>
    </ul>
    <button type="submit" @click="fetchMessages()">fetchmessages</button>
    <TestDetails />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TestDetails from "../test/TestDetails.vue";

export default {
  components: {
    TestDetails,
  },
  data: () => ({
    messages: [],
  }),
  computed: {
    ...mapGetters("messages", ["messages"]),
  },
  ...mapActions("messages", ["fetchMessages"]),
};
</script>
