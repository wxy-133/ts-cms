import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login/login.vue')
  },
  {
    path: '/main',
    name: 'Main',
    component: () => import('../views/Main/main.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
