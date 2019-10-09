<template>
  <el-button type="info" class="p-search" @click="timetableExcel()">导出（excel）</el-button>
</template>

<script>
import FileSaver from "file-saver";
import XLSX from "xlsx";
export default {
  components: {},
  props: {
    value: {
      type: String,
      require: true
    },
    tvalue: {
      type: String,
      require: true
    },
    tableName: {
      type: String,
      require: true
    }
  },
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {
    //打印课表
    timetableExcel() {
      if (this.value != null && this.tvalue != null) {
        if (!isNaN(this.value)) {
          var newValue = "第" + this.value + "周";
        } else {
          var newValue = this.value;
        }
      }
      this.$confirm(
        "是否打印" + this.tvalue + newValue + "的课程表",
        "导出（excel）",
        {
          confirmButtonText: "导出",
          cancelButtonText: "取消",
          type: "success"
        }
      )
        .then(() => {
          this.exportToExcel(this.tvalue, newValue); //调用导出功能函数
          this.$message({
            type: "success",
            message: "导出成功!"
          });
          this.value = "全部";
          this.tvalue = "高一第一学期";
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消操作"
          });
        });
    },
    // 导出excel
    // value：年级学期
    // newValue：第几周
    exportToExcel(value, newValue) {
      let et = XLSX.utils.table_to_book(
        document.getElementById(this.tableName)
      ); //此处传入table的DOM节点
      let etout = XLSX.write(et, {
        bookType: "xlsx",
        bookSST: true,
        type: "array"
      });
      try {
        FileSaver.saveAs(
          new Blob([etout], {
            type: "application/octet-stream"
          }),
          value + newValue + ".xlsx"
        ); //trade-publish.xlsx 为导出的文件名
      } catch (e) {
        console.log(e, etout);
      }
      return etout;
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.p-search {
  float: right;
}
</style>