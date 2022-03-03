import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/:id",
    components: {
      header: () => import("../components/layouts/Header.vue"),
      default: () => import("../components/pages/Home.vue"),
    },
    children: [
      {
        path: "Message",
        name: "Message",
        components: () => import("../components/pages/Message.vue")
      },
      {
        path: "Calendar",
        name: "Calendar",
        components: {
          content: () => import("../components/pages/Calendar.vue"),
        },
      },
    ],
  },
  {
    path: "/signup",
    name: "Signup",
    components: {
      default: () => import("../components/pages/Signup.vue"),
    },
  },
  {
    path: "/login",
    name: "Login",
    components: {
      default: () => import("../components/pages/Login.vue"),
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
