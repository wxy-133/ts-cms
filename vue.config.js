// const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin

// let proxyObj = {}

// proxyObj['/'] = {
//   //目标地址
//   target: 'http://152.136.185.210:5000',
//   //发送请求头中host会设置成target
//   changeOrigin: true,
//   //不重写请求地址
//   pathRewrite: {
//     '^/': '/'
//   }
// }
module.exports = {
  // 1.配置方式一: CLI提供的属性
  outputDir: './build',
  // publicPath: './',
  devServer: {
    port: 8080,
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        components: '@/components'
      }
    },
    plugins: [
      new BundleAnalyzerPlugin(),
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
  // configureWebpack:(config) =>{
  //   config.resolve.alias = {
  //     "@":path.resolve(__dirname,'src'),
  //     comments:"@/components"
  //   }
  // }
  // 配置方式三：
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set('@', path.resolve(__dirname, "src"))
  //     .set('components', '@/components')
  // }
}
