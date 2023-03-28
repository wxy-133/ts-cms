// const path = require('path')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin
module.exports = {
  // 1.配置方式一: CLI提供的属性
  outputDir: './build',
  // publicPath: './',
  devServer: {
    hot: true,
    compress: true,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://codercba.com:5000', //你的接口地址 或者codercba.com:5000
        changeOrigin: true, //是否跨域
        pathRewrite: {
          '^/api': '' //接口重写，表示/api开头的就是代理到target,即是http://xxxx:8002/Home
        }
      }
    },
    historyApiFallback:true
  },
  configureWebpack: {
    resolve: {
      alias: {
        src: '@',
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
