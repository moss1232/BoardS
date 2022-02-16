import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/login",
    name: "Login",
    components: {
      default: () => import("../components/pages/Login.vue"),
    },
  },
  {
    path: "/signup",
    name: "Signup",
    components: {
      default: () => import("../components/pages/Signup.vue"),
    },
  },
  {
    path: "/Message/:id",
    name: "Message",
    components: {
      default: () => import("../components/pages/Message.vue"),
      header: () => import("../components/layouts/Header.vue"),
    },
  },
  {
    path: "/Calendar/:id",
    name: "Calendar",
    components: {
      default: () => import("../components/pages/Calendar.vue"),
      header: () => import("../components/layouts/Header.vue"),
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
