import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { globalRegister } from './global'
import './assets/css/index.css'
import 'element-plus/dist/index.css'
import { setupStore } from './store'
const app = createApp(App)

app.use(store)
app.use(router)
app.use(globalRegister).mount('#app')
setupStore()

// import './services/axios_demo.ts'

// console.log(VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_URL)
// console.log(process.env.VUE_APP_BASE_NAME)

// import './service/axios_demo'
// import xyRequest from './services'
// xyRequest
//   .request({
//     url: '/home/multidata',
//     method: 'GET',
//     headers: {},
//     interceptors: {
//       requestInterceptor: (config) => {
//         console.log('单独请求的config')
//         config.headers['token'] = '123'
//         return config
//       },
//       responseInterceptor: (res) => {
//         console.log('单独响应的response')
//         return res
//       }
//     },
//     showLoading: true
//   })
//   .then((res) => {
//     console.log(res)
//   })

// xyRequest.request({
//   url: '/home/multidata',
//   method: 'GET'
// })
