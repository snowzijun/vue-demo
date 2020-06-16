/*
 * @Author: your name
 * @Date: 2020-06-07 21:39:08
 * @LastEditTime: 2020-06-16 22:07:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edi
 * @FilePath: /vue-test/src/main.js
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI, {
  size: 'small'
})
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
