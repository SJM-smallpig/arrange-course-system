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
        <i class="el-icon-edit" @click="setName(item.name)"></i>
        {{item.name}}
        <el-button
          type="danger"
          size="mini"
          round
          class="set-bt delete-task"
          @click="deleteTask(item.name)"
        >删除</el-button>
        <el-button type="primary" size="mini" round class="set-bt" @click="toSetRules(item.name)">设置</el-button>
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
      taskNameArray: [{name:'高一分班'}]
    };
  },
  watch: {},
  computed: {},
  methods: {
    //新建任务
    openAddName() {
      this.$prompt("请输入任务名称", "新建任务", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/,
        inputErrorMessage: "任务名称格式不正确，只能包含汉字，数字，字母"
      })
        .then(({ value }) => {
          if (this.taskNameArray.push({ name: value })) {
            this.$message({
              type: "success",
              message: "你的任务名称是: " + value
            });
          }
          console.log(this.taskNameArray);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    //删除任务
    deleteTask(name) {
      this.$confirm("是否删除" + name + "这一任务", "删除", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          for (let i = 0; i < this.taskNameArray.length; i++) {
            if (this.taskNameArray[i].name == name) {
              this.taskNameArray.splice(i, 1);
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              console.log(this.taskNameArray);
            }
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    },
    //重命名任务
    setName(oldName) {
      this.$prompt("请输入新名称", "重命名", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[a-zA-Z0-9\u4e00-\u9fa5]+$/,
        inputErrorMessage: "任务名称格式不正确，只能包含汉字，数字，字母"
      })
        .then(({ value }) => {
         for (let i = 0; i < this.taskNameArray.length; i++) {
            if (this.taskNameArray[i].name == oldName) {
              this.taskNameArray[i].name=value
              this.$message({
                type: "success",
                message: "重命名成功!"
              });
              console.log(this.taskNameArray);
            }
          }
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    },
    //跳转当任务设置页面
    toSetRules(taskName){
      let that = this;
      that.$router.push({
        path: "@/views/SetRules", //跳转路径
        name: "setRules", //跳转路径的name值，不写跳转后页面取不到参数
        // 参数
        query: {
          taskName:taskName
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.a-main {
  position: relative;
  margin-top: 0;
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