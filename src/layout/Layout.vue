<template>
<el-row class="tac">
  <LeftMenu/>
  <el-col :span="20">
  <router-view></router-view>
  </el-col>
</el-row>
</template>

<script>
import LeftMenu from './leftMenu.vue'
export default {
  name: 'Layout',
  components: {
    LeftMenu
  }
}
</script>
