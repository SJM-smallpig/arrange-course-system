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
        >设置</el-button>
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
      that
        .$prompt("请输入任务名称", "新建任务", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          inputPattern: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/,
          inputErrorMessage: "任务名称格式不正确，只能包含汉字，数字，字母"
        })
        .then(({ value }) => {
          if (that.$store.state.taskListName.length == 0) {
            let obj = {};
            obj["taskName"] = value;
            that.$store.commit("SET_List_NAME", obj);
            // console.log(this.$store.state.taskListName);
            that.$message({
              type: "success",
              message: "你的任务名称是: " + value
            });
          } else {
            let array = that.$store.state.taskListName.filter(function(i) {
              return i.taskName == value;
            });

            if (array.length != 0) {
              alert("该任务已存在");
              that.openAddName();
            } else {
              let obj = {};
              obj["taskName"] = value;
              that.$store.commit("SET_List_NAME", obj);
              that.$message({
                type: "success",
                message: "你的任务名称是: " + value
              });
            }
          }
        })
        .catch(() => {
          that.$message({
            type: "info",
            message: "取消输入"
          });
        });
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
          for (let i = 0; i < that.taskNameArray.length; i++) {
            if (that.taskNameArray[i].taskName == name) {
              // this.taskNameArray.splice(i, 1);
              that.$store.commit("DEL_List_NAME", name);
              console.log(that.$store.getters.getTaskList);
              that.$message({
                type: "success",
                message: "删除成功!"
              });
            }
          }
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
        path: "@/views/SetRules", //跳转路径
        name: "setRules", //跳转路径的name值，不写跳转后页面取不到参数
        // 参数
        query: {
          taskName: taskName
        }
      });
    },
    //获取现有任务
    getTaskListData() {
      this.$axios
        .get("http://lede.dalaomai.cn:5050/api/admin/class/grouping/taskstatus", {
        })
        .then(res => {
          console.log("数据是:", res);
        })
        .catch(e => {
          console.log("获取数据失败");
        });
    }
  },
  created() {
    let that = this;
    that.getData();
    that.getTaskListData();
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