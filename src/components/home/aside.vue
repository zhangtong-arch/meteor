<template>
  <div class="aside">
    <el-row>
      <el-col :span="24">
        <!-- default-active  当前路由  -->
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router
        >
          <!-- 必须配置router menu-item  index 才能做路由跳转 -->
          <!-- 运用router配置导航 -->
          <el-menu-item v-for="item in route" :key="item.path" :index="item.path">
            <i :class="item.ico"></i>
            <span slot="title">{{item.name}}</span>
          </el-menu-item>
          <!-- <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-service"></i>
              <span>导航一</span>
            </template>

            <el-menu-item-group>
              <template slot="title">用户信息管理</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>

            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项1</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>-->
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    route() {
      return this.$router.options.routes[1].children;
    }
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.aside {
  height: 100%;
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
      ul {
        height: 100%;
      }
    }
  }
}
</style>
