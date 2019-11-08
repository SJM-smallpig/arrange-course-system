<template>
  <div class="w-main">
    <div class="tabs">
      <el-tabs v-model="tagActiveName" @tab-click="handleClick">
        <!--加载动画-->
        <div v-show="showLoading">
          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
        </div>
        <el-tab-pane label="高一" name="first">
          <el-table
            :data="teachClassData"
            v-show="!showLoading"
            border
            class="tc-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            stripe
          >
            <el-table-column fixed prop="class" label="班级名称" width="120" align="center"></el-table-column>
            <el-table-column prop="classNum" label="班级人数" width="120" align="center"></el-table-column>
            <el-table-column prop="sub" label="科目" width="120" align="center"></el-table-column>
            <el-table-column prop="teacher" label="教师" width="120" align="center"></el-table-column>
            <el-table-column prop="classId" label="教室" width="120" align="center"></el-table-column>
            <el-table-column fixed="right" label="操作" width="120" align="center">
              <template slot-scope="scope">
                <el-button @click="goClass(scope.row)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="高二" name="second">
          <el-table
            :data="teachClassData"
            border
            class="tc-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            stripe
          >
            <el-table-column fixed prop="class" label="班级名称" width="120" align="center"></el-table-column>
            <el-table-column prop="classNum" label="班级人数" width="120" align="center"></el-table-column>
            <el-table-column prop="ratio" label="男女比例" width="120" align="center"></el-table-column>
            <el-table-column prop="average" label="教学科目平均分" width="120" align="center"></el-table-column>
            <el-table-column fixed="right" label="操作" width="120" align="center">
              <template slot-scope="scope">
                <el-button @click="goClass(scope.row)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="高三" name="third">
          <el-table
            :data="teachClassData"
            border
            class="tc-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            stripe
          >
            <el-table-column fixed prop="class" label="班级名称" width="120" align="center"></el-table-column>
            <el-table-column prop="classNum" label="班级人数" width="120" align="center"></el-table-column>
            <el-table-column prop="ratio" label="男女比例" width="120" align="center"></el-table-column>
            <el-table-column prop="average" label="教学科目平均分" width="120" align="center"></el-table-column>
            <el-table-column fixed="right" label="操作" width="120" align="center">
              <template slot-scope="scope">
                <el-button @click="goClass(scope.row)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      
      showLoading: true,
      tagActiveName: "first",
      teachClassData: [
        // {
        //   id: 1,
        //   class: "物理选考1班",
        //   classNum: "25",
        //   ratio: "13/12",
        //   average: "30"
        // },
        // {
        //   id: 2,
        //   class: "物理选考2班",
        //   classNum: "30",
        //   ratio: "15/15",
        //   average: "30"
        // },
        // {
        //   id: 3,
        //   class: "物理会考3班",
        //   classNum: "25",
        //   ratio: "15/10",
        //   average: "30"
        // },
        // {
        //   id: 4,
        //   class: "化学1班",
        //   classNum: "30",
        //   ratio: "15/15",
        //   average: "30"
        // },
        // {
        //   id: 5,
        //   class: "化学2班",
        //   classNum: "29",
        //   ratio: "14/15",
        //   average: "30"
        // },
        // {
        //   id: 6,
        //   class: "化学3班",
        //   classNum: "28",
        //   ratio: "14/14",
        //   average: "30"
        // },
        // {
        //   id: 7,
        //   class: "历史1班",
        //   classNum: "25",
        //   ratio: "13/12",
        //   average: "30"
        // },
        // {
        //   id: 8,
        //   class: "历史2班",
        //   classNum: "35",
        //   ratio: "18/17",
        //   average: "30"
        // }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleClick(key, keyPath) {
      // console.log(key, keyPath);
    },
    //跳转到班级信息页面
    goClass(row) {
      //  console.log(row);
      let that = this;
      that.$router.push({
        path: "@/components/Class", //跳转路径
        name: "class", //跳转路径的name值，不写跳转后页面取不到参数
        // 参数
        query: {
          row: row, //点击当行数据
          tagActiveName: this.tagActiveName, //跳转当前tab
          taskId: that.taskId,
          class: this.$route.name
        }
      });
    },
    //获取教学班信
    getSixResultStage(taskId) {
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
                    console.log(res.data)
                    
                    that.showLoading = false;
                    let objData = {};
                    let data = res.data;
                    for (let i in data) {
                      objData["class"] = i;
                      for (let j in data[i]) {
                        objData["classNum"] = data[i]["studentInfo"].length;
                        objData["sub"] = data[i]["subjectInfo"];
                      }
                      that.teachClassData.push(objData);
                      objData = {};
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
    let that = this;
    if (this.$route.params.active) {
      //判断您当前所在tab
      this.tagActiveName = this.$route.params.active;
    }
    let params = that.$route.query;

    that.taskId = params.taskId;
    if (that.taskId != "") {
      that.getSixResultStage(that.taskId);
    }
  }
};
</script>
<style scoped>
.w-main {
  position: relative;
  margin-top: 30px;
  margin-right: 0;
  margin-left: 20px;
}
.ac-table {
  margin: 0 auto;
  width: 921px;
}
.tc-table {
  width: 721px;
  margin: 0 auto;
  margin-top: 30px;
  margin-bottom: 30px;
}
.tabs {
  border-bottom: 1px solid #eaecf1;
}
.el-dropdown {
  color: #409eff;
  margin: 15px 20px;
  font-size: 18px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 16px;
  margin-bottom: 20px;
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