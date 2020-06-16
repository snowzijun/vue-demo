/*
 * @Author: your name
 * @Date: 2020-06-12 21:54:04
 * @LastEditTime: 2020-06-12 22:53:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-test/src/components/index.js
 */

import CustomDialog from './custom-dialog.vue'
import CustomGrid from './custom-grid.vue'
import CustomInput from './custom-input.vue'
import CustomLoading from './custom-loading.vue'
import CustomSelect from './custom-select.vue'

const components = [
  CustomDialog,
  CustomGrid,
  CustomInput,
  CustomLoading,
  CustomSelect
]

components.forEach(component => {
  Vue.component(component.name, component)
})

/**
 * directory=./ 扫描 当前目录下面的所有文件
 * useSubdirectories=false, 表示不需要地柜扫描所有的子文件夹
 * regExp=/\.vue$/所有以.vue结束的文件
 */
const context = require.context('./', false, /\.vue$/)

context.keys().forEach(key => {
  component = context(key).default
  Vue.component(component.name, component)
})
