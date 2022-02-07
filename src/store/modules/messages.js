import axios from "axios";
import { serializeMessage } from "../../functions/serializers";

const apiUrl = "http://127.0.0.1:3000";

const state = {
  messages: [],
  message: null,
  // clickedDate: null,
};

const getters = {
  messages: (state) => state.messages.map((message) => serializeMessage(message)),
  message: (state) => serializeMessage(state.message),
  // clickedDate: (state) => state.clickedDate,
};

const mutations = {
  setMessages: (state, messages) => (state.messages = messages),
  // appendmessage: (state, message) => (state.messages = [...state.messages, message]),
  setMessage: (state, message) => (state.message = message),
  // removemessage: (state, message) =>
  //   (state.messages = state.messages.filter((e) => e.id !== message.id)),
  // resetmessage: (state) => (state.message = null),
  // updatemessage: (state, message) =>
  //   (state.messages = state.messages.map((e) => (e.id === message.id ? message : e))),
  // setEditMode: (state, bool) => (state.isEditMode = bool),
  // setClickedDate: (state, date) => (state.clickedDate = date),
};

const actions = {
  async fetchMessages({ commit }) {
    const response = await axios.get(`${apiUrl}/messages`);
    commit("setMessages", response.data);
  },
  // async createMessage({ commit }, message) {
  //   const response = await axios.post(`${apiUrl}/messages`, message);
  //   commit("appendmessage", response.data);
  // },
  // async deleteMessage({ commit }, id) {
  //   const response = await axios.delete(`${apiUrl}/messages/${id}`);
  //   commit("removemessage", response.data);
  //   commit("resetmessage");
  // },
  setMessage({ commit }, message) {
    commit("setmessage", message);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
