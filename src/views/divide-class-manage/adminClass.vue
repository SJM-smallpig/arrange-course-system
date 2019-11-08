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
            v-show="!showLoading"
            :data="adminClassData"
            border
            class="ac-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            stripe
          >
            <el-table-column fixed prop="class" label="班级名称" width="120" align="center"></el-table-column>
            <el-table-column prop="classNumber" label="班级人数" width="120" align="center"></el-table-column>
            <!-- <el-table-column prop="allSubject" label="组合科目" width="120" align="center"></el-table-column>
            <el-table-column prop="goSubject" label="走班科目" width="200" align="center"></el-table-column>
           
            <el-table-column prop="ratio" label="男女比例" width="120" align="center"></el-table-column>
            <el-table-column prop="score" label="成绩" width="120" align="center"></el-table-column>-->
            <el-table-column fixed="right" label="操作" width="120" align="center">
              <template slot-scope="scope">
                <el-button @click="goClass(scope.row)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <!--<el-tab-pane label="高二" name="second">
          <el-table
            :data="adminClassData"
            border
            class="ac-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            stripe
          >
            <el-table-column fixed prop="class" label="班级名称" width="120" align="center"></el-table-column>
            <el-table-column prop="allSubject" label="组合科目" width="120" align="center"></el-table-column>
            <el-table-column prop="goSubject" label="走班科目" width="200" align="center"></el-table-column>
            <el-table-column prop="classNumber" label="班级人数" width="120" align="center"></el-table-column>
            <el-table-column prop="ratio" label="男女比例" width="120" align="center"></el-table-column>
            <el-table-column prop="score" label="成绩" width="120" align="center"></el-table-column>
            <el-table-column fixed="right" label="操作" width="120" align="center">
              <template slot-scope="scope">
                <el-button @click="goClass(scope.row)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="高三" name="third">
          <el-table
            :data="adminClassData"
            border
            class="ac-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            stripe
          >
            <el-table-column fixed prop="class" label="班级名称" width="120" align="center"></el-table-column>
            <el-table-column prop="allSubject" label="组合科目" width="120" align="center"></el-table-column>
            <el-table-column prop="goSubject" label="走班科目" width="200" align="center"></el-table-column>
            <el-table-column prop="classNumber" label="班级人数" width="120" align="center"></el-table-column>
            <el-table-column prop="ratio" label="男女比例" width="120" align="center"></el-table-column>
            <el-table-column prop="score" label="成绩" width="120" align="center"></el-table-column>
            <el-table-column fixed="right" label="操作" width="120" align="center">
              <template slot-scope="scope">
                <el-button @click="goClass(scope.row)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>-->
        <div style="width:500px;height:150px"></div>
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
      adminClassData: [
        // {
        //   id: 1,
        //   class: "高一1班",
        //   allSubject: "物化政",
        //   goSubject: "/",
        //   classNumber: "30",
        //   ratio: "15/15",
        //   score: 292
        // },
        // {
        //   id: 2,
        //   class: "高一2班",
        //   allSubject: "生政史",
        //   goSubject: "/",
        //   classNumber: "29",
        //   ratio: "14/15",
        //   score: 292
        // },
        // {
        //   id: 3,
        //   class: "高一3班",
        //   allSubject: "物化史",
        //   goSubject: "/",
        //   classNumber: "32",
        //   ratio: "16/16",
        //   score: 292
        // },
        // {
        //   id: 4,
        //   class: "高一4班",
        //   allSubject: "化生政",
        //   goSubject: "/",
        //   classNumber: "35",
        //   ratio: "20/15",
        //   score: 292
        // },
        // {
        //   id: 5,
        //   class: "高一5班",
        //   allSubject: "物化X",
        //   goSubject: "/",
        //   classNumber: "30",
        //   ratio: "15/15",
        //   score: 292
        // },
        // {
        //   id: 6,
        //   class: "高一6班",
        //   allSubject: "物化X",
        //   goSubject: "/",
        //   classNumber: "30",
        //   ratio: "15/15",
        //   score: 292
        // },
        // {
        //   id: 7,
        //   class: "高一7班",
        //   allSubject: "物化X",
        //   goSubject: "物理、化学、政治",
        //   classNumber: "30",
        //   ratio: "15/15",
        //   score: 292
        // },
        // {
        //   id: 8,
        //   class: "高一8班",
        //   allSubject: "物化X",
        //   goSubject: "生物、化学",
        //   classNumber: "30",
        //   ratio: "15/15",
        //   score: 292
        // }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    //handleClick：切换tabs
    handleClick(key, keyPath) {
      console.log(key, keyPath);
    },

    //goClass：跳转到班级具体信息页面
    goClass(row) {
      let that = this;
      that.$router.push({
        path: "@/components/Class", //跳转路径
        name: "class", //跳转路径的name值，不写跳转后页面取不到参数
        // 参数
        query: {
          row: row, //点击当行数据
          tagActiveName: this.tagActiveName, //跳转当前tab
          taskId: that.taskId,
          class:this.$route.name
        }
      });
    },
    //获取第五阶段数据
    getFiveResultStage(taskId) {
      let that = this;
      that
        .$axios({
          url:
            that.$root.URL +
            "/runtask?taskId=" + //运行任务
            taskId +
            "&stage=5",
          method: "post",
          crossDomain: true
        })
        .then(function(res) {
          if (res.status === 200) {
            // if (that.runingTime <= 5 && that.runingTime >= 0) {

            that.timer = setInterval(() => {
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
            }, 2000);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  },
  created() {
    let that = this;
  },
  mounted() {
    let that = this;
    //判断路由返回tab

    if (that.$route.params.active) {
      that.tagActiveName = that.$route.params.active;
    }
    let params = that.$route.query;
    console.log(params);
    that.taskId = params.taskId;
    if (that.taskId != "") {
      that.getFiveResultStage(that.taskId);
    }
  }
};
</script>
<style scoped>
.w-main {
  position: relative;
  margin-top: 30px;
  margin-right: 0;
  margin-left: 30px;
}
.ac-table {
  margin: 0 auto;
  width: 361px;
  margin-top: 30px;
  margin-bottom: 30px;
}
.tc-table {
  width: 601px;
  margin: 0 auto;
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