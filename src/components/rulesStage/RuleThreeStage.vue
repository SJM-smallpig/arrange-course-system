<template>
  <div class="r-main">
    <div>
      <span class="r-title">任务状态</span>
      <span class="status">分班第三阶段:</span>
      <div class="showing">
        <span class="status">{{status}}</span>
        <i class="el-icon-refresh-right status el-making" v-show="!isShowThreeData"></i>
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
    <el-collapse v-model="activeNames" @change="handleChange" v-show="isShowThreeData">
      <template v-for="item in tableData">
        <el-collapse-item title="评分参考" name="1" :key="item.index">
          <el-table
            v-model="item.threeStageScoreData"
            :data="item.threeStageScoreData"
            border
            stripe
            size="mini"
            class="three-score-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          >
            <el-table-column prop="group" label="分组" align="center" width="100px"></el-table-column>
            <el-table-column prop="1" label="历史" align="center" width="100px"></el-table-column>
            <el-table-column prop="2" label="物理" align="center" width="100px"></el-table-column>
            <el-table-column prop="4" label="地理" align="center" width="100px"></el-table-column>
            <el-table-column prop="8" label="政治" align="center" width="100px"></el-table-column>
            <el-table-column prop="16" label="生物" align="center" width="100px"></el-table-column>
            <el-table-column prop="32" label="化学" align="center" width="100px"></el-table-column>
            <el-table-column prop="isHPMix" label="是否历物混合" align="center" width="100px"></el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item
          v-for="data in item.tableClassData"
          :key="data.index"
          :title="data.title"
          :name="data.name"
          v-model="item.tableClassData"
        >
      <!--修改-->
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
            <el-table-column prop="group" label="第一组" width="80" align="center"></el-table-column>

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
            <el-table-column prop="total" width="80" align="center" label="班级总人数"></el-table-column>
          </el-table>
        </el-collapse-item>
      </template>
    </el-collapse>
    <el-button
      type="warning"
      @click="toRuleFourthStage"
      class="next-btn"
      size="small"
      v-show="isShowThreeData"
    >下一步</el-button>

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
    <!--弹出评分表-->
    <el-popover ref="popover4" placement="right" width="697" trigger="hover">
      <template v-for="item in tableData">
        <el-table
          v-model="item.threeStageScoreData"
          :data="item.threeStageScoreData"
          :key="item.index"
          border
          stripe
          size="mini"
          class="four-score-table"
          :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        >
          <el-table-column prop="group" label="分组" align="center" width="85px"></el-table-column>
          <el-table-column prop="1" label="历史" align="center" width="85px"></el-table-column>
          <el-table-column prop="2" label="物理" align="center" width="85px"></el-table-column>
          <el-table-column prop="4" label="地理" align="center" width="85px"></el-table-column>
          <el-table-column prop="8" label="政治" align="center" width="85px"></el-table-column>
          <el-table-column prop="16" label="生物" align="center" width="85px"></el-table-column>
          <el-table-column prop="32" label="化学" align="center" width="85px"></el-table-column>
          <el-table-column prop="isHPMix" label="是否历物混合" align="center" width="100px"></el-table-column>
        </el-table>
      </template>
    </el-popover>

    <el-button class="show-data" v-popover:popover4>
      <span>评分结果</span>
    </el-button>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  components: {},
  props: {},
  data() {
    return {
      isModify: "修改",
      showLoading: true, //是否显示加载动画
      tableLastItem: true, //表格最后一行
      status: "进行中",
      isShowThreeData: false, //是否显示第三阶段结果数据
      activeNames: [],
      isNameExit:false,
      tableData: [
        {
          threeStageScoreData: [
          ],
          tableClassData: [
          ]
        }
      ]
    };
  },
  watch: {
    // activeNames: {
    //   handler: function(val, oldval) {
    //     if (val.length > oldval.length) {
    //       this.showColor(val);
    //     } else {
    //       let arr = [];
    //       let oldarr = [];
    //       for (let i in oldval) {
    //         oldarr.push(parseInt(oldval[i]));
    //       }
    //       for (let j in val) {
    //         arr.push(parseInt(val[j]));
    //       }
    //       console.log(oldarr);
    //       console.log(arr);
    //       let index;
    //       if (arr.length == 0) {
    //         index = oldarr[0];
    //         // this.noColor(index);
    //       } else if(arr.length == 1){
    //         index = oldarr[1];
    //         // this.noColor(index);
    //       }else{
    //         for (let k = 0; k < oldarr.length; k++) {
    //           if (arr[k] != oldarr[k]) {
    //             index = oldarr[k];
    //             // console.log(oldarr[k]);
    //             continue;
    //           }
    //         }
    //         // this.noColor(index);
    //       }
    //     }
    // }
    // }
  },
  computed: {},
  methods: {
    //当前打开行高亮
    showColor(val) {
      let bb = null;
      for (let i in val) {
        let index = parseInt(val[i]);
        bb = document.getElementsByClassName("el-collapse-item__header")[
          index - 1
        ];
        bb.setAttribute("style", "color:#409eff");
      }
    },
    //关闭当前行
    noColor(index) {
      console.log(index);
      // let arr=[];
      // let oldarr=[];
      // for(let i in oldval){
      //   oldarr.push(parseInt(oldval[i]));
      // }
      // for(let j in val){
      //   arr.push(parseInt(val[j]));
      // }
      // let indexArr = [];
      // for(let k = 0;k<oldarr.length;k++){
      //   if(arr.indexOf(oldarr[k])){
      //     console.log((oldarr[k]))
      //   }
      // }
      let aa = null;
      // console.log(indexArr.length);
      // for(let n =0;n<oldarr.length-1;n++){
      aa = document.getElementsByClassName(
        "el-collapse-item__header is-active"
      )[index - 1];
      //   console.log(aa);
      aa.setAttribute("style", "color:#99a9bf");
      // }
    },
    //是否展示加减号
    showTableLastItem(isShow) {
      let that = this;
      if (that.isShowThreeData == true) {
        that.$nextTick(() => {
          // let tbody = document.getElementsByTagName("tbody");
          if (isShow == "noShow") {
            //全都不显示加减
            let itemIcon = document.getElementsByClassName("icon");
            for (let k = 0; k < itemIcon.length; k++) {
              itemIcon[k].setAttribute("style", "visibility:hidden");
            }
          } else {
            //最后一行不显示加减
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
      let that = this;
      if (that.isShowThreeData == true) {
        that.$nextTick(() => {
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
        });
      }
    },
    handleChange(val) {
      // console.log(val);
      // console.log(index);
      // if(val.length==0){
      //   console.log('1');
      // let aa = null;
      // aa = document.getElementsByClassName('el-collapse-item__header is-active')[2];
      // console.log(aa)
      //   aa.setAttribute("style", "color:#99a9bf");
      //   aa.setAttribute('style','visibility:hidden');
      // }else{
      //   let bb = null;
      //   for(let i in val){
      //     let index = parseInt(val[i]);
      //      bb = document.getElementsByClassName('el-collapse-item__header')[index-1];
      //   bb.setAttribute("style", "color:#409eff");
      //   }
      //   // val = 0;
      // }
    },
    //全部折叠
    getAllCollapse() {
      this.activeNames = [];
    },
    //增加数据
    addData(row) {
      console.log(row);
    },
    
    //运行第三阶段及获取结果
    getThreeResultStage(taskId) {
      console.log("3333")
      let that = this;
      that
        .$axios({
          url:
            that.$root.URL+"/runtask?taskId=" + //运行任务
            taskId +
            "&stage=3",
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
                    "&stage=3&distribution=0",
                  method: "get",
                  crossDomain: true
                })
                .then(function(res) {
                  if (res.status === 200) {
                    if (res.data != "") {
                      clearInterval(that.timer);
                      that.status = "已完成";
                      that.showLoading = false;
                      that.isShowThreeData = true;
                      that.tableData[0].tableClassData =
                        res.data.tableClassData;
                        that.tableData[0].threeStageScoreData = res.data.threeStageScoreData;
                      console.log(res.data);
                      console.log(that.tableData[0].tableClassData);
                      that.showTableLastItem("noShow"); //消除最后一行加减号
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
    isThreeResultStage(taskId){
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
                if (res.data.tasksStageMap[i] < 3) {
                  that.getThreeResultStage(taskId);
                } else {
                  that.status = "已完成";
                      that.showLoading = false;
                      that.isShowThreeData = true;
                  that
                    .$axios({
                      url:
                        that.$root.URL +
                        "/result?taskId=" + //获取任务结果
                        taskId +
                        "&stage=3&distribution=0",
                      method: "get",
                      crossDomain: true
                    })
                    .then(function(res) {
                      if (res.status === 200) {
                        if (res.data != "") {
                          console.log(res.data);
                        //  that.getTotalAndDiffData(
                        //     res.data.scoreData,
                        //     res.data.minClassNumber
                        //   );
                      that.tableData[0].tableClassData =
                        res.data.tableClassData;
                        that.tableData[0].threeStageScoreData = res.data.threeStageScoreData;
                      that.showTableLastItem("noShow"); //消除最后一行加减号
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
    },
    //跳转到第四个阶段
    toRuleFourthStage() {
      let that = this;
      if (that.isModify == "修改") {
        that.$router.push({
          path: "@/components/rulesStage/RuleFourthStage", //跳转路径
          name: "ruleFourthStage", //跳转路径的name值，不写跳转后页面取不到参数
          // 参数
          query: {
            taskId: that.taskId,
            isNameExit:that.isNameExit
          }
        });
      } else {
        alert("请先点击折叠面板确认按钮！");
      }
    }
  },
  created() {},
  mounted() {
    let that = this;
    // that.showTableLastItem("noShow");

    let params = that.$route.query;
    that.taskId = params.taskId;
   console.log(that.taskId)
    that.isNameExit = params.isNameExit;
 
    if (that.isNameExit == false) {
       that.getThreeResultStage(that.taskId);
    } else {
      that.isThreeResultStage(that.taskId);
    }
  },
  beforeDestroy() {
    clearInterval(this.timer);
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
  width: 1123px;
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
  bottom: 150px;
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
.three-score-table {
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
.show-data {
  width: 60px;
  height: 30px;
  background-color: #f2f5f6;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
  text-align: center;
  color: #1989fa;
  font-size: 12px;
  position: fixed;
  right: 30px;
  bottom: 104px;
}
.show-data span {
  position: absolute;
  bottom: 8px;
  right: 5px;
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