import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '../views/Welcome.vue'
import AppMain from '../components/AppMain.vue'

const routes = [
  {
    path: '/',
    name: 'Welcome',
    component: Welcome
  },

  {
    path: '/appmain',
    name: 'AppMain',
    component: AppMain  
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router