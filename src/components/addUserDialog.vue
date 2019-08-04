<template>
  <div class="addUserDialog">
    <el-dialog :title="title" :visible.sync="dialogVisible" width="60%">
      <el-row>
        <el-col :span="12">
          <span>姓名</span>
          <el-input v-model="infos.name" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="12">
          <span>性别</span>
          <el-input v-model="infos.gender" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="12">
          <span>婚否</span>
          <el-input v-model="infos.isWed" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="12">
          <span>住址</span>
          <el-input v-model="infos.address" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col :span="12">
          <span>爱好</span>
          <el-input v-model="infos.hobby" placeholder="请输入内容"></el-input>
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
import { user } from "../api/user";
export default {
  props: {
    title: String,
    info: {
      name: "",
      gender: "",
      isWed: "",
      address: "",
      hobby: ""
    }
  },
  data() {
    return {
      dialogVisible: false
    };
  },
  computed: {
    infos() {
      return this.info;
    }
  },
  mounted() {},
  methods: {
    sure() {
      if (this.infos.id) {
        user.updataUserById(this.infos).then(res => {
          this.$emit("getUser");
          this.$message({
            message: "用户信息修改成功",
            type: "success"
          });
          this.dialogVisible = false;
        });
      } else if (this.infos.name && this.infos.gender &&this.infos.isWed &&this.infos.address &&this.infos.hobby) {
        user.create(this.infos).then(res => {
          this.$emit("getUser");
          this.dialogVisible = false;
        });
      } else {
        this.$message({
          message: "参数不全",
          type: "warning"
        });
      }
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
