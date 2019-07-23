<template>
  <div id="tableDemo_container">
    <el-table :data="tableData" border stripe style="width: 100%" height="100%">
      <el-table-column fixed prop="date" label="日期"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120"></el-table-column>
      <el-table-column prop="province" label="省份"></el-table-column>
      <el-table-column prop="city" label="市区"></el-table-column>
      <el-table-column prop="address" label="地址"></el-table-column>
      <el-table-column prop="zip" label="邮编"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button @click="handleClick(scope.row)" type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
      <el-table :data="gridData">
        <el-table-column property="date" label="日期" width="150"></el-table-column>
        <el-table-column property="name" label="姓名" width="200"></el-table-column>
        <el-table-column property="address" label="地址"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  mounted() {
    for (let i = 0; i < 20; i++) {
      let obj = {
        date: "2016-05-02",
        name: "王小虎",
        province: "上海",
        city: "普陀区",
        address: "上海市普陀区金沙江路 1518 弄",
        zip: 200333
      };
      this.tableData.push(obj);

    //   this.openFullScreen();
    }
  },
  data() {
    return {
      dialogTableVisible: false,
      tableData: [],
      gridData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ]
    };
  },
  methods: {
    handleClick() {
      this.dialogTableVisible = true;
    },
    openFullScreen() {
      const loading = this.$loading({
        lock: true,
        text: "加载中，请稍等",
        spinner: "el-icon-loading",
        background: "rgba(0, 0, 0, 0.6)"
      });
      setTimeout(() => {
        loading.close();
      }, 2000);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#tableDemo_container {
  width: 100%;
  height: 100%;
  overflow: auto;
  background: #fff;
  padding: 0px;
}
</style>
