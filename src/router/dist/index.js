'use strict'
exports.__esModule = true
var vue_router_1 = require('vue-router')
var Home_vue_1 = require('../views/Home.vue')
var routes = [
  {
    path: '/',
    name: 'Home',
    component: Home_vue_1['default']
  },
  {
    path: '/home',
    name: 'home',
    component: function () {
      return Promise.resolve().then(function () {
        return require('../views/Home.vue')
      })
    }
  },
  {
    path: '/about',
    name: 'About',
    component: function () {
      return Promise.resolve().then(function () {
        return require(/* webpackChunkName: "about" */ '../views/About.vue')
      })
    }
  }
]
var router = vue_router_1.createRouter({
  history: vue_router_1.createWebHashHistory(),
  routes: routes
})
exports['default'] = router
