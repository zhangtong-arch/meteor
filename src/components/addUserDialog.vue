<template>
  <div class="addUserDialog">
    <el-dialog :title="title" :visible.sync="dialogVisible" width="60%">
      <el-row>
        <el-col :span="12">
          <span>姓名</span>
          <el-input v-model="obj.name" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="12">
          <span>性别</span>
          <el-input v-model="obj.gender" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="12">
          <span>婚否</span>
          <el-input v-model="obj.isWed" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="12">
          <span>住址</span>
          <el-input v-model="obj.address" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="12">
          <span>爱好</span>
          <el-input v-model="obj.hobby" placeholder="请输入内容"></el-input>
        </el-col>
      </el-row>
      <span slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="sure">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    info: Object
  },
  data() {
    return {
      dialogVisible: false,
      obj: {
        name: "",
        gender: "",
        isWed: "",
        address: "",
        hobby: ""
      }
    };
  },
  computed: {
    infos() {
      return this.info
    }
  },
  watch: {
    infos(val) {
      this.obj = val
    }
  },
  mounted() {},
  methods: {
    sure () {
      console.log(this.obj)
      this.dialogVisible = false
    }
  }
};
</script>

<style lang="scss">
.addUserDialog {
  .el-dialog__wrapper {
    .el-dialog {
      .el-dialog__body {
        height: 200px;
        .el-row {
          .el-col {
            display: flex;
            height: 40px;
            margin-bottom: 20px;
            justify-content: center;
            span {
              display: block;
              width: 50px;
              line-height: 40px;
            }
            .el-input {
              width: 50% !important;
            }
          }
        }
      }
    }
  }
}
</style>
