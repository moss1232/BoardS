import axios from "axios";
import { serializeTeam } from "../../functions/serializers";

const apiUrl = "http://127.0.0.1:3000/api";

const state = {
  teams: [],
  team: null,
};

const getters = {
  teams: (state) =>
    state.teams.map((team) => serializeTeam(team)),
  team: (state) => serializeTeam(state.team),
};

const mutations = {
  setTeams: (state, teams) => (state.teams = teams),
  appendTeam: (state, team) =>
    (state.teams = [...state.teams, team]),
  setTeam: (state, team) => (state.team = team),
  setEditMode: (state, bool) => (state.isEditMode = bool),
};

const actions = {
  async fetchTeams({ commit }) {
    const response = await axios.get(`${apiUrl}/user/team`, {
      headers: {
        uid: window.localStorage.getItem("uid"),
        "access-token": window.localStorage.getItem("access-token"),
        client: window.localStorage.getItem("client"),
      },
    });
    commit("setTeams", response.data);
  },
  async createTeam({ commit }, team) {
    const response = await axios.post(`${apiUrl}/user/team`, team, {
      headers: {
        uid: window.localStorage.getItem("uid"),
        "access-token": window.localStorage.getItem("access-token"),
        client: window.localStorage.getItem("client"),
      },
    });
    commit("appendTeam", response.data);
  },
  setTeam({ commit }, team) {
    commit("setTeam", team);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
