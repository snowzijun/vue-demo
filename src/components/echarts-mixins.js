/*
 * @Author: your name
 * @Date: 2020-06-14 22:14:41
 * @LastEditTime: 2020-06-14 22:24:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-test/src/components/echarts-mixins.js
 */

import { debounce } from 'lodash'
const resizeChartMethod = Symbol('resizeChart')

export default {
  data() {
    // 在组件内部将图表init的引用映射到chart属性上
    return {
      chart: null
    }
  },
  created() {
    window.addEventListener('resize', this[resizeChartMethod])
  },
  beforeDestroy() {
    window.removeEventListener('reisze', this[resizeChartMethod])
  },
  methods: {
    // 通过lodash的防抖函数来控制resize的频率
    [resizeChartMethod]: debounce(function() {
      if (this.chart) {
        this.chart.resize()
      }
    }, 100)
  }
}
