import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

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
    path: "/:team_id",
    components: {
      default: () => import("../components/pages/Home.vue"),
      header: () => import("../components/layouts/Header.vue"),
    },
    children: [
      {
        path: "Message",
        components: {
          default: () => import("../components/pages/Homea.vue"),
        },
        children: [
          {
            path: "",
            name: "TeamMessages",
            components: {
              default: () => import("../components/pages/Message.vue"),
            },
          },
          {
            path: ":message_id",
            name: "TeamMessageDetail",
            components: {
              default: () => import("../components/pages/MessageDetail.vue"),
            },
          },
        ],
      },
      {
        path: "Calendar",
        components: {
          default: () => import("../components/pages/Homea.vue"),
        },
        children: [
          {
            path: "",
            name: "TeamCalendars",
            components: {
              default: () => import("../components/pages/Calendar.vue"),
            },
          },
          {
            path: ":event_id",
            name: "TeamCalendarDetail",
            components: {
              default: () => import("../components/pages/Calendar.vue"),
            },
          },
        ],
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
