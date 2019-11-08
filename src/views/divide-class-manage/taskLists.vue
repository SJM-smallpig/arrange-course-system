<template>
  <div class="a-main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>任务列表</span>
      </div>
      <div v-show="isShowWord" class="word">暂无完成任务，请先创建任务或者继续运行任务</div>
      <div v-for="item in taskNameArray" :key="item.index" class="card-content">
        {{item.taskName}}
        <el-button
          type="primary"
          size="mini"
          round
          class="set-bt"
          @click="toCreateTeachSchedule(item.taskName)"
        >开始排课</el-button>
        <el-button
          type="primary"
          size="mini"
          round
          class="set-bt first-bt"
          @click="toTeachClass(item.taskName)"
        >查看教学班分班</el-button>
        <el-button
          type="primary"
          size="mini"
          round
          class="set-bt first-bt"
          @click="toAdminClass(item.taskName)"
        >查看行政班分班</el-button>
        
      </div>
    </el-card>
  </div>
</template>

<script>
export default {
  components: {},

  props: {},
  data() {
    return {
      taskNameArray: [],
      isShowWord: false
    };
  },
  watch: {},
  computed: {
    taskLists() {
      return this.$store.state.taskListName;
    }
  },
  methods: {
    //跳转到行政班具体信息
    toAdminClass(taskName) {
      let that = this;
      that.$router.push({
        path: "/adminClass", //跳转路径
        name: "adminClass", //跳转路径的name值，不写跳转后页面取不到参数
        // 参数
        query: {
          taskId: taskName
        }
      });
    },
    //跳转到教学班具体信息
    toTeachClass(taskName) {
      let that = this;
      that.$router.push({
        path: "/teachClass", //跳转路径
        name: "teachClass", //跳转路径的name值，不写跳转后页面取不到参数
        // 参数
        query: {
          taskId: taskName
        }
      });
    },
    //开始排课
    toCreateTeachSchedule(taskName){
      let that = this;
      that.$router.push({
        path: "/createTeachSchedule", //跳转路径
        name: "createTeachSchedule", //跳转路径的name值，不写跳转后页面取不到参数
        // 参数
        query: {
          taskId: taskName
        }
      });
    },
    //获取现有任务
    getTasksStatusForClassStrategy() {
      let that = this;
      that.taskNameArray = [];
      // console.log(that.$store.state.token);
      that
        .$axios({
          url: that.$root.URL + "/taskstatus",
          //url: "/api/goclass/admin/timer/schedul/1",
          method: "get",
          crossDomain: true
        })
        .then(res => {
          if (res.data.tasksStageMap == {}) {
            that.isShowWord = true;
          } else {
            that.isShowWord = false;
            for (let i in res.data.tasksStageMap) {
              if (res.data.tasksStageMap[i] >= 4) {
                let obj = {};
                obj["taskName"] = i;
                that.taskNameArray.push(obj);
              }
            }
          }

          // that.taskNameArray = res;
          // let nameObj = res.data.tasksStageMap;
          // let obj = {};
          // for (let i in nameObj) {
          //   obj["taskName"] = i;
          //   that.taskNameArray.push(obj);
          //   obj = {};
          // }
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
  created() {
    let that = this;
    that.getTasksStatusForClassStrategy();
  },
  mounted() {}
};
</script>
<style scoped>
.a-main {
  position: relative;
  margin-top: 30px;
  margin-right: 0;
  margin-left: 0;
}

.clearfix span {
  color: #409eff;
  font-size: 20px;
  line-height: 51px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  margin: 20px 20px;
}
.add-bt {
  float: right;
  font-size: 26px;
}
.card-content {
  margin-bottom: 18px;
  font-size: 16px;
  line-height: 50px;
  border-bottom: 1px dotted #409eff;
}
.card-content i {
  margin-left: 18px;
  margin-right: 18px;
  line-height: 50px;
  color: #409eff;
}
.set-bt {
  float: right;
  margin-top: 10px;
}
.first-bt {
  margin-right: 30px;
}
.word{
  color: red;
  margin-top: 40px;
}
</style>