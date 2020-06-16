<!--
 * @Author: your name
 * @Date: 2020-06-12 21:53:38
 * @LastEditTime: 2020-06-16 22:28:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-test/src/components/custom-loading.vue
-->
<template>
  <transition name="custom-loading-fade">
    <!--loading蒙版-->
    <div v-show="visible" class="custom-loading-mask">
      <!--loading中间的图标-->
      <div class="custom-loading-spinner">
        <i class="custom-spinner-icon"></i>
        <p class="custom-loading-text">{{ text }}</p>
      </div>
    </div>
  </transition>
</template>
<script>
export default {
  props: {
    visible: {
      type: Boolean,
      default: false
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>
<style lang="scss" scoped>
.custom-loading-mask {
  position: fixed;
  left: 0;
  top: 0;
  width: 100;
  height: 100%;
  background-color: blue;
}
</style>
