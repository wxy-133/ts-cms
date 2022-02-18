import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import localCache from '@/utils/cache'

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
router.beforeEach((to) => {
  if (to.path !== '/login') {
    const token = localCache.getCache('token')
    if (!token) {
      return '/'
    }
  }
})
export default router
