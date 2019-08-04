<template>
  <div class="userManage">
    <el-row>
      <el-col :span="12">
        <el-button @click="add">增加</el-button>
      </el-col>
      <el-col :span="12">
        <el-input
          placeholder="请输入内容"
          prefix-icon="el-icon-search"
          @change="handlerSearch"
          v-model="searchInfo"
        ></el-input>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-table :data="tableData" :max-height="clientHeight" border style="width: 100%">
          <el-table-column prop="date" label="日期" width="180"></el-table-column>
          <el-table-column prop="name" label="姓名" width="180"></el-table-column>
          <el-table-column prop="address" label="地址"></el-table-column>
          <el-table-column label="其他" width="150">
            <template slot-scope="scope">
              <el-button @click="handleUpadata(scope.row)" size="mini">修改</el-button>
              <el-button @click="handleDelete(scope.row)" size="mini" type="danger">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col :span="24">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, ->, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </el-col>
    </el-row>
    <addUserDialog ref="diaLog" title="新增用户"></addUserDialog>
  </div>
</template>

<script>
import addUserDialog from "../../components/addUserDialog";
export default {
  components: {
    addUserDialog
  },
  data() {
    return {
      searchInfo: "",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      currentPage4: 1
    };
  },
  computed: {
    clientHeight() {
      return `${document.documentElement.clientHeight - 290}px`;
    }
  },
  mounted() {},
  methods: {
    add() {
      this.$refs["diaLog"].dialogVisible = true;
    },
    handlerSearch(val) {
      debugger;
    },
    handleSizeChange() {},
    handleCurrentChange() {}
  }
};
</script>

<style scoped lang="scss">
.userManage {
  height: 100%;
  .el-row:first-child {
    margin-bottom: 10px;
    .el-col:nth-child(2) {
      display: flex;
      justify-content: flex-end;
      .el-input {
        width: 30%;
      }
    }
  }
  .el-row:last-child {
    position: relative;
    height: calc(100% - 40px);
    .el-col:last-child {
      position: absolute;
      bottom: 0;
    }
  }
}
</style>
