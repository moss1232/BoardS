import axios from "axios";
import { serializeTeam } from "../../functions/serializers";

const apiUrl = process.env.VUE_APP_API_URL;

const state = {
  teams: [],
  team: null,
};

const getters = {
  teams: (state) => state.teams.map((team) => serializeTeam(team)),
  team: (state) => serializeTeam(state.team),
};

const mutations = {
  setTeams: (state, teams) => (state.teams = teams),
  appendTeam: (state, team) => (state.teams = [...state.teams, team]),
  removeTeam: (state, team) =>
    (state.teams = state.teams.filter((e) => e.id !== team.id)),
};

const actions = {
  async fetchTeams({ commit }) {
    const response = await axios.get(`${apiUrl}/teams`, {
      headers: {
        uid: window.localStorage.getItem("uid"),
        "access-token": window.localStorage.getItem("access-token"),
        client: window.localStorage.getItem("client"),
      },
    });
    commit("setTeams", response.data);
  },

  async createTeam({ commit }, team) {
    const res = {
      data: "",
    };
    await new Promise((resolve, reject) => {
      axios
        .post(`${apiUrl}/teams`, team, {
          headers: {
            uid: window.localStorage.getItem("uid"),
            "access-token": window.localStorage.getItem("access-token"),
            client: window.localStorage.getItem("client"),
          },
        })
        .then((response) => {
          res.data = response.data;
          resolve(response);
          commit("appendTeam", res.data);
        })
        .catch((error) => {
          res.data = error;
          reject(error);
        });
    });
  },

  async JoinTeam({ commit }, params) {
    const res = {
      data: "",
    };
    await new Promise((resolve, reject) => {
      axios
        .post(`${apiUrl}/teams/join`, params, {
          headers: {
            uid: window.localStorage.getItem("uid"),
            "access-token": window.localStorage.getItem("access-token"),
            client: window.localStorage.getItem("client"),
          },
        })
        .then((response) => {
          res.data = response.data;
          resolve(response);
          commit("appendTeam", res.data);
        })
        .catch((error) => {
          res.data = error;
          reject(error);
        });
    });
  },

  async leaveTeam({ commit }, params) {
    const res = {
      data: "",
    };
    await new Promise((resolve, reject) => {
      axios
        .delete(`${apiUrl}/teams/leave`, {
          headers: {
            uid: window.localStorage.getItem("uid"),
            "access-token": window.localStorage.getItem("access-token"),
            client: window.localStorage.getItem("client"),
          },
          params: {
            name: params,
          },
        })
        .then((response) => {
          res.data = response.data;
          resolve(response);
          commit("removeTeam", response.data);
        })
        .catch((error) => {
          res.data = error;
          reject(error);
        });
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
