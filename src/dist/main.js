'use strict'
exports.__esModule = true
var vue_1 = require('vue')
var App_vue_1 = require('./App.vue')
var router_1 = require('./router')
var store_1 = require('./store')
var global_1 = require('./global')
var app = vue_1.createApp(App_vue_1['default'])
app.use(store_1['default'])
app.use(router_1['default'])
app.use(global_1.globalRegister).mount('#app')
// import './services/axios_demo.ts'
// console.log(VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_URL)
console.log(process.env.VUE_APP_BASE_NAME)
// import './service/axios_demo'
var services_1 = require('./services')
services_1['default'].request({
  url: '/home/multidata',
  method: 'GET',
  headers: {},
  interceptors: {
    requestInterceptor: function (config) {
      console.log('单独请求的config')
      config.headers['token'] = '123'
      return config
    },
    responseInterceptor: function (res) {
      console.log('单独响应的response')
      return res
    }
  },
  showLoading: false
})
// xyRequest.request({
//   url: '/home/multidata',
//   method: 'GET'
// })
