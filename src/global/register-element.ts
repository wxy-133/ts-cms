import { App } from 'vue'
import 'element-plus/dist/index.css'
// import { ElCalendar } from 'element-plus'
import {
  Edit,
  Cellphone,
  Avatar,
  Menu,
  List,
  Fold,
  Expand,
  Setting,
  Location,
  Document,
  ArrowRight,
  Delete
} from '@element-plus/icons'
const components = [
  Edit,
  Cellphone,
  Avatar,
  Menu,
  Expand,
  Fold,
  List,
  Setting,
  Location,
  Document,
  ArrowRight,
  Delete
]

export default function (app: App): void {
  for (const component of components) {
    app.component(component.name, component)
  }
}
