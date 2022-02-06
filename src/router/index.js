import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Message",
    components: {
      default: () => import("../components/pages/Message.vue"),
      sidebar: () => import("../components/layouts/Sidebar.vue"),
      footer: () => import("../components/layouts/Footer.vue"),
    },
  },
  {
    path: "/schedule",
    name: "Schedule",
    components: {
      default: () => import("../components/pages/Schedule.vue"),
      sidebar: () => import("../components/layouts/Sidebar.vue"),
    },
  },
  {
    path: "/todo",
    name: "Todo",
    components: {
      default: () => import("../components/pages/Todo.vue"),
      sidebar: () => import("../components/layouts/Sidebar.vue"),
    },
  },
  {
    path: "/login",
    name: "Login",
    components: {
      default: () => import("../components/pages/Login.vue"),
      // sidebar: () => import('../components/pages/sidebar.vue'),
    },
  },
  {
    path: "/signup",
    name: "Signup",
    components: {
      default: () => import("../components/pages/Signup.vue"),
      // sidebar: () => import('../components/pages/sidebar.vue'),
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
