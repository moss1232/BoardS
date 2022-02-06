import Vue from "vue";
import Vuex from "vuex";
import events from "./modules/events";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: "Hello Vuex",
  },
  modules: {
    events,
  },
});

export default store