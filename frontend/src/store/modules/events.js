import axios from "axios";
import { serializeEvent } from "../../functions/serializers";

const apiUrl = "http://127.0.0.1:3000/api/teams";

const state = {
  events: [],
  event: null,
  isEditMode: false,
  clickedDate: null,
};

const getters = {
  events: (state) => state.events.map((event) => serializeEvent(event)),
  event: (state) => serializeEvent(state.event),
  isEditMode: (state) => state.isEditMode,
  clickedDate: (state) => state.clickedDate,
};

const mutations = {
  setEvents: (state, events) => (state.events = events),
  appendEvent: (state, event) => (state.events = [...state.events, event]),
  setEvent: (state, event) => (state.event = event),
  removeEvent: (state, event) =>
    (state.events = state.events.filter((e) => e.id !== event.id)),
  resetEvent: (state) => (state.event = null),
  updateEvent: (state, event) =>
    (state.events = state.events.map((e) => (e.id === event.id ? event : e))),
  setEditMode: (state, bool) => (state.isEditMode = bool),
  setClickedDate: (state, date) => (state.clickedDate = date),
};

const actions = {
  async fetchEvents({ commit }, team_id) {
    const response = await axios.get(`${apiUrl}/${team_id}/events`, {
      headers: {
        uid: window.localStorage.getItem("uid"),
        "access-token": window.localStorage.getItem("access-token"),
        client: window.localStorage.getItem("client"),
      },
    });
    commit("setEvents", response.data);
  },
  async createEvent({ commit }, event) {
    const response = await axios.post(
      `${apiUrl}/${event.team_id}/events`,
      event,
      {
        headers: {
          uid: window.localStorage.getItem("uid"),
          "access-token": window.localStorage.getItem("access-token"),
          client: window.localStorage.getItem("client"),
        },
      }
    );
    commit("appendEvent", response.data);
  },
  async deleteEvent({ commit }, params) {
    const response = await axios.delete(
      `${apiUrl}/${params.team_id}/events/${params.id}`,
      {
        headers: {
          uid: window.localStorage.getItem("uid"),
          "access-token": window.localStorage.getItem("access-token"),
          client: window.localStorage.getItem("client"),
        },
        params: {
          team_id: params.team_id,
          id: params.id,
        },
      }
    );
    commit("removeEvent", response.data);
    commit("resetEvent");
  },
  async updateEvent({ commit }, params) {
    const response = await axios.put(
      `${apiUrl}/${params.team_id}/events/${params.id}`,
      params,
      {
        headers: {
          uid: window.localStorage.getItem("uid"),
          "access-token": window.localStorage.getItem("access-token"),
          client: window.localStorage.getItem("client"),
        },
      }
    );
    commit("updateEvent", response.data);
  },
  setEvent({ commit }, event) {
    commit("setEvent", event);
  },
  setEditMode({ commit }, bool) {
    commit("setEditMode", bool);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
