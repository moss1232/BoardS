import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Chatboard from '../views/Chatboard.vue'
import Todo from '../views/Todo.vue'
import useValidate from '../auth/validate'

const { error, validate } = useValidate()

// eslint-disable-next-line no-unused-vars
const requireAuth = async (to, from, next) => {
  const uid = window.localStorage.getItem('uid')
  const client = window.localStorage.getItem('client')
  const accessToken = window.localStorage.getItem('access-token')

  if (!uid || !client || !accessToken) {
    console.log('ログインしていません')
    next({ name: 'Login' })
    return
  }

  await validate()
  
  if (error.value) {
    console.log('認証に失敗しました')
    next({ name: 'Welcome' })
  } else {
    next()
  }

  next()
}

// const noRequireAuth = async (to, from, next) => {
//   const uid = window.localStorage.getItem('uid')
//   const client = window.localStorage.getItem('client')
//   const accessToken = window.localStorage.getItem('access-token')

//   if (!uid && !client && !accessToken) {
//     next()
//     return
//   }

//   await validate()

//   if (!error.value) {
//     next({ name: 'Chatroom' })
//   } else {
//     next()
//   }
// }

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },

  {
    path: '/chatboard',
    name: 'Chatboard',
    component: Chatboard,
  },

  {
    path: '/todo',
    name: 'Todo',
    component: Todo,
  },

  {
    path: '/login',
    name: 'Login',
    component: Login,
  },

  {
    path: '/signup',
    name: 'Signup',
    component: Signup,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router