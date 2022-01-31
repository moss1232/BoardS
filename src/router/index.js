import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'

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
    component: Login
  },
  {
    path: '/signup',
    name: 'Signup',
    component: Signup
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
