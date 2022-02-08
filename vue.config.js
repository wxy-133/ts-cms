const path = require('path')

module.exports = {
  // outputDir:"./build" //打包文件夹
  configureWebpack:{
    resolve:{
      alias:{
        components:"@/components"
      }
    }
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
