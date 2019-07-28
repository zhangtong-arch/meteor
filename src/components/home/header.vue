<template>
  <div class="header">
    <el-carousel height="100px" indicator-position="none">
      <el-carousel-item v-for="(item,index) in img" :key="index">
        <div class="describe">
            <span>{{`${item.describe}${index+1}`}}</span>
        </div>
        <img :src="item.url"/>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      img: [
        { url: "/static/img/1.jpg", describe: "图片" },
        { url: "/static/img/2.jpg", describe: "图片" },
        { url: "/static/img/3.jpg", describe: "图片" },
        { url: "/static/img/4.jpg", describe: "图片" }
      ]
    };
  },
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="scss">
.header {
  height: 100%;
  img {
    height: 100%;
    width: 100%;
  }
  .describe {
    position: absolute;
    color: rgba(255,255,255,1);
    text-align: center;
    height: 100%;
    width: 100%;
    line-height: 100px;
  }
}
</style>
