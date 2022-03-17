import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Top",
    components: {
      header: () => import("../components/pages/Top.vue"),
    },
  },
  {
    path: "/home",
    name: "Home",
    components: {
      header: () => import("../components/layouts/Header.vue"),
      meta: { requiresAuth: true },
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
    meta: { requiresAuth: true },
  },
  {
    path: "/teamsetting",
    name: "TeamSetting",
    components: {
      header: () => import("../components/layouts/Header.vue"),
      default: () => import("../components/pages/Home.vue"),
    },
    meta: { requiresAuth: true },
    children: [
      {
        path: "create",
        name: "TeamCreate",
        components: {
          default: () => import("../components/pages/TeamCreateForm.vue"),
        },
        meta: { requiresAuth: true },
      },
      {
        path: "search",
        name: "TeamSearch",
        components: {
          default: () => import("../components/pages/TeamSearchForm.vue"),
        },
        meta: { requiresAuth: true },
      },
      {
        path: "leave",
        name: "TeamLeave",
        components: {
          default: () => import("../components/pages/TeamLeaveForm.vue"),
        },
        meta: { requiresAuth: true },
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
            meta: { requiresAuth: true },
          },
          {
            path: ":message_id",
            name: "TeamMessageDetail",
            components: {
              default: () => import("../components/pages/MessageDetail.vue"),
            },
            meta: { requiresAuth: true },
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
            meta: { requiresAuth: true },
          },
          {
            path: ":event_id",
            name: "TeamCalendarDetail",
            components: {
              default: () => import("../components/pages/Calendar.vue"),
            },
            meta: { requiresAuth: true },
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

router.beforeEach((to, from, next) => {
  const token = [
    window.localStorage.getItem("uid"),
    window.localStorage.getItem("access-token"),
    window.localStorage.getItem("client"),
  ];
  const tokenTest = (arg) => !!arg == true;
  if (to.meta.requiresAuth && !token.every(tokenTest)) {
    next({ name: "Login" });
  } else {
    next();
  }
});
  
  export default router;
  