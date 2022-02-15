import { App } from 'vue'
// import 'element-plus/dist/index.css'
// import { ElCalendar } from 'element-plus'
import { Edit, Cellphone, Avatar } from '@element-plus/icons'
const components = [Edit, Cellphone, Avatar]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
