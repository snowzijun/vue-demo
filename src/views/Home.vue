<!--
 * @Author: your name
 * @Date: 2020-06-07 21:39:08
 * @LastEditTime: 2020-06-16 22:27:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-test/src/views/Home.vue
-->
<template>
  <div class="component-code">
    <!--其他一堆代码-->
    <!-- <custom-loading :visible="visible" text="加载中" /> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  created() {
    this.$loading({
      text: 'aaa'
    })
    this.$loading({
      text: 'bbb'
    })
  }
}
</script>
