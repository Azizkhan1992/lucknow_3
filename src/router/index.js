import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/pages/LucknowHome.vue')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('../views/pages/LucknowMenu.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
