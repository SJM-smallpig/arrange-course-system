<template>
  <div class="s-main">
    <div>
      <div class="s-head">
        <span class="s-word">班级：</span>
        <!--<span>第</span>-->
        <el-select v-model="value" placeholder="请选择" class="select-num">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <!--<span>周</span>-->

        <span class="s-word space-word">学期：</span>
        <el-select v-model="tvalue" placeholder="请选择" class="select-term">
          <el-option v-for="item in termoptions" :key="item.tvalue" :value="item.tvalue"></el-option>
        </el-select>

        <!--<select v-model="value" class="select-num">
        <template v-for="item in options">
          <option :key="item.value" :value="item.value">{{item.value}}</option>
        </template>
      </select>
      
      <select v-model="tvalue" class="select-term">
        <template v-for="data in termoptions">
          <option :key="data.tvalue"  :value="data.tvalue" >{{data.tvalue}}</option>
        </template>
        </select>-->

        <el-button type="primary" @click="getSearch()" class="h-search">搜索</el-button>
        <printButton :nameMsg="nameMsg"></printButton>
        <!--<el-button type="info" class="p-search" v-print="'#sTable'">打印</el-button>
        <el-button type="info" class="p-search" @click="timetablePrint()">导出（excel）</el-button>-->
        <exportExcel :value="value" :tvalue="tvalue" :tableName="sTable"></exportExcel>
      </div>
      <el-table
        :data="courseData"
        border
        class="st-table"
        :id="sTable"
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      >
        <el-table-column prop="time" label="时间" align="center" width="120px"></el-table-column>
        <el-table-column prop="monday" label="星期一" align="center" width="120px"></el-table-column>
        <el-table-column prop="tuesday" label="星期二" align="center" width="120px"></el-table-column>
        <el-table-column prop="wednesday" label="星期三" align="center" width="120px"></el-table-column>
        <el-table-column prop="thursday" label="星期四" align="center" width="120px"></el-table-column>
        <el-table-column prop="friday" label="星期五" align="center" width="120px"></el-table-column>
        <el-table-column prop="saturday" label="星期六" align="center" width="120px"></el-table-column>
        <el-table-column prop="sunday" label="星期日" align="center" width="120px"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import printButton from "@/components/PrintButton";
import exportExcel from "@/components/ExportExcel";
export default {
  components: {
    printButton,
    exportExcel
  },
  props: {},
  data() {
    return {
      sTable: "sTable",
      nameMsg: "sTable",
      courseData: [
        {
          time: "7:30~8:30",
          monday: "语文(102教室)",
          tuesday: "数学(102教室)",
          wednesday: "数学(102教室)",
          thursday: "数学(102教室)",
          friday: "数学(102教室)",
          saturday: "数学(102教室)",
          sunday: "数学(102教室)"
        },
        {
          time: "7:30~8:30",
          monday: "语文(102教室)",
          tuesday: "数学(102教室)",
          wednesday: "数学(102教室)",
          thursday: "数学(102教室)",
          friday: "数学(102教室)",
          saturday: "数学(102教室)",
          sunday: "数学(102教室)"
        },
        {
          time: "7:30~8:30",
          monday: "语文(102教室)",
          tuesday: "数学(102教室)",
          wednesday: "数学(102教室)",
          thursday: "数学(102教室)",
          friday: "数学(102教室)",
          saturday: "数学(102教室)",
          sunday: "数学(102教室)"
        },
        {
          time: "7:30~8:30",
          monday: "语文(102教室)",
          tuesday: "数学(102教室)",
          wednesday: "数学(102教室)",
          thursday: "数学(102教室)",
          friday: "数学(102教室)",
          saturday: "数学(102教室)",
          sunday: "数学(102教室)"
        },
        {
          time: "7:30~8:30",
          monday: "语文(102教室)",
          tuesday: "数学(102教室)",
          wednesday: "数学(102教室)",
          thursday: "数学(102教室)",
          friday: "数学(102教室)",
          saturday: "数学(102教室)",
          sunday: "数学(102教室)"
        },
        {
          time: "7:30~8:30",
          monday: "语文(102教室)",
          tuesday: "数学(102教室)",
          wednesday: "数学(102教室)",
          thursday: "数学(102教室)",
          friday: "数学(102教室)",
          saturday: "数学(102教室)",
          sunday: "数学(102教室)"
        },
        {
          time: "7:30~8:30",
          monday: "语文(102教室)",
          tuesday: "数学(102教室)",
          wednesday: "数学(102教室)",
          thursday: "数学(102教室)",
          friday: "数学(102教室)",
          saturday: "数学(102教室)",
          sunday: "数学(102教室)"
        },
        {
          time: "7:30~8:30",
          monday: "语文(102教室)",
          tuesday: "数学(102教室)",
          wednesday: "数学(102教室)",
          thursday: "数学(102教室)",
          friday: "数学(102教室)",
          saturday: "数学(102教室)",
          sunday: "数学(102教室)"
        },
        {
          time: "7:30~8:30",
          monday: "语文(102教室)",
          tuesday: "数学(102教室)",
          wednesday: "数学(102教室)",
          thursday: "数学(102教室)",
          friday: "数学(102教室)",
          saturday: "数学(102教室)",
          sunday: "数学(102教室)"
        }
      ],
      value: "全部",
      tvalue: "高一第一学期",
      options: [
        {
          value: "全部",
          label: "全部"
        },
        {
          value: "行政班1",
          label: "行政班11"
        },
        {
          value: "行政班12",
          label: "行政班12"
        },
        {
          value: "行政班13",
          label: "行政班13"
        },
        {
          value: "行政班14",
          label: "行政班14"
        },
        {
          value: "行政班15",
          label: "行政班15"
        },
        {
          value: "行政班16",
          label: "行政班16"
        },
        {
          value: "行政班17",
          label: "行政班17"
        },
        {
          value: "行政班18",
          label: "行政班18"
        },
        {
          value: "9",
          label: "9"
        },
        {
          value: "10",
          label: "10"
        },
        {
          value: "11",
          label: "11"
        },
        {
          value: "12",
          label: "12"
        },
        {
          value: "13",
          label: "13"
        },
        {
          value: "14",
          label: "14"
        },
        {
          value: "15",
          label: "15"
        },
        {
          value: "16",
          label: "16"
        },
        {
          value: "17",
          label: "17"
        },
        {
          value: "18",
          label: "18"
        },
        {
          value: "19",
          label: "19"
        },
        {
          value: "20",
          label: "20"
        }
      ],
      termoptions: [
        {
          tlabel: "0",
          tvalue: "高一第一学期"
        },
        {
          tlabel: "1",
          tvalue: "高一第二学期"
        },
        {
          tlabel: "2",
          tvalue: "高二第一学期"
        },
        {
          tlabel: "3",
          tvalue: "高二第二学期"
        },
        {
          tlabel: "4",
          tvalue: "高三第一学期"
        }
      ]
    };
  },
  watch: {
    label(newV, oldV) {
      // console.log(newV);
    },
    tvalue(newV, oldV) {
      // console.log(newV);
    }
  },
  computed: {},
  methods: {
    //搜索
    getSearch() {
      console.log(this.value);
      console.log(this.tvalue);
    },
    //获取数据
    getClassTableData() {
      that
        .$axios({
          url:
            that.$root.URL +
            "/result?taskId=" + //运行任务
            taskId +
            "&stage=5&distribution=0",
          method: "get",
          crossDomain: true
        })
        .then(function(res) {
          if (res.status === 200) {
            clearInterval(that.timer);
            let data = res.data;
            let objData = {};
            for (let i in data) {
              objData["class"] = i;
              objData["classNumber"] = data[i]["sum"];
              that.adminClassData.push(objData);
              objData = {};
            }
            if (that.adminClassData) {
              that.showLoading = false;
            }
          }
        })
        .catch(function(error) {
          clearInterval(that.timer);
          if (error.response) {
            if (error.response.status === 404) {
              that.$router.push({
                path: "@/views/loginFailed", //跳转路径
                name: "loginFailed", //跳转路径的name值，不写跳转后页面取不到参数
                // 参数
                query: {
                  error: "correct"
                }
              });
            }
          } else if (error.request) {
            that.$router.push({
              path: "@/views/loginFailed", //跳转路径
              name: "loginFailed", //跳转路径的name值，不写跳转后页面取不到参数
              // 参数
              query: {
                error: "error"
              }
            });
            console.log(error.request);
          } else {
            that.$router.push({
              path: "@/views/loginFailed", //跳转路径
              name: "loginFailed", //跳转路径的name值，不写跳转后页面取不到参数
              // 参数
              query: {
                error: "error"
              }
            });
            console.log("Error", error.message);
          }
          console.log(error.request);
        });
    }
  },
  created() {},
  mounted() {
    //获取数据
    //let that = this;
    //that.getClassTableData();
  }
};
</script>
<style scoped>
.s-main {
  position: relative;
  margin-top: 30px;
  margin-right: 0;
  margin-left: 0;
}
.s-head {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 1201px;
  margin: 0 auto;
}
.select-num {
  width: 150px;
}
.select-term {
  width: 160px;
}
.st-table {
  width: 962px;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 30px;
}
.h-search {
  margin-left: 50px;
}
.s-word {
  color: #66b1ff;
  font-size: 18px;
}
.space-word {
  margin-left: 50px;
}
</style>