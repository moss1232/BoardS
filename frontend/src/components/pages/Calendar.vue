<template>
  <v-container>
    <v-sheet
      tile
      height="5vh"
      color="grey lighten-3"
      class="d-flex align-center"
    >
      <v-btn outlined small class="ma-4" @click="setToday">今日</v-btn>
      <v-btn icon @click="$refs.calendar.prev()">
        <v-icon>mdi-chevron-left</v-icon>
      </v-btn>
      <v-btn icon @click="$refs.calendar.next()">
        <v-icon>mdi-chevron-right</v-icon>
      </v-btn>
      <v-toolbar-title>{{ title }}</v-toolbar-title>
    </v-sheet>

    <v-dialog :value="event !== null" @click:outside="closeDialog" :width="$vuetify.breakpoint.xs ? 300 : 600"
>
      <CalendarEventDetailDialog v-if="event !== null && !isEditMode" />
      <CalendarEventFormDialog v-if="event !== null && isEditMode" />
    </v-dialog>
    <v-sheet height="80vh">
      <v-calendar
        ref="calendar"
        :events="events"
        v-model="value"
        @change="fetchEvents($route.params.team_id)"
        locale="ja-jp"
        :day-format="(timestamp) => new Date(timestamp.date).getDate()"
        :month-format="
          (timestamp) => new Date(timestamp.date).getMonth() + 1 + ' /'
        "
        @click:event="showEvent"
        @click:day="initEvent"
      ></v-calendar>
    </v-sheet>
  </v-container>
</template>

<script>
import { format } from "date-fns";
import { mapGetters, mapActions } from "vuex";

import CalendarEventDetailDialog from "../dialogs/CalendarEventDetailDialog.vue";
import CalendarEventFormDialog from "../dialogs/CalendarEventFormDialog.vue";
import { getDefaultStartAndEnd } from "../../functions/datetime";

export default {
  components: {
    CalendarEventDetailDialog,
    CalendarEventFormDialog,
  },
  data: () => ({
    value: format(new Date(), "yyyy/MM/dd"),
  }),
  computed: {
    ...mapGetters("events", ["events", "event", "isEditMode"]),
    title() {
      return format(new Date(this.value), "yyyy年 M月");
    },
  },
  methods: {
    ...mapActions("events", ["fetchEvents", "setEvent", "setEditMode"]),
    setToday() {
      this.value = format(new Date(), "yyyy/MM/dd");
    },
    showEvent({ nativeEvent, event }) {
      this.setEvent(event);
      nativeEvent.stopPropagation();
    },
    closeDialog() {
      this.setEvent(null);
      this.setEditMode(false);
    },
    initEvent({ date }) {
      date = date.replace(/-/g, "/");
      const [start, end] = getDefaultStartAndEnd(date);
      this.setEvent({ name: "", start, end, timed: true });
      this.setEditMode(true);
    },
  },
  created() {
    this.$watch(
      () => this.$route.params.team_id,
      (newVal) => {
        this.fetchEvents(newVal);
      }
    );
  },
};
</script>
