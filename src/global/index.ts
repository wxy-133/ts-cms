import { App } from 'vue'
import registerElement from './register-element'

export function globalRegister(app: App): void {
  app.use(registerElement)
}

// import * as Icons from '@element-plus/icons'

// const newColor = (['red', 'green', 'blue'] as const).filter(e => color[e]); // okay
// 注册Icons 全局组件
