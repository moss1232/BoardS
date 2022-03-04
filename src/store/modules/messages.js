import axios from "axios";
import { serializeMessage } from "../../functions/serializers";

const apiUrl = "http://127.0.0.1:3000/api";

const state = {
  messages: [],
  message: null,
};

const getters = {
  messages: (state) =>
    state.messages.map((message) => serializeMessage(message)),
  message: (state) => serializeMessage(state.message),
};

const mutations = {
  setMessages: (state, messages) => (state.messages = messages),
  appendMessage: (state, message) => (state.messages = [...state.messages, message]),
  setMessage: (state, message) => (state.message = message),
  setEditMode: (state, bool) => (state.isEditMode = bool),
};

const actions = {
  async fetchMessages({ commit }, team_id) {
  const response = await axios.get(
    `${apiUrl}/messages/${team_id}`,
    {
      // `${apiUrl}/team/messages`,{
      headers: {
        uid: window.localStorage.getItem("uid"),
        "access-token": window.localStorage.getItem("access-token"),
        client: window.localStorage.getItem("client"),
      },
    }
  );
    commit("setMessages", response.data);
  },
  async createMessage({ commit }, message) {
    const response = await axios.post(`${apiUrl}/messages`, message, {
      headers: {
        uid: window.localStorage.getItem("uid"),
        "access-token": window.localStorage.getItem("access-token"),
        client: window.localStorage.getItem("client"),
      },
    });
    commit("appendMessage", response.data);
  },
  setMessage({ commit }, message) {
    commit("setMessage", message);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
