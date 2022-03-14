import axios from "axios";
import { serializeTeam } from "../../functions/serializers";

const apiUrl = "http://127.0.0.1:3000/api";

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
        .then(response => {
          res.data = response.data
          resolve(response);
          commit("appendTeam", res.data);
        }).catch(error => {
          res.data = error
          reject(error);
        }).finally(() => {
        });
    }
    );

    // async createTeam({ commit }, team) {
    //   const res = await axios
    //     .post(`${apiUrl}/teams`, team, {
    //       headers: {
    //         uid: window.localStorage.getItem("uid"),
    //         "access-token": window.localStorage.getItem("access-token"),
    //         client: window.localStorage.getItem("client"),
    //       },
    //     })
    //   commit("appendTeam", res.data);
    // }
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
