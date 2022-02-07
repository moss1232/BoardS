import Vue from "vue";
import Vuex from "vuex";
import events from "./modules/events";
import messages from "./modules/messages";

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    message: "Hello Vuex",
  },
  modules: {
    events,
    messages,
  },
});

export default store