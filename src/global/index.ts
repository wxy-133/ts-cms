import { App } from 'vue'
import registerElement from './register-element'
import registerProperties from './register-properties'
export function globalRegister(app: App): void {
  app.use(registerElement)
  app.use(registerProperties)
}

// import * as Icons from '@element-plus/icons'

// const newColor = (['red', 'green', 'blue'] as const).filter(e => color[e]); // okay
// 注册Icons 全局组件
