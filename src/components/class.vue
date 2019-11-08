<template>
  <div class="divide">
    <el-page-header @back="goBack" :content="className" class="back-head"></el-page-header>

    <div class="t-table">
      <!--加载动画-->
      <div v-show="showLoading">
        <div class="spinner">
          <div class="bounce1"></div>
          <div class="bounce2"></div>
          <div class="bounce3"></div>
        </div>
      </div>
      <el-table
        v-show="!showLoading"
        :data="classData"
        border
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        stripe
      >
        <el-table-column
          v-for="(item,index) in tableDataHeader"
          :key="index"
          :prop="item.prop"
          :label="item.col"
          width
          align="center"
        ></el-table-column>

        <!--<el-table-column fixed prop="id" label="学号" width="150" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120" align="center"></el-table-column>
      <el-table-column prop="sex" label="性别" width="120" align="center"></el-table-column>
      <el-table-column prop="subject" label="选科数据" width="120" align="center"></el-table-column>
      <el-table-column prop="score" label="成绩" width="120" align="center"></el-table-column>
        <el-table-column prop="adminClass" label="行政班" width="120" align="center"></el-table-column>-->
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      classData: [],
      showLoading: true,
      adminClassData: [
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   subject: "物化政",
        //   score: "30",
        //   adminClass: "高一1班"
        // }
      ],
      teachClassData: [
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   adminClass: "13班",
        //   subject: "30",
        //   score: "392",
        //   teachClass: "物理1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   adminClass: "13班",
        //   subject: "30",
        //   score: "392",
        //   teachClass: "物理1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   adminClass: "13班",
        //   subject: "30",
        //   score: "392",
        //   teachClass: "物理1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   adminClass: "13班",
        //   subject: "30",
        //   score: "392",
        //   teachClass: "物理1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   adminClass: "13班",
        //   subject: "30",
        //   score: "392",
        //   teachClass: "物理1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   adminClass: "13班",
        //   subject: "30",
        //   score: "392",
        //   teachClass: "物理1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   adminClass: "13班",
        //   subject: "30",
        //   score: "392",
        //   teachClass: "物理1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   adminClass: "13班",
        //   subject: "30",
        //   score: "392",
        //   teachClass: "物理1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   adminClass: "13班",
        //   subject: "30",
        //   score: "392",
        //   teachClass: "物理1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   adminClass: "13班",
        //   subject: "30",
        //   score: "392",
        //   teachClass: "物理1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   adminClass: "13班",
        //   subject: "30",
        //   score: "392",
        //   teachClass: "物理1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   adminClass: "13班",
        //   subject: "30",
        //   score: "392",
        //   teachClass: "物理1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   adminClass: "13班",
        //   subject: "30",
        //   score: "392",
        //   teachClass: "物理1班"
        // },
        // {
        //   id: 20160310218,
        //   name: "马小明",
        //   sex: "男",
        //   adminClass: "13班",
        //   subject: "30",
        //   score: "392",
        //   teachClass: "物理1班"
        // }
      ],
      tableDataHeader: [],
      adminHeaderData: [
        { col: "学号", prop: "id" },
        { col: "姓名", prop: "name" },
        // { col: "性别", prop: "sex" },
        { col: "选科数据", prop: "subject" },
        // { col: "成绩", prop: "score" },
        { col: "行政班", prop: "adminClass" }
      ],
      teachHeaderData: [
        { col: "学号", prop: "id" },
        { col: "姓名", prop: "name" }
        // { col: "性别", prop: "sex" },
        // { col: "行政班", prop: "adminClass" },
        // { col: "选科数据", prop: "subject" },
        // { col: "成绩", prop: "score" },
        // { col: "教学班", prop: "teachClass" }
      ],
      // activeName: [
      //   {
      //     tabActiveName: "second"
      //   },
      //   {
      //     collapseActiveName: ""
      //   }
      // ],
      className: "",
      activeName: ""
    };
  },
  watch: {},
  computed: {},
  methods: {
    goBack() {
      this.$router.go(-1);
      // router.go({name: 'user', params: {userId: 1}});
    },
    //根据参数向表格填不同内容
    getParams(params) {
      let that = this;
 
      if(params.class == 'adminClass'){
        that.classData = that.adminClassData;
        that.tableDataHeader = that.adminHeaderData;
      }else if(params.class == 'teachClass'){
        that.classData = that.teachClassData;
        that.tableDataHeader = that.teachHeaderData;
      }else{

      }
      // that.activeName = params.tagActiveName;
      // that.className = params.row.class;
      // if (params.tagActiveName == "first") {
      //   that.classData = that.adminClassData;
      //   that.tableDataHeader = that.adminHeaderData;
      // } else if (params.tagActiveName == "second") {
      //   that.classData = that.teachClassData;
      //   that.tableDataHeader = that.teachHeaderData;
      // } else if (params.tagActiveName == "third") {
      //   that.classData = that.teachClassData;
      //   that.tableDataHeader = that.teachHeaderData;
      // } else {
      //   that.classData = [];
      // }
    },
    //获取当前任务数据
    getAdminClassData(taskId, className) {
    
      let that = this;
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
            let data = res.data;
            let curData = {};
            for (let j in data) {
              if (j == className) {
                curData = data[j];
              }
            }
            if (curData) {
              let tempData = {};
              for (let i in curData) {
                for (let k in curData[i]) {
                  tempData["subject"] = i;
                  tempData["id"] = curData[i][k]["student_id"];
                  tempData["name"] = curData[i][k]["student_name"];
                  tempData["adminClass"] = className;
                  that.adminClassData.push(tempData);
                  tempData = {};
                }
              }
              if (that.adminClassData) {
                that.showLoading = false;
              }
            }
          }
        })
        .catch(function(error) {
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
    },
    //获取教学班数据
    getTeachClassData(taskId, className) {
      let that = this;
      that
        .$axios({
          url:
            that.$root.URL +
            "/result?taskId=" + //运行任务
            taskId +
            "&stage=5&distribution=1",
          method: "get",
          crossDomain: true
        })
        .then(function(res) {
          if (res.status === 200) {
            that.showLoading = false;
            
            let data = res.data;
            let objData = {};
            for (let i in data) {
              if (i == className) {
                for (let j in data[i]["studentInfo"]) {
                  objData["name"] = data[i]["studentInfo"][j]["student_name"];
                  objData["id"] = data[i]["studentInfo"][j]["student_id"];
                  that.teachClassData.push(objData);
                  objData = {};
                }
              }
            }
          }
        })
        .catch(function(error) {
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
    //接受跳转页面的参数
    let that = this;
    let params = that.$route.query;
    if (params.class == "adminClass") {
      that.taskId = params.taskId;
      that.className = params.row.class;
      that.activeName = params.activeName;
      that.getParams(params);
      //获取当前任务行政班数据
      that.getAdminClassData(that.taskId, that.className);
    } else if (params.class == "teachClass") {
      that.taskId = params.taskId;
      that.className = params.row.class;
      that.activeName = params.activeName;
      that.getParams(params);
      //获取当前任务行政班数据
      that.getTeachClassData(that.taskId, that.className);
    } else {
    }
  },
  beforeRouteLeave(to, from, next) {
    //路由离开前返回上一页状态
    let that = this;
    if (to.name == "adminClass" || to.name == "teachClass") {
      to.params.active = that.activeName;
      to.params.taskId = that.taskId;
    }
    next();
  }
};
</script>
<style scoped>
.divide {
  position: relative;

  margin-right: 0;
}
.el-page-header__content {
  font-size: 25px !important;
}
.back-head {
  margin-bottom: 10px;
  color: #a8a6a6;
  margin-top: 30px;
  margin-left: 30px;
}
.t-table {
  width: 70%;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
/**加载动画**/
.spinner {
  margin: 100px auto 0;
  margin-top: 200px;
  width: 500px;
  text-align: center;
  margin-bottom: 200px;
}
.spinner > div {
  width: 30px;
  height: 30px;
  background-color: #409eff;
  border-radius: 100%;
  display: inline-block;
  -webkit-animation: bouncedelay 1.4s infinite ease-in-out;
  animation: bouncedelay 1.4s infinite ease-in-out;
  /* Prevent first frame from flickering when animation starts */

  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
.spinner .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
  margin-right: 80px;
}
.spinner .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
  margin-right: 80px;
}
@-webkit-keyframes bouncedelay {
  0%,
  80%,
  100% {
    -webkit-transform: scale(0);
  }
  40% {
    -webkit-transform: scale(1);
  }
}
@keyframes bouncedelay {
  0%,
  80%,
  100% {
    transform: scale(0);
    -webkit-transform: scale(0);
  }
  40% {
    transform: scale(1);
    -webkit-transform: scale(1);
  }
}
</style>