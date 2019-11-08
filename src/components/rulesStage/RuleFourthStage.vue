<template>
  <div class="r-main">
    <div>
      <span class="r-title">任务状态</span>
      <span class="status">分班第四阶段:</span>
      <div class="showing">
        <span class="status">{{status}}</span>
        <i class="el-icon-refresh-right status el-making" v-show="!isShowFourStageData"></i>
      </div>
    </div>
     <!--加载动画-->
    <div v-show="showLoading">
      <div class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
      </div>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange" v-show="isShowFourStageData">
      <!--<template v-for="item in tableData"> -->
        <el-collapse-item
          v-for="data in teachClassData"
          :key="data.index"
          :title="data.title"
          :name="data.name"
          v-model="teachClassData"
        >
          <div>
            <el-button
              type="primary"
              round
              size="mini"
              class="modify"
              @click="getModify"
            >{{isModify}}</el-button>
          </div>

          <el-table
            :data="data.Group"
            border
            class="group"
            id="group"
            stripe
            size="mini"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          >
            <el-table-column prop="group" :label="data.title" width="100" align="center"></el-table-column>

            <el-table-column prop="c13" label="历地政" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.c13!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.c13}}</span>
                  <i
                    v-if="scope.row.c13!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="c21" label="历地生" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.c21!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.c21}}</span>
                  <i
                    v-if="scope.row.c21!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="c37" label="历地化" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.c37!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.c37}}</span>
                  <i
                    v-if="scope.row.c37!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="c25" label="历政生" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.c25!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.c25}}</span>
                  <i
                    v-if="scope.row.c25!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="c41" label="历政化" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.c41!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.c41}}</span>
                  <i
                    v-if="scope.row.c41!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="c49" label="历生化" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.c49!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.c49}}</span>
                  <i
                    v-if="scope.row.c49!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="c14" label="物地政" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.c14!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.c14}}</span>
                  <i
                    v-if="scope.row.c14!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="c22" label="物地生" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.c22!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.c22}}</span>
                  <i
                    v-if="scope.row.c22!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="c38" label="物地化" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.c38!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.c38}}</span>
                  <i
                    v-if="scope.row.c38!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="c26" label="物政生" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.c26!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.c26}}</span>
                  <i
                    v-if="scope.row.c26!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="c42" label="物政化" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.c42!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.c42}}</span>
                  <i
                    v-if="scope.row.c42!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="c50" label="物生化" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.c50!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.c50}}</span>
                  <i
                    v-if="scope.row.c50!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-collapse-item>
     <!-- </template>-->
    </el-collapse>
    <el-button type="warning" @click="toRuleFourthStage" v-show="isShowFourStageData" class="next-btn" size="small">下一步</el-button>

    <div class="all-collapse" @click="getAllCollapse">
      <span class="row-num">全部折叠</span>
      <i class="el-icon-d-caret"></i>
    </div>
    <!--回到顶部-->
    <template>
      <el-backtop class=".page-component__scroll .el-scrollbar__wrap" :bottom="50">
        <div class="up">
          <i class="el-icon-caret-top"></i>
        </div>
      </el-backtop>
    </template>
    
  </div>
</template>

<script>
import $ from "jquery";
export default {
  components: {},
  props: {},
  data() {
    return {
      isNameExit:false,
      isModify: "修改",
      isShowFourStageData:false,
      showLoading:true,
      tableLastItem: true,
      status: "进行中",
      activeNames: [],
          teachClassData: [
          ]
   
    };
  },
  watch: {},
  computed: {},
  methods: {
    //是否展示加减号
    showTableLastItem(isShow) {
      let that =this;
      // let tbody = document.getElementsByTagName("tbody");
       if (that.isShowFourStageData == true) {
      that.$nextTick(() => {
        if (isShow == "noShow") {
          //全都不显示加减
          let itemIcon = document.getElementsByClassName("icon");
          for (let k = 0; k < itemIcon.length; k++) {
            itemIcon[k].setAttribute("style", "visibility:hidden");
          }
        } else {
          // 最后一行不显示加减
          // for (let j = 0; j < tbody.length; j++) {
          //   let tr = tbody[j].getElementsByClassName("el-table__row")[5];
          //   let td = tr.getElementsByTagName("td");
          //   for (let i = 1; i < 13; i++) {
          //     td[i]
          //       .getElementsByTagName("i")[0]
          //       .setAttribute("style", "display:none");
          //     td[i]
          //       .getElementsByTagName("i")[1]
          //       .setAttribute("style", "display:none");
          //   }
          // }
        }
      
      });
       }
    },
    //确认/修改
    getModify() {
      let that =this;
      let itemIcon = document.getElementsByClassName("icon");
      if (that.isModify == "修改") {
        that.isModify = "确定";
        for (let k = 0; k < itemIcon.length; k++) {
          itemIcon[k].setAttribute("style", "visibility:normal");
        }
        that.showTableLastItem("show");
      } else {
        that.isModify = "修改";
        for (let k = 0; k < itemIcon.length; k++) {
          itemIcon[k].setAttribute("style", "visibility:hidden");
        }
      }
    },
    handleChange(val) {},
    //全部折叠
    getAllCollapse() {
      this.activeNames = [];
    },
    //增加数据
    addData(row) {
      console.log(row);
    },
    //跳转到行政班
    toRuleFourthStage() {
      let that = this;
      if (that.isModify == "修改") {
        that.$router.push({
          path: "/taskLists", //跳转路径
          name: "taskLists", //跳转路径的name值，不写跳转后页面取不到参数
          // 参数
          query: {
            taskId: that.taskId
          }
        });
      } else {
        alert("请先点击折叠面板确认按钮！");
      }
    },
    //运行第四阶段
    getThourResultStage(taskId){
      let that = this;
      that
        .$axios({
          url:
            that.$root.URL+"/runtask?taskId=" + //运行任务
            taskId +
            "&stage=4",
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
                    that.$root.URL+"/result?taskId=" + //运行任务
                    taskId +
                    "&stage=4&distribution=0",
                  method: "get",
                  crossDomain: true
                })
                .then(function(res) {
                  if (res.status === 200) {
                    if (res.data != "") {
                      
                      clearInterval(that.timer);
                      that.status = "已完成";
                      that.showLoading = false;
                      that.isShowFourStageData = true;
                      that.teachClassData = res.data.fourStageScoreData;
                      that.showTableLastItem("noShow"); 
                     
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
                  }else {
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
            }, 1000);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //判断当前任务是否存在
    isThourResultStage(taskId){
      let that = this;
      that
        .$axios({
          url: this.$root.URL + "/taskstatus?taskId=" + taskId,
          method: "get",
          crossDomain: true
        })
        .then(function(res) {
          if (res.status === 200) {
            for (let i in res.data.tasksStageMap) {
              if (i == taskId) {
                if (res.data.tasksStageMap[i] < 4) {
                  that.getThourResultStage(taskId);
                } else {
                  that.status = "已完成";
                      that.showLoading = false;
                      that.isShowFourStageData = true;
                  that
                    .$axios({
                      url:
                        that.$root.URL +
                        "/result?taskId=" + 
                        taskId +
                        "&stage=4&distribution=0",
                      method: "get",
                      crossDomain: true
                    })
                    .then(function(res) {
                      console.log(res.data);
                      if (res.status === 200) {
                        if (res.data != "") {
                     that.teachClassData = res.data.fourStageScoreData;
                     that.showTableLastItem("noShow"); 
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
    let that = this;
    // this.showTableLastItem("noShow");

    let params = that.$route.query;
    that.taskId = params.taskId;
    

     that.isNameExit = params.isNameExit;
 
    if (that.isNameExit == false) {
      that.getThourResultStage(that.taskId);
    } else {
      that.isThourResultStage(that.taskId);
    }
  }
};
</script>
<style scoped>
.r-main {
  position: relative;
  margin-top: 30px;
  margin-right: 0;
  margin-left: 20px;
}
.showing {
  display: inline;
  position: relative;
}
@keyframes roate {
  0% {
    transform: rotateZ(0);
  }
  100% {
    transform: rotateZ(360deg);
  }
}
.el-making {
  font-size: 25px;
  position: absolute;
  top: -4px;
  animation: roate 1s ease 1s infinite backwards;
}
.status {
  color: #409eff;
  margin-right: 10px;
}
.r-title {
  color: #99a9bf;
  margin-right: 50px;
}
.group {
  width: 1063px;
  display: block;
  margin: 10px 0 30px 0;
  border: 1px solid #c9e3fe;
}
.all-collapse {
  width: 54px;
  height: 54px;
  font-size: 12px;
  position: fixed;
  right: 35px;
  bottom: 100px;
  border-radius: 50%;
  cursor: pointer;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
}
.all-collapse span {
  float: left;
  line-height: 16px;
  margin-top: 12px;
  margin-left: 8px;
  width: 30px;
}
.all-collapse i {
  float: right;
  margin-top: 20px;
  margin-right: 3px;
}
.icon {
  cursor: pointer;
}
.icon:hover {
  color: #409eff;
}
.row-num {
  color: #409eff;
}
.modify {
  margin-left: 1050px;
  margin-bottom: 10px;
}
.next-btn {
  display: inline-block;
  margin: 100px 500px;
}
.four-score-table {
  width: 803px;
  display: block;
  margin: 20px 0 30px 0;
  border: 1px solid #c9e3fe;
}
.up {
  height: 100%;
  width: 100%;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  text-align: center;
  line-height: 40px;
  color: #1989fa;
}
/**加载动画**/
.spinner {
  margin: 100px auto 0;
  margin-top: 200px;
  width: 500px;
  text-align: center;
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