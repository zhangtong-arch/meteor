<template>
  <div :style="{height:getScreen()}">
    <el-header height="100px">
      <headers></headers>
    </el-header>
    <div class="main_page">
      <el-aside width="200px">
        <asides></asides>
      </el-aside>
      <el-main>
         <router-view></router-view>
      </el-main>
    </div>
    <el-footer height="50px">
      <footers></footers>
    </el-footer>
  </div>
</template>

<script>
import headers from "./header"
import asides from "./aside"
import footers from "./footer"
export default {
  components: {
    asides,
    headers,
    footers
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    getScreen() {
      return `${document.documentElement.clientHeight}px`;
    }
  }
};
</script>

<style scoped lang="scss">
.el-header {
  padding: 0;
}
.el-footer {
  padding: 0;
}
.main_page {
  display: flex;
  flex-direction: row;
  height: calc(100% - 150px);
  .el-aside {
    background: rgba(0, 0, 0, 0.3);
    overflow: overlay;
    height: 100%;
  }
  /*定义滚动条宽高及背景，宽高分别对应横竖滚动条的尺寸*/
  .el-aside::-webkit-scrollbar {
    width: 5px; /*对垂直流动条有效*/
    height: 5px; /*对水平流动条有效*/
  }
  /*定义滚动条的轨道颜色、内阴影及圆角*/
  .el-aside::-webkit-scrollbar-track {
    // -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: rgba(255,255,255,0.5);
    border-radius: 25px;
  }
  /*定义滑块颜色、内阴影及圆角*/
  .el-aside::-webkit-scrollbar-thumb {
    border-radius: 25px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #e8e8e8;
  }
  /*定义两端按钮的样式*/
  .el-aside::-webkit-scrollbar-button {
    // background-color: cyan;
  }
  /*定义右下角汇合处的样式*/
  .el-aside::-webkit-scrollbar-corner {
    background: khaki;
  }
}
</style>
