<!--
 * @Author: your name
 * @Date: 2020-06-12 21:53:20
 * @LastEditTime: 2020-06-12 23:13:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /vue-test/src/components/custom-dialog.vue
-->
<template>
  <div class="info">
    <component :is="roleComponent" v-if="roleComponent" />
  </div>
</template>
<script>
import AdminInfo from './admin-info'
import BookkeeperInfo from './bookkeeper-info'
import HrInfo from './hr-info'
import UserInfo from './user-info'
export default {
  components: {
    AdminInfo,
    BookkeeperInfo,
    HrInfo,
    UserInfo
  },
  data() {
    return {
      roleComponents: {
        admin: AdminInfo,
        bookkeeper: BookkeeperInfo,
        hr: HrInfo,
        user: UserInfo
      },
      role: 'user',
      roleComponent: undefined
    }
  },
  created() {
    const { role, roleComponent } = this
    this.roleComponent = roleComponent[role]
  }
}
</script>
