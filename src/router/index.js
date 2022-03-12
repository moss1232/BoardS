import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Home",
    components: {
      header: () => import("../components/layouts/Header.vue"),
      // default: () => import("../components/pages/Login.vue"),
    },
  },
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
    path: "/setting",
    name: "Setting",
    components: {
      header: () => import("../components/layouts/Header.vue"),
      default: () => import("../components/pages/Setting.vue"),
    },
  },
  {
    path: "/teamsetting",
    name: "TeamSetting",
    components: {
      header: () => import("../components/layouts/Header.vue"),
      default: () => import("../components/pages/Home.vue"),
    },
    children: [
      {
        path: "create",
        name: "TeamCreate",
        components: {
          default: () => import("../components/pages/TeamCreateForm.vue"),
        },
      },
      {
        path: "search",
        name: "TeamSearch",
        components: {
          default: () => import("../components/pages/TeamSearchForm.vue"),
        },
      },
      {
        path: "leave",
        name: "TeamLeave",
        components: {
          default: () => import("../components/pages/TeamLeaveForm.vue"),
        },
      },
    ],
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
          default: () => import("../components/pages/Home.vue"),
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
          default: () => import("../components/pages/Home.vue"),
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
