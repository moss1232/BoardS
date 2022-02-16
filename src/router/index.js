import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
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
  {
    path: "/",
    name: "Message",
    components: {
      default: () => import("../components/pages/Message/MessageRootPage.vue"),
      header: () => import("../components/layouts/Header.vue"),
    },
    children: [
      {
        path: ":id",
        name: "MessageShow",
        component: () => import("../components/pages/Message/MessageShow.vue"),
        // meta: { requireAuth: true },
      },
    ],
  },
  {
    path: "/Calendar",
    name: "Calendar",
    components: {
      default: () => import("../components/pages/Calendar/CalendarRootPage.vue"),
      header: () => import("../components/layouts/Header.vue"),
    },
    children: [
      {
        path: ":id",
        name: "CalendarShow",
        component: () => import("../components/pages/Calendar/CalendarShow.vue"),
      },
    ],
  },
  {
    path: "/test",
    name: "Test",
    components: {
      default: () => import("../test/Test.vue"),
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
