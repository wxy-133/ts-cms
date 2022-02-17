// 01
// const BASE_URL = "http://coderwhy.org/production"
// const BASE_NAME = "wxy"

// const BASE_URL = "http://coderwhy.org/dev"
// const BASE_NAME = "\wjh"

// 02 根据process.env.NODE_ENV
// 开发环境 development
// 生产环境 production

// 测试环境 test
let BASE_URL = ''
const TIME_OUT = 10000

if (process.env.NODE_ENV === 'development') {
  BASE_URL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  BASE_URL = 'http://coderwhy.org/prod'
} else {
  BASE_URL = 'http://coderwhy.org/test'
}

export { BASE_URL, TIME_OUT }
