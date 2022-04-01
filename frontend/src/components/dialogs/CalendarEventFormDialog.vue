<template>
  <v-card class="pb-12">
    <v-card-actions class="d-flex justify-end pa-2">
      <v-btn icon @click="closeDialog">
        <v-icon size="20px">mdi-close</v-icon>
      </v-btn>
    </v-card-actions>
    <v-card-text>
      <DialogSection icon="mdi-square" :color="event.color">
        <v-text-field v-model="name" label="タイトル"></v-text-field>
      </DialogSection>
      <DialogSection icon="mdi-clock-outline">
        <CalendarDateForm v-model="startDate" />
        <div v-show="!allDay">
          <CalendarTimeForm v-model="startTime" />
        </div>
        <span class="px-2">–</span>
        <CalendarDateForm v-model="endDate" :isError="isInvalidDatetime" />
        <div v-show="!allDay">
          <CalendarTimeForm v-model="endTime" :isError="isInvalidDatetime" />
        </div>
      </DialogSection>
      <DialogSection>
        <CheckBox v-model="allDay" label="終日" class="ma-0 pa-0" />
      </DialogSection>
      <DialogSection icon="mdi-card-text-outline">
        <CalendarTextForm v-model="description" />
      </DialogSection>
    </v-card-text>
    <v-card-actions class="d-flex justify-end">
      <v-btn @click="cancel">キャンセル</v-btn>
      <v-btn :disabled="isInvalid" @click="submit">保存</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import { validationMixin } from "vuelidate";
import { required } from "vuelidate/lib/validators";

import DialogSection from "./CalendarDialog.vue";
import CalendarDateForm from "./CalendarDateForm";
import CalendarTimeForm from "./CalendarTimeForm";
import CalendarTextForm from "./CalendarTextForm";
import CheckBox from "./CheckBox";
import { isGreaterEndThanStart } from "../../functions/datetime";

export default {
  mixins: [validationMixin],
  components: {
    DialogSection,
    CalendarDateForm,
    CalendarTimeForm,
    CalendarTextForm,
    CheckBox,
  },
  data: () => ({
    name: "",
    startDate: null,
    startTime: null,
    endDate: null,
    endTime: null,
    description: "",
    allDay: false,
  }),
  computed: {
    ...mapGetters("events", ["event"]),
    isInvalidDatetime() {
      return !isGreaterEndThanStart(
        this.startDate,
        this.startTime,
        this.endDate,
        this.endTime,
        this.allDay
      );
    },
    isInvalid() {
      return this.$v.$invalid || this.isInvalidDatetime;
    },
  },
  validations: {
    name: { required },
    startDate: { required },
    endDate: { required },
  },
  created() {
    this.name = this.event.name;
    this.startDate = this.event.startDate;
    this.startTime = this.event.startTime;
    this.endDate = this.event.endDate;
    this.endTime = this.event.endTime;
    this.description = this.event.description;
    this.allDay = !this.event.timed;
  },
  methods: {
    ...mapActions("events", [
      "setEvent",
      "setEditMode",
      "createEvent",
      "updateEvent",
      "Event",
    ]),
    closeDialog() {
      this.setEditMode(false);
      this.setEvent(null);
    },
    submit() {
      if (this.isInvalid) {
        return;
      }
      const params = {
        ...this.event,
        name: this.name,
        start: `${this.startDate} ${this.startTime || ""}`,
        end: `${this.endDate} ${this.endTime || ""}`,
        description: this.description,
        timed: !this.allDay,
        team_id: this.$route.params.team_id,
      };
      if (params.id) {
        this.updateEvent(params);
      } else {
        this.createEvent(params);
      }
      this.closeDialog();
    },
    cancel() {
      this.setEditMode(false);
      if (!this.event.id) {
        this.setEvent(null);
      }
    },
  },
};
</script>
