import Vue from 'vue';
import Vuetify from 'vuetify/lib';
import "@mdi/font/css/materialdesignicons.css";
// import Vuetify from 'vuetify/lib/framework';
// import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);

// const opts = {}

export default new Vuetify({
  icons: {
    iconfont: "mdi"
  },
});
