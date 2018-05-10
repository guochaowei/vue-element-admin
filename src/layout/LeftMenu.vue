<template>
    <el-col :span="4">
      <h5>默认颜色</h5>
      <el-menu
        default-active="71"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <template v-for="item in routes">
          <el-submenu :index="item.id" :key="item.id">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>{{item.name}}</span>
            </template>
            <template v-for="child in item.subMenu">
              <router-link :to="'/'+child.url"  :key="child.id">
                <el-menu-item :index="child.id">{{child.name}}</el-menu-item>
              </router-link>
            </template>
          </el-submenu>
        </template>
      </el-menu>
    </el-col>
</template>

<script>
export default {
  name: 'LeftMenu',
  data () {
    return {
      // 模拟后台返回的数据
      routes: [
        {id: '7', name: '第一个', subMenu: [{id: 71, name: 'helloWorld', url: 'HelloWorldOne'}, {id: 72, name: 'helloVue', url: 'HelloVue'}]}, {id: 8, name: '第二个', subMenu: [{id: 81, name: 'helloWorld', url: 'HelloWorldOne'}, {id: 82, name: 'helloVue', url: 'HelloVue'}]}]
    }
  }
}
</script>
<style scoped>
  a{
    text-decoration:none;
  }
  .router-link-active {
    text-decoration: none;
  }
</style>
