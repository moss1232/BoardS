import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Message',
    components: {
    default: () => import('../views/Message.vue'),
    sidebar: () => import('../components/Sidebar.vue'),
    footer: () => import('../components/Footer.vue'),

  }
  },
  {
    path: '/schedule',
    name: 'Schedule',
    components: {
    default: () => import('../views/Schedule.vue'),
    sidebar: () => import('../components/Sidebar.vue'),

  }
  },
  {
    path: '/login',
    name: 'Login',
    components: {
    default: () => import('../views/Login.vue'),
    // sidebar: () => import('../views/sidebar.vue'),
  }
  },
  {
    path: '/signup',
    name: 'Signup',
    components: {
    default: () => import('../views/Signup.vue'),
    // sidebar: () => import('../views/sidebar.vue'),
  }
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
