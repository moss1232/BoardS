import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'DashBoard',
    components: {
    default: () => import('../views/DashBoard.vue'),
    header: () => import('../views/Header.vue'),
  }
  },
  {
    path: '/schedule',
    name: 'Schedule',
    components: {
    default: () => import('../views/Schedule.vue'),
    header: () => import('../views/Header.vue'),
  }
  },
  {
    path: '/login',
    name: 'Login',
    components: {
    default: () => import('../views/Login.vue'),
    // header: () => import('../views/Header.vue'),
  }
  },
  {
    path: '/signup',
    name: 'Signup',
    components: {
    default: () => import('../views/Signup.vue'),
    // header: () => import('../views/Header.vue'),
  }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
