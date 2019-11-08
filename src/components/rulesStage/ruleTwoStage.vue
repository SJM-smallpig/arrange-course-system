<template>
  <div class="r-main">
    <template v-for="item in twoStageData">
      <el-form label-position="left" class="demo-table-expand" :key="item.index">
        <el-form-item label="任务状态">
          <span class="status">分班第二阶段:</span>
          <div class="showing">
            <span class="status">{{item.status}}</span>
            <i class="el-icon-refresh-right status el-making" v-show="!isShowtwoData"></i>
          </div>
        </el-form-item>
        <!--加载动画-->
        <el-form-item v-show="showLoading">
          <div class="spinner">
            <div class="bounce1"></div>
            <div class="bounce2"></div>
            <div class="bounce3"></div>
          </div>
        </el-form-item>
        <el-form-item label v-show="isShowtwoData">
          <div class="stage-two">
            <div class="result-sty">第二阶段参考评分如下:</div>
            <el-table
              v-model="item.twoStageScoreData"
              :data="item.twoStageScoreData"
              border
              size="mini"
              class="two-score-table"
              :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            >
              <el-table-column prop="group" label="分组" align="center" width="150px"></el-table-column>
              <el-table-column prop="history" label="历史" align="center" width="150px"></el-table-column>
              <el-table-column prop="physics" label="物理" align="center" width="150px"></el-table-column>
            </el-table>
            <div class="result-sty">第二阶段生成结果如下:</div>
            <el-table
              v-model="item.twoStageResultData"
              :data="item.twoStageResultData"
              border
              size="small"
              class="two-result-table"
              :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            >
              <el-table-column label="第一组" align="center">
                <el-table-column prop="firstGroup.group" label="组合(历 / 物)" align="center"></el-table-column>
                <el-table-column prop="firstGroup" label="比例" align="center" width="100px">
                  <el-table-column prop="firstGroup.hisNum" label="历" align="center" width="100px">
                    <template slot-scope="scope">
                      <el-input
                        v-if="scope.row.firstGroup.edit"
                        v-model="scope.row.firstGroup.hisNum"
                        :placeholder="scope.row.firstGroup.hisNum"
                        class="edit-input"
                        size="mini"
                      ></el-input>
                      <span class="show-num" v-else>{{scope.row.firstGroup.hisNum}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="firstGroup.phyNum" label="物" align="center" width="100px">
                    <template slot-scope="scope">
                      <el-input
                        v-if="scope.row.firstGroup.edit"
                        v-model="scope.row.firstGroup.phyNum"
                        :placeholder="scope.row.firstGroup.phyNum"
                        class="edit-input"
                        size="mini"
                      ></el-input>
                      <span v-else class="show-num">{{scope.row.firstGroup.phyNum}}</span>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table-column>
              <el-table-column label="第二组" align="center">
                <el-table-column
                  prop="secondGroup.group"
                  label="组合(历 / 物)"
                  align="center"
                  width="100px"
                ></el-table-column>
                <el-table-column prop="secondGroup" label="比例" align="center" width="100px">
                  <el-table-column prop="secondGroup.hisNum" label="历" align="center" width="100px">
                    <template slot-scope="scope">
                      <el-input
                        v-if="scope.row.secondGroup.edit"
                        v-model="scope.row.secondGroup.hisNum"
                        :placeholder="scope.row.secondGroup.hisNum"
                        class="edit-input"
                        size="mini"
                      ></el-input>
                      <span v-else>{{scope.row.secondGroup.hisNum}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="secondGroup.phyNum" label="物" align="center" width="100px">
                    <template slot-scope="scope">
                      <el-input
                        v-if="scope.row.secondGroup.edit"
                        v-model="scope.row.secondGroup.phyNum"
                        :placeholder="scope.row.secondGroup.phyNum"
                        class="edit-input"
                        size="mini"
                      ></el-input>
                      <span v-else>{{scope.row.secondGroup.phyNum}}</span>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table-column>
              <el-table-column label="第三组" align="center">
                <el-table-column
                  prop="thirdGroup.group"
                  label="组合(历 / 物)"
                  align="center"
                  width="100px"
                ></el-table-column>
                <el-table-column prop="thirdGroup" label="比例" align="center" width="100px">
                  <el-table-column prop="thirdGroup.hisNum" label="历" align="center" width="100px">
                    <template slot-scope="scope">
                      <el-input
                        v-if="scope.row.thirdGroup.edit"
                        v-model="scope.row.thirdGroup.hisNum"
                        :placeholder="scope.row.thirdGroup.hisNum"
                        class="edit-input"
                        size="mini"
                      ></el-input>
                      <span v-else>{{scope.row.thirdGroup.hisNum}}</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="thirdGroup.phyNum" label="物" align="center" width="100px">
                    <template slot-scope="scope">
                      <el-input
                        v-if="scope.row.thirdGroup.edit"
                        v-model="scope.row.thirdGroup.phyNum"
                        :placeholder="scope.row.thirdGroup.phyNum"
                        class="edit-input"
                        size="mini"
                      ></el-input>
                      <span v-else>{{scope.row.thirdGroup.phyNum}}</span>
                    </template>
                  </el-table-column>
                </el-table-column>
              </el-table-column>
            </el-table>
            <div class="second-word">
              第二阶段组合人数已完成，请参考评分若需修改
              <span>请手动调整</span>,若不需修改或修改好请点击
              <el-button type="primary" round size="mini" @click="getModify">{{isModify}}</el-button>
            </div>
          </div>
        </el-form-item>
        <el-button
          type="warning"
          @click="toRuleThreeStage"
          class="next-btn"
          size="small"
          v-show="isShowtwoData"
        >下一步</el-button>
      </el-form>
    </template>
    <!--回到顶部-->
    <template>
      <el-backtop class=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
        <div class="up">
          <i class="el-icon-caret-top"></i>
        </div>
      </el-backtop>
    </template>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      showLoading: true, //是否显示加载动画
      taskId: "",
      showInput: true, //是否可编辑
      isModify: "修改",
      isShowtwoData: false, //是否展示结果数据
      isNameExit: false,
      twoStageData: [
        {
          status: "进行中",
          twoStageResultData: [],
          twoStageScoreData: []
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    getModify() {
      //遍历编辑属性
      let twoStageData = this.twoStageData[0].twoStageResultData;
      for (let i in twoStageData) {
        for (let j in twoStageData[i]) {
          if (twoStageData[i][j].edit == false) {
            twoStageData[i][j].edit = true;
          } else {
            twoStageData[i][j].edit = false;
          }
        }
      }
      if (this.isModify == "确定") {
        this.isModify = "修改";
      } else {
        this.isModify = "确定";
      }
    },
    //跳转到第三个阶段
    toRuleThreeStage() {
      let that = this;
      if (that.isModify == "修改") {
        that.$router.push({
          path: "@/components/rulesStage/RuleThreeStage", //跳转路径
          name: "ruleThreeStage", //跳转路径的name值，不写跳转后页面取不到参数
          // 参数
          query: {
            taskId: that.taskId,
            isNameExit: that.isNameExit
            // form: that.form
          }
        });
      } else {
        alert("请先点击确认修改按钮！");
      }
    },
    //计算评分表的总计和差值
    getTotalAndDiffData(scoreData, minClassNumber) {
      //去掉精确度;
      
      let arrTable = [];
      for (let r in scoreData) {
        for (let t in scoreData[r]) {
          if (
            typeof scoreData[r][t] == "string" &&
           scoreData[r][t].includes("/") == true
          ) {
            //  console.log(res.data.scoreTable[r][t]);
            arrTable = scoreData[r][t].split("/");
     
            for (let i = 0; i < arrTable.length; i++) {
              arrTable[i] = Number(arrTable[i]).toFixed(2);
            }
            scoreData[r][t] = arrTable.join("/");
          }
        }
      }
      let hisSum = [];
      let phySum = [];
      for (let j = 0; j < scoreData.length; j++) {
        hisSum.push(scoreData[j]["history"].split("/")[1]);
        phySum.push(scoreData[j]["physics"].split("/")[1]);
      }
      let finHisSum = 0;
      let finPhySum = 0;
      for (let k = 0; k < hisSum.length; k++) {
        finHisSum += Number(hisSum[k]);
        finPhySum += Number(phySum[k]);
      }
      let objSum = {};
      objSum["group"] = "总计";
      objSum["history"] = finHisSum.toFixed(2);
      objSum["physics"] = finPhySum.toFixed(2);
      scoreData.push(objSum);

      //计算差值
      let arr = [];
      for (let i in scoreData[3]) {
        if (i != "group") {
         scoreData[3][i] = Number(scoreData[3][i]).toFixed(
            2
          );
          arr.push(scoreData[3][i]);
        }
      }

      let dValue = [];
      for (let j = 0; j < minClassNumber.length; j++) {
        let temp = minClassNumber[j] - arr[j];

        dValue.push(Number(temp).toFixed(2));
      }
      let diff = {};
      diff["group"] = "差值";
      diff["history"] = dValue[0];
      diff["physics"] = dValue[1];
      scoreData.push(diff);
    },
    //获取第二阶段结果数据
    getTwoResultStage(taskId) {
      let that = this;
      that
        .$axios({
          url:
            that.$root.URL +
            "/runtask?taskId=" + //运行任务
            taskId +
            "&stage=2",
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
                    "&stage=2&distribution=0",
                  method: "get",
                  crossDomain: true
                })
                .then(function(res) {
                  if (res.status === 200) {
                    if (res.data != "") {
                      clearInterval(that.timer);
                      that.getTotalAndDiffData(
                        res.data.scoreData,
                        res.data.minClassNumber
                      );

                      //去掉精确度

                      // let arrTable = [];
                      // for (let r in res.data.scoreData) {
                      //   for (let t in res.data.scoreData[r]) {
                      //     if (
                      //       typeof res.data.scoreData[r][t] == "string" &&
                      //       res.data.scoreData[r][t].includes("/") == true
                      //     ) {
                      //       //  console.log(res.data.scoreTable[r][t]);
                      //       arrTable = res.data.scoreData[r][t].split("/");

                      //       for (let i = 0; i < arrTable.length; i++) {
                      //         arrTable[i] = Number(arrTable[i]).toFixed(2);
                      //       }
                      //       res.data.scoreData[r][t] = arrTable.join("/");
                      //     }
                      //   }
                      // }
                      // let hisSum = [];
                      // let phySum = [];
                      // for (let j = 0; j < res.data.scoreData.length; j++) {
                      //   hisSum.push(
                      //     res.data.scoreData[j]["history"].split("/")[1]
                      //   );
                      //   phySum.push(
                      //     res.data.scoreData[j]["physics"].split("/")[1]
                      //   );
                      // }
                      // let finHisSum = 0;
                      // let finPhySum = 0;
                      // for (let k = 0; k < hisSum.length; k++) {
                      //   finHisSum += Number(hisSum[k]);
                      //   finPhySum += Number(phySum[k]);
                      // }
                      // let objSum = {};
                      // objSum["group"] = "总计";
                      // objSum["history"] = finHisSum.toFixed(2);
                      // objSum["physics"] = finPhySum.toFixed(2);
                      // res.data.scoreData.push(objSum);

                      // //计算差值
                      // let arr = [];
                      // for (let i in res.data.scoreData[3]) {
                      //   if (i != "group") {
                      //     res.data.scoreData[3][i] = Number(
                      //       res.data.scoreData[3][i]
                      //     ).toFixed(2);
                      //     arr.push(res.data.scoreData[3][i]);
                      //   }
                      // }

                      // let dValue = [];
                      // for (
                      //   let j = 0;
                      //   j < res.data.minClassNumber.length;
                      //   j++
                      // ) {
                      //   let temp = res.data.minClassNumber[j] - arr[j];

                      //   dValue.push(Number(temp).toFixed(2));
                      // }
                      // console.log(dValue);
                      // let diff = {};
                      // diff["group"] = "差值";
                      // diff["history"] = dValue[0];
                      // diff["physics"] = dValue[1];
                      // res.data.scoreData.push(diff);

                      that.twoStageData[0].status = "已完成";
                      that.showLoading = false;
                      that.isShowtwoData = true;
                      that.twoStageData[0].twoStageResultData =
                        res.data.resultData;
                      that.twoStageData[0].twoStageScoreData =
                        res.data.scoreData;
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
            }, 1000);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //判断当前任务运行到哪个阶段
    isTwoResultStage(taskId) {
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
                if (res.data.tasksStageMap[i] < 2) {
                  that.getTwoResultStage(taskId);
                } else {
                  that.twoStageData[0].status = "已完成";
                  that.showLoading = false;
                  that.isShowtwoData = true;
                  that
                    .$axios({
                      url:
                        that.$root.URL +
                        "/result?taskId=" + //获取任务结果
                        taskId +
                        "&stage=2&distribution=0",
                      method: "get",
                      crossDomain: true
                    })
                    .then(function(res) {
                      if (res.status === 200) {
                        if (res.data != "") {
                          that.getTotalAndDiffData(
                            res.data.scoreData,
                            res.data.minClassNumber
                          );

                          that.twoStageData[0].status = "已完成";
                          that.showLoading = false;
                          that.isShowtwoData = true;
                          that.twoStageData[0].twoStageResultData =
                            res.data.resultData;
                          that.twoStageData[0].twoStageScoreData =
                            res.data.scoreData;
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
    //判断当前任务是否需要执行第二阶段
  },
  created() {},
  mounted() {
    let that = this;
    let params = that.$route.query;

    that.taskId = params.taskId; //获取前页面传递的taskname
    that.isNameExit = params.isNameExit;
    that.formData = params.formData;

    if (that.isNameExit == false) {
      that.getTwoResultStage(that.taskId);
    } else {
      that.isTwoResultStage(that.taskId);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  beforeRouteLeave(to, from, next) {
    //路由离开前返回上一页状态
    let that = this;
      to.params.taskId = that.taskId;
      to.params.form = that.formData;
      
      console.log(to.params)
    next();
  }
};
</script>
<style scoped>
.r-main {
  position: relative;
  margin-top: 30px;
  margin-right: 0;
  margin-left: 10px;
}
.status {
  color: #409eff;
  margin-right: 10px;
}
.two-result-table {
  width: 901px;
  margin-top: 10px;
  margin-bottom: 10px;
}
.two-score-table {
  width: 451px;
  margin-top: 10px;
}
.showing {
  display: inline;
  position: relative;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
  width: 30%;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
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
.result-sty {
  color: #e6a23c;
  font-weight: bold;
  margin-top: 10px;
}
.stage-two {
  margin-left: 20px;
}
.second-word {
  color: #99a9bf;
}
.second-word span:nth-child(1) {
  color: red;
}
.second-word span:nth-child(2) {
  color: #409eff;
  cursor: pointer;
  font-weight: bold;
}
.next-btn {
  display: inline-block;
  margin: 40px 500px;
}
.show-num {
  display: inline-block;
  margin: 2.5px 0;
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