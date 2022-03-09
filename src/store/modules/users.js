import axios from "axios";
import { serializeUser } from "../../functions/serializers";

const apiUrl = "http://127.0.0.1:3000/api";

const state = {
  users: [],
  user: null,
};

const getters = {
  users: (state) => state.users.map((user) => serializeUser(user)),
  user: (state) => serializeUser(state.user),
};

const mutations = {
  setUsers: (state, users) => (state.users = users),
  appendUser: (state, user) => (state.users = [...state.users, user]),
  setUser: (state, user) => (state.user = user),
  setEditMode: (state, bool) => (state.isEditMode = bool),
};

const actions = {
  async fetchUser({ commit }) {
    const response = await axios.get(`${apiUrl}/users`, {
      headers: {
        uid: window.localStorage.getItem("uid"),
        "access-token": window.localStorage.getItem("access-token"),
        client: window.localStorage.getItem("client"),
      },
    });
    commit("setUser", response.data);
  },
  async createUser({ commit }, user) {
    const response = await axios.post(`${apiUrl}/users`, user, {
      headers: {
        uid: window.localStorage.getItem("uid"),
        "access-token": window.localStorage.getItem("access-token"),
        client: window.localStorage.getItem("client"),
      },
    });
    commit("appendUser", response.data);
  },
  setUser({ commit }, user) {
    commit("setUser", user);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
