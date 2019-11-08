<template>
  <div class="a-main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>新建任务</span>
        <el-button class="add-bt" type="text" @click="openAddName">
          <i class="el-icon-plus"></i>
        </el-button>
      </div>
      <div v-for="item in taskNameArray" :key="item.index" class="card-content">
        <i class="el-icon-edit" @click="setName(item.taskName)"></i>
        {{item.taskName}}
        <el-button
          type="danger"
          size="mini"
          round
          class="set-bt delete-task"
          @click="deleteTask(item.taskName)"
        >删除</el-button>
        <el-button
          type="primary"
          size="mini"
          round
          class="set-bt"
          @click="toSetRules(item.taskName)"
        >查看</el-button>
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
      taskNameArray: []
    };
  },
  watch: {},
  computed: {
    taskLists() {
      return this.$store.state.taskListName;
    }
  },
  methods: {
    //获取数据
    getData() {
      let that = this;
      let taskListName = that.$store.state.taskListName;
      that.taskNameArray = taskListName;
    },
    //新建任务
    openAddName() {
       let that = this;
      that.$router.push({
        path: "@/views/divide-class-manage/setRules", //跳转路径
        name: "setRules", //跳转路径的name值，不写跳转后页面取不到参数
        // 参数
        query: {
        }
      });
      // let that = this;
      // that
      //   .$prompt("请输入任务名称", "新建任务", {
      //     confirmButtonText: "确定",
      //     cancelButtonText: "取消",
      //     inputPattern: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/,
      //     inputErrorMessage: "任务名称格式不正确，只能包含汉字，数字，字母"
      //   })
      //   .then(({ value }) => {
      //     if(that.taskNameArray.length == 0){
      //       let obj = {};
      //           obj["taskName"] = value;
      //           that.taskNameArray.push(obj);
      //           console.log( that.taskNameArray);
      //           that.$message({
      //         type: "success",
      //         message: "你的任务名称是: " + value
      //       });
      //     }else{
      //       loop:for (let i = 0; i < that.taskNameArray.length; i++) {
             
      //       for (let j in that.taskNameArray[i]) {
              
              
      //         if (that.taskNameArray[i][j] == value) {
               
      //           alert("该任务已存在");
      //           that.openAddName();

      //         } else {
                
      //           let obj = {};
      //           obj["taskName"] = value;
      //           that.taskNameArray.push(obj);
      //           console.log( that.taskNameArray);
      //           that.$message({
      //         type: "success",
      //         message: "你的任务名称是: " + value
      //       });
      //           break loop;
      //       //     that.taskNameArray.push(obj);
      //       //     that.$message({
      //       //       type: "success",
      //       //       message: "你的任务名称是: " + value
      //       //     });
      //         }
      //       }
      //     }
      //     }
         
      //   })
      //   .catch(() => {
      //     that.$message({
      //       type: "info",
      //       message: "取消输入"
      //     });
      //   });
    },
    //删除任务
    deleteTask(name) {
      let that = this;
      that
        .$confirm("是否删除" + name + "这一任务", "删除", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        })
        .then(() => {
          that
            .$axios({
              url: that.$root.URL + "/delete?taskId=" + name,
              //url: "/api/goclass/admin/timer/schedul/1",
              method: "delete",
              crossDomain: true
            })
            .then(res => {
              if (res.status == 200) {
                console.log("删除成功");
                for (let i = 0; i < that.taskNameArray.length; i++) {
                  if (that.taskNameArray[i].taskName == name) {
                    that.taskNameArray.splice(i, 1);
                    // this.taskNameArray.splice(i, 1);
                    // that.$store.commit("DEL_List_NAME", name);
                    // console.log(that.$store.getters.getTaskList);
                    that.$message({
                      type: "success",
                      message: "删除成功!"
                    });
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
          // for (let i = 0; i < that.taskNameArray.length; i++) {
          //   if (that.taskNameArray[i].taskName == name) {
          //     // this.taskNameArray.splice(i, 1);
          //     that.$store.commit("DEL_List_NAME", name);
          //     console.log(that.$store.getters.getTaskList);
          //     that.$message({
          //       type: "success",
          //       message: "删除成功!"
          //     });
          //   }
          // }
        })
        .catch(() => {
          that.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //重命名任务
    setName(oldName) {
      let that = this;
      that
        .$prompt("请输入新名称", "重命名", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          inputPattern: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/,
          inputErrorMessage: "任务名称格式不正确，只能包含汉字，数字，字母"
        })
        .then(({ value }) => {
          let names = {};
          names.oldName = oldName;
          names.reName = value;
          that.$store.commit("LIST_RENAME", names);
          // this.taskNameArray[i].taskName = value;
          that.$message({
            type: "success",
            message: "重命名成功!"
          });
        })
        .catch(() => {
          that.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    //跳转当任务设置页面
    toSetRules(taskName) {
      let that = this;
      that.$router.push({
        path: "@/views/divide-class-manage/setRules", //跳转路径
        name: "setRules", //跳转路径的name值，不写跳转后页面取不到参数
        // 参数
        query: {
          taskName: taskName
        }
      });
    },
    //获取现有任务
    getTasksStatusForClassStrategy() {
      // that
      //   .$axios({
      //     url: "/api/goclass/class/grouping/taskstatus",
      //     //url: "/api/goclass/admin/timer/schedul/1",
      //     method: "get",
      //     crossDomain: true
      //   })
      //   .then(res => {
      //     let objTemp = {};
      //     let tasksStageMap = res.data.tasksStageMap;
      //     console.log(tasksStageMap)
      //     for (let i in tasksStageMap) {
      //       objTemp["taskName"] = i;
      //       that.taskNameArray.push(objTemp);
      //       objTemp = {};
      //     }
      //   })
      //   .catch(e => {
      //     console.log("获取数据失败");
      //   });

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
          // console.log("数据是:", res);
          // that.taskNameArray = res;
          let nameObj = res.data.tasksStageMap;
          let obj = {};
          for (let i in nameObj) {
            obj["taskName"] = i;
            that.taskNameArray.push(obj);
            obj = {};
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
  created() {
    let that = this;
    that.getData();
    that.getTasksStatusForClassStrategy(); //获取现有任务
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
.delete-task {
  margin-left: 20px;
}
</style>