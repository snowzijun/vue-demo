<!--
 * @Author: your name
 * @Date: 2020-06-14 22:29:08
 * @LastEditTime: 2020-06-14 22:30:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-test/src/components/echart.vue
-->
<template>
  <div class="chart"></div>
</template>
<script>
import echartMixins from './echarts-mixins'
export default {
  mixins: [echartMixins],
  data() {
    return {
      chart: null
    }
  },
  created() {
    this.chart = echarts.init(this.$el)
  }
}
</script>
