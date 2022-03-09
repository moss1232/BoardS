import Vue from "vue";
import Vuex from "vuex";
import events from "./modules/events";
import messages from "./modules/messages";
import teams from "./modules/teams";
import users from "./modules/users";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    message: "Hello Vuex",
  },
  modules: {
    events,
    messages,
    teams,
    users,
  },
});

export default store;
