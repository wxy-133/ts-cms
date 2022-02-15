'use strict'
exports.__esModule = true
require('element-plus/lib/theme-chalk/base.css')
var element_plus_1 = require('element-plus')
var components = [
  element_plus_1.ElButton,
  element_plus_1.ElForm,
  element_plus_1.ElFormItem,
  element_plus_1.ElInput,
  element_plus_1.ElRadio,
  element_plus_1.ElTabs,
  element_plus_1.ElTabPane,
  element_plus_1.ElCheckbox,
  element_plus_1.ElLink
]
function default_1(app) {
  for (var _i = 0, components_1 = components; _i < components_1.length; _i++) {
    var component = components_1[_i]
    app.component(component.name, component)
  }
}
exports['default'] = default_1
