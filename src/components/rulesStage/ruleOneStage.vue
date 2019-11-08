<template>
  <div class="r-main">
    <template v-for="item in formData">
      <el-form label-position="left" class="demo-table-expand" :key="item.index">
        <el-form-item label="任务名称">
          <div style="border-bottom:1px solid #bababa;">
            <span>{{item.taskName}}</span>
          </div>
        </el-form-item>
        <el-form-item label="年级">
          <div style="border-bottom:1px solid #bababa;">
            <span>{{item.grade}}</span>
          </div>
        </el-form-item>
        <el-form-item label="班类">
          <span>{{item.classCategory}}</span>
        </el-form-item>
        <el-form-item label="学生选科人数">
          <el-table
            v-show="item.sectionStudentNumber"
            v-model="item.sectionStudentNumber"
            :data="item.sectionStudentNumber"
            border
            size="mini"
            class="s-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          >
            <el-table-column prop="1" label="科目" align="center" width="60px"></el-table-column>
            <el-table-column prop="13" label="历地政" align="center" width="60px"></el-table-column>
            <el-table-column prop="21" label="历地生" align="center" width="60px"></el-table-column>
            <el-table-column prop="37" label="历地化" align="center" width="60px"></el-table-column>
            <el-table-column prop="25" label="历政生" align="center" width="60px"></el-table-column>
            <el-table-column prop="41" label="历政化" align="center" width="60px"></el-table-column>
            <el-table-column prop="49" label="历生化" align="center" width="60px"></el-table-column>
            <el-table-column prop="14" label="物地政" align="center" width="60px"></el-table-column>
            <el-table-column prop="22" label="物地生" align="center" width="60px"></el-table-column>
            <el-table-column prop="38" label="物地化" align="center" width="60px"></el-table-column>
            <el-table-column prop="26" label="物政生" align="center" width="60px"></el-table-column>
            <el-table-column prop="42" label="物政化" align="center" width="60px"></el-table-column>
            <el-table-column prop="50" label="物生化" align="center" width="60px"></el-table-column>
            <el-table-column prop="sum" label="总计" align="center" width="60px"></el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item label="老师各科人数">
          <el-table
            v-show="item.subjectTeacherNumber"
            v-model="item.subjectTeacherNumber"
            :data="item.subjectTeacherNumber"
            border
            size="mini"
            class="t-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          >
            <el-table-column prop="subject" label="科目" align="center" width="50px"></el-table-column>
            <!--<el-table-column prop="Chinese" label="语文" align="center" width="50px"></el-table-column>
            <el-table-column prop="Math" label="数学" align="center" width="50px"></el-table-column>
            <el-table-column prop="English" label="英语" align="center" width="50px"></el-table-column>-->
            <el-table-column prop="Physics" label="物理" align="center" width="50px"></el-table-column>
            <el-table-column prop="Chemistry" label="化学" align="center" width="50px"></el-table-column>
            <el-table-column prop="Biology" label="生物" align="center" width="50px"></el-table-column>
            <el-table-column prop="Geography" label="地理" align="center" width="50px"></el-table-column>
            <el-table-column prop="History" label="历史" align="center" width="50px"></el-table-column>
            <el-table-column prop="sum" label="总计" align="center" width="50px"></el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item label="班级人数范围">
          <span>{{item.miniNums}} -- {{item.maxNums}}</span>
        </el-form-item>
        <el-form-item label="任务运行时间">
          <span>{{item.runingTime}}</span>
        </el-form-item>
        <el-form-item label="任务状态">
          <span class="status">分班第一阶段:</span>
          <el-button type="primary" round size="mini" @click="oneStageBegin" v-show="showBegin">开始</el-button>
          <div v-show="!showBegin" class="showing">
            <span class="status">{{status}}</span>
            <i class="el-icon-refresh-right status el-making" v-show="!showSubGroupData"></i>
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
        <el-form-item label v-show="showSubGroupData">
          <div class="stage-one">
            <el-table
              v-model="subGroupData"
              :data="subGroupData"
              border
              size="mini"
              class="group-num-table"
              :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            >
              <el-table-column prop="subject" label="科目组合" align="center" width="80px"></el-table-column>
              <el-table-column prop="生化" label="生化" align="center" width="80px"></el-table-column>
              <el-table-column prop="地化" label="地化" align="center" width="80px"></el-table-column>
              <el-table-column prop="地生" label="地生" align="center" width="80px"></el-table-column>
              <el-table-column prop="政化" label="政化" align="center" width="80px"></el-table-column>
              <el-table-column prop="政生" label="政生" align="center" width="80px"></el-table-column>
              <el-table-column prop="地政" label="地政" align="center" width="80px"></el-table-column>
            </el-table>
            <div class="result-sty">第一阶段参考评分如下:</div>
            <el-table
              v-model="oneResutltData"
              :data="oneResutltData"
              border
              size="mini"
              class="one-result-table"
              :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            >
              <el-table-column prop="group" label="分组" align="center" width="150px"></el-table-column>
              <el-table-column prop="4" label="地理" align="center" width="150px"></el-table-column>
              <el-table-column prop="8" label="政治" align="center" width="150px"></el-table-column>
              <el-table-column prop="16" label="生物" align="center" width="150px"></el-table-column>
              <el-table-column prop="32" label="化学" align="center" width="150px"></el-table-column>
            </el-table>
          </div>

          <div class="stage-one">
            <div class="result-sty">第一阶段生成结果如下:</div>
            <el-table
              :data="firstGroup"
              v-model="firstGroup"
              size="mini"
              border
              stripe
              class="group-table"
            >
              <el-table-column label="第一组" align="center">
                <el-table-column prop="comColumn" label="科目组合" width="100px" align="center"></el-table-column>
                <el-table-column prop="numColumn" label="人数" width="100px" align="center">
                  <template slot-scope="scope">
                    <el-input
                      v-if="scope.row.edit"
                      v-model="scope.row.numColumn"
                      :placeholder="scope.row.numColumn"
                      class="edit-input"
                    ></el-input>
                    <span v-else>{{scope.row.numColumn}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="100" align="center" prop="firstGroup">
                  <template slot-scope="scope">
                    <div v-show="!showHook">
                      <div v-if="!scope.row.edit">
                        <el-button type="text" size="medium" @click="editData(scope.row)">
                          <i class="el-icon-edit" aria-hidden="true"></i>
                        </el-button>
                      </div>
                      <div v-else>
                        <el-button
                          type="primary"
                          size="mini"
                          icon="el-icon-check"
                          circle
                          class="edit-confirm-btn"
                          @click="editData(scope.row,scope.column)"
                        ></el-button>
                      </div>
                    </div>
                    <div>
                      <i v-show="showHook" class="el-icon-check check"></i>
                    </div>
                  </template>
                </el-table-column>
              </el-table-column>
            </el-table>

            <el-table
              :data="secondGroup"
              v-model="secondGroup"
              border
              stripe
              class="group-table"
              size="mini"
            >
              <el-table-column label="第二组" align="center">
                <el-table-column prop="comColumn" label="科目组合" width="100" align="center"></el-table-column>
                <el-table-column prop="numColumn" label="人数" width="100" align="center">
                  <template slot-scope="scope">
                    <el-input
                      v-if="scope.row.edit"
                      v-model="scope.row.numColumn"
                      :placeholder="scope.row.numColumn"
                      class="edit-input"
                    ></el-input>
                    <span v-else>{{scope.row.numColumn}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="100" align="center" prop="secondGroup">
                  <template slot-scope="scope">
                    <div v-show="!showHook">
                      <div v-if="!scope.row.edit">
                        <el-button type="text" size="medium" @click="editData(scope.row)">
                          <i class="el-icon-edit" aria-hidden="true"></i>
                        </el-button>
                      </div>
                      <div v-else>
                        <el-button
                          type="primary"
                          size="mini"
                          icon="el-icon-check"
                          circle
                          class="edit-confirm-btn"
                          @click="editData(scope.row,scope.column)"
                        ></el-button>
                      </div>
                    </div>
                    <div>
                      <i v-show="showHook" class="el-icon-check check"></i>
                    </div>
                  </template>
                </el-table-column>
              </el-table-column>
            </el-table>

            <el-table
              :data="thirtGroup"
              v-model="thirtGroup"
              border
              stripe
              class="group-table"
              size="mini"
            >
              <el-table-column label="第三组" align="center">
                <el-table-column prop="comColumn" label="科目组合" width="100" align="center"></el-table-column>
                <el-table-column prop="numColumn" label="人数" width="100" align="center">
                  <template slot-scope="scope">
                    <el-input
                      v-if="scope.row.edit"
                      v-model="scope.row.numColumn"
                      :placeholder="scope.row.numColumn"
                      class="edit-input"
                    ></el-input>
                    <span v-else>{{scope.row.numColumn}}</span>
                  </template>
                </el-table-column>
                <el-table-column label="操作" width="100" align="center" prop="thirtGroup">
                  <template slot-scope="scope">
                    <div v-show="!showHook">
                      <div v-if="!scope.row.edit">
                        <el-button type="text" size="medium" @click="editData(scope.row)">
                          <i class="el-icon-edit" aria-hidden="true"></i>
                        </el-button>
                      </div>
                      <div v-else>
                        <el-button
                          type="primary"
                          size="mini"
                          icon="el-icon-check"
                          circle
                          class="edit-confirm-btn"
                          @click="editData(scope.row,scope.column)"
                        ></el-button>
                      </div>
                    </div>
                    <div>
                      <i v-show="showHook" class="el-icon-check check"></i>
                    </div>
                  </template>
                </el-table-column>
              </el-table-column>
            </el-table>
            <div class="first-word">
              第一阶段不同科目组合人数已完成，请参考评分若需修改
              <span>请手动调整</span>,若不需修改或修改好请点击
              <el-button
                class="modify-btn"
                type="primary"
                round
                size="mini"
                @click="nextTwoPart"
              >{{isModify}}</el-button>
            </div>
          </div>
        </el-form-item>
        <el-button
          type="warning"
          @click="toRuleTwoStage"
          class="next-btn"
          size="small"
          v-show="showSubGroupData"
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
  </div>
</template>

<script>
import $ from "jquery";
export default {
  components: {},
  props: {},
  data() {
    return {
      showSubGroupData: false, //是否显示科目组合人数表
      showBegin: true, //是否开始第一阶段运行
      showHook: true, //选择确认or修改
      showLoading: false, //是否显示加载动画
      status: "进行中",
      isModify: "修改",
      formData: [],
      taskId: "",
      isNameExit: false,
      oneResutltData: [],

      subGroupData: [
        //第一阶段每个组合总人数
        {
          subject: "人数",
          生化: "",
          地化: "",
          地生: "",
          政化: "",
          政生: "",
          地政: ""
        }
      ],
      firstGroup: [],
      secondGroup: [],
      thirtGroup: [],
      runingTime: 0
    };
  },
  watch: {},
  computed: {
    taskLists() {
      return this.$store.state.taskLists;
    }
  },
  methods: {
    //遍历组合数据
    ergodicGroup(curCom, curNum, toalName, groupOneName, groupTwoName) {
      for (let i = 0; i < groupOneName.length; i++) {
        for (let key in groupOneName[i]) {
          if (key == "comColumn") {
            if (groupOneName[i]["comColumn"] == curCom) {
              groupOneName[i]["numColumn"] = (toalName - curNum).toFixed(1);
              // console.log(groupOneName[i]["numColumn"]);
            }
          }
        }
      }
      for (let i = 0; i < groupTwoName.length; i++) {
        for (let key in groupTwoName[i]) {
          if (key == "comColumn") {
            if (groupTwoName[i]["comColumn"] == curCom) {
              groupTwoName[i]["numColumn"] = (toalName - curNum).toFixed(1);
              // console.log(groupTwoName[i]["numColumn"]);
            }
          }
        }
      }
    },
    //修改第一阶段数据
    editData(row, column = null) {
      let that = this;
      // console.log(row.edit);
      row.edit = !row.edit;
      let pro;
      if (column != null) {
        pro = column.property;
      }

      let groupOneName, groupTwoName;
      let currentComColumn = row.comColumn; //当前所选组合名称
      let currentNumColumn = row.numColumn; //当前所选组合人数
      let subGroupData = that.subGroupData; //所有组合
      let groupTotaNum; //修改当前组合的人数总和

      for (let subGroup in subGroupData[0]) {
        // console.log(subGroup);
        if (subGroup == currentComColumn) {
          groupTotaNum = subGroupData[0][subGroup];
        }
      }

      if (row.edit === false) {
        row.numColumn = parseInt(currentNumColumn).toFixed(1);
        if (pro == "firstGroup") {
          groupOneName = that.secondGroup;
          groupTwoName = that.thirtGroup;
          that.ergodicGroup(
            currentComColumn,
            currentNumColumn,
            groupTotaNum,
            groupOneName,
            groupTwoName
          );
        } else if (pro == "secondGroup") {
          groupOneName = that.firstGroup;
          groupTwoName = that.thirtGroup;
          that.ergodicGroup(
            currentComColumn,
            currentNumColumn,
            groupTotaNum,
            groupOneName,
            groupTwoName
          );
        } else {
          groupOneName = that.firstGroup;
          groupTwoName = that.secondGroup;
          that.ergodicGroup(
            currentComColumn,
            currentNumColumn,
            groupTotaNum,
            groupOneName,
            groupTwoName
          );
        }
      }
    },
    //当前collapse
    handleChange(val) {
      // console.log(val);
    },
    //计算评分表总计和差值
    getTotalAndDiffData(scoreTable, minClassNumber) {
      let that = this;
      //去掉精确度
      let arrTable = [];
      for (let r in scoreTable) {
        for (let t in scoreTable[r]) {
          if (
            typeof scoreTable[r][t] == "string" &&
            scoreTable[r][t].includes("/") == true
          ) {
            //  console.log(res.data.scoreTable[r][t]);
            arrTable = scoreTable[r][t].split("/");

            for (let i = 0; i < arrTable.length; i++) {
              arrTable[i] = Number(arrTable[i]).toFixed(2);
            }
            scoreTable[r][t] = arrTable.join("/");
          }
        }
      }

      //计算总计差值

      let arr = [];
      for (let i in scoreTable[3]) {
        scoreTable[3][i] = Number(scoreTable[3][i]).toFixed(2);
        arr.push(scoreTable[3][i]);
      }

      scoreTable[3]["group"] = "总计";
      let dValue = [];
      for (let j = 0; j < minClassNumber.length; j++) {
        let temp = minClassNumber[j] - arr[j];

        dValue.push(Number(temp).toFixed(2));
      }
      let dValueObj = {};
      dValueObj["4"] = dValue[0];
      dValueObj["8"] = dValue[1];
      dValueObj["16"] = dValue[2];
      dValueObj["32"] = dValue[3];
      dValueObj["group"] = "差值";

      scoreTable.push(dValueObj); //加入差值
    },
    //分班第一阶段开始
    oneStageBegin() {
      let that = this;
      that.isShowPage = true;
      that.showBegin = false;
      that.showLoading = true;
      if (that.showBegin == false) {
        let StuData = that.formData[0].sectionStudentNumber[0];
        // console.log(StuData);
        let arrStudent = [];
        let newArray = []; //存放组合的人数
        let sum = 0;
        for (var i in StuData) {
          arrStudent.push(StuData[i]);
        }
        arrStudent.pop();
        arrStudent.shift();
        for (let k = 0; k < arrStudent.length; k += 2) {
          sum = Number(arrStudent[k]) + Number(arrStudent[k + 1]);
          newArray.push(sum);
        }
        that.subGroupData[0]["地政"] = newArray[0];
        that.subGroupData[0]["地生"] = newArray[1];
        that.subGroupData[0]["政生"] = newArray[2];
        that.subGroupData[0]["地化"] = newArray[3];
        that.subGroupData[0]["政化"] = newArray[4];
        that.subGroupData[0]["生化"] = newArray[5];
      }

      that
        .$axios({
          url:
            that.$root.URL +
            "/runtask?taskId=" + //运行任务
            that.taskId +
            "&stage=1",
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
                    "/result?distribution=0&stage=1&taskId=" + //定时获取任务结果
                    that.taskId,
                  method: "get",
                  crossDomain: true
                })
                .then(function(res) {
                  if (res.status === 200) {
                    if (res.data != "") {
                      clearInterval(that.timer);
                      that.getTotalAndDiffData(
                        res.data.scoreTable,
                        res.data.minClassNumber
                      );
                      that.oneResutltData = res.data.scoreTable;
                      that.firstGroup = res.data.resultData["第1组"];
                      that.secondGroup = res.data.resultData["第2组"];
                      that.thirtGroup = res.data.resultData["第3组"];
                      that.showLoading = false;
                      that.showSubGroupData = true;
                      that.status = "完成";
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
            }, 10000);

            // } else {
            //   clearInterval(that.timer);
            // }
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    //确认修改
    nextTwoPart() {
      if (this.showHook == false) {
        this.showHook = true;
        this.isModify = "修改";
      } else {
        this.showHook = false;
        this.isModify = "确定";
      }
    },
    //下一步操作
    toRuleTwoStage() {
      let that = this;
      if (that.isModify == "修改") {
        that.$router.push({
          path: "@/components/rulesStage/RuleTwoStage", //跳转路径
          name: "ruleTwoStage", //跳转路径的name值，不写跳转后页面取不到参数
          // 参数
          query: {
            taskId: that.taskId,
            isNameExit: that.isNameExit,
            formData: that.formData[0]
          }
        });
      } else {
        alert("请先点击确认修改按钮！");
      }
    },
    //任务已存在，获取结果
    getTaskOneStageData(taskId) {
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
                if (res.data.tasksStageMap[i] < 1) {
                  that.isNameExit = false;
                } else {
                  that.isNameExit = true;
                  that.showLoading = false;
                  that.showSubGroupData = true;
                  that.showBegin = false;
                  that.status = "已完成";
                  console.log(that.formData[0]);
                  let StuData = that.formData[0].sectionStudentNumber[0];
                  // console.log(StuData);
                  let arrStudent = [];
                  let newArray = []; //存放组合的人数
                  let sum = 0;
                  for (var i in StuData) {
                    arrStudent.push(StuData[i]);
                  }
                  arrStudent.pop();
                  arrStudent.shift();
                  console.log(StuData);
                  for (let k = 0; k < arrStudent.length; k += 2) {
                    sum = Number(arrStudent[k]) + Number(arrStudent[k + 1]);
                    newArray.push(sum);
                  }
                  that.subGroupData[0]["地政"] = newArray[0];
                  that.subGroupData[0]["地生"] = newArray[1];
                  that.subGroupData[0]["政生"] = newArray[2];
                  that.subGroupData[0]["地化"] = newArray[3];
                  that.subGroupData[0]["政化"] = newArray[4];
                  that.subGroupData[0]["生化"] = newArray[5];
                  that
                    .$axios({
                      url:
                        that.$root.URL +
                        "/result?stage=1&distribution=0&taskId=" + //定时获取任务结果
                        that.taskId,
                      method: "get",
                      crossDomain: true
                    })
                    .then(function(res) {
                      if (res.status === 200) {
                        if (res.data != "") {
                          that.getTotalAndDiffData(
                            res.data.scoreTable,
                            res.data.minClassNumber
                          );
                          // //去掉精确度

                          // let arrTable = [];
                          // for (let r in res.data.scoreTable) {
                          //   for (let t in res.data.scoreTable[r]) {
                          //     if (
                          //       typeof res.data.scoreTable[r][t] == "string" &&
                          //       res.data.scoreTable[r][t].includes("/") == true
                          //     ) {
                          //       //  console.log(res.data.scoreTable[r][t]);
                          //       arrTable = res.data.scoreTable[r][t].split("/");

                          //       for (let i = 0; i < arrTable.length; i++) {
                          //         arrTable[i] = Number(arrTable[i]).toFixed(2);
                          //       }
                          //       res.data.scoreTable[r][t] = arrTable.join("/");
                          //     }
                          //   }
                          // }

                          // //计算总计差值

                          // let arr = [];
                          // for (let i in res.data.scoreTable[3]) {
                          //   res.data.scoreTable[3][i] = Number(
                          //     res.data.scoreTable[3][i]
                          //   ).toFixed(2);
                          //   arr.push(res.data.scoreTable[3][i]);
                          // }

                          // res.data.scoreTable[3]["group"] = "总计";
                          // let dValue = [];
                          // for (
                          //   let j = 0;
                          //   j < res.data.minClassNumber.length;
                          //   j++
                          // ) {
                          //   let temp = res.data.minClassNumber[j] - arr[j];

                          //   dValue.push(Number(temp).toFixed(2));
                          // }
                          // let dValueObj = {};
                          // dValueObj["4"] = dValue[0];
                          // dValueObj["8"] = dValue[1];
                          // dValueObj["16"] = dValue[2];
                          // dValueObj["32"] = dValue[3];
                          // dValueObj["group"] = "差值";
                          // that.oneResutltData.push(dValueObj); //加入差值

                          that.oneResutltData = res.data.scoreTable;

                          that.firstGroup = res.data.resultData["第1组"];
                          that.secondGroup = res.data.resultData["第2组"];
                          that.thirtGroup = res.data.resultData["第3组"];
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
      // if (taskId != undefined) {
      //   that.isNameExit = true;
      //   let StuData = that.formData[0].sectionStudentNumber[0];
      //   // console.log(StuData);
      //   let arrStudent = [];
      //   let newArray = []; //存放组合的人数
      //   let sum = 0;
      //   for (var i in StuData) {
      //     arrStudent.push(StuData[i]);
      //   }
      //   arrStudent.pop();
      //   arrStudent.shift();
      //   for (let k = 0; k < arrStudent.length; k += 2) {
      //     sum = Number(arrStudent[k]) + Number(arrStudent[k + 1]);
      //     newArray.push(sum);
      //   }
      //   that.subGroupData[0]["生化"] = newArray[0];
      //   that.subGroupData[0]["地化"] = newArray[1];
      //   that.subGroupData[0]["地生"] = newArray[2];
      //   that.subGroupData[0]["政化"] = newArray[3];
      //   that.subGroupData[0]["政生"] = newArray[4];
      //   that.subGroupData[0]["地政"] = newArray[5];

      //   that.showBegin = false;
      //   that.showSubGroupData = true;
      //   that
      //     .$axios({
      //       url: that.$root.URL + "/result?stage=1&taskId=" + taskId,
      //       method: "get",
      //       crossDomain: true
      //     })
      //     .then(function(res) {
      //       if (res.status === 200) {
      //         if (res.data != "") {
      //           clearInterval(that.timer);
      //           that.oneResutltData = res.data.scoreTable;
      //           // console.log(res.data);
      //           that.firstGroup = res.data.resultData["第1组"];
      //           that.secondGroup = res.data.resultData["第2组"];
      //           that.thirtGroup = res.data.resultData["第3组"];
      //           that.showLoading = false;
      //           that.showSubGroupData = true;
      //           that.status = "完成";
      //         }
      //       }
      //     })
      //     .catch(function(error) {
      //       clearInterval(that.timer);
      //       if (error.response) {
      //         if (error.response.status === 404) {
      //           that.$router.push({
      //             path: "@/views/loginFailed", //跳转路径
      //             name: "loginFailed", //跳转路径的name值，不写跳转后页面取不到参数
      //             // 参数
      //             query: {
      //               error: "correct"
      //             }
      //           });
      //         }
      //       } else if (error.request) {
      //         that.$router.push({
      //           path: "@/views/loginFailed", //跳转路径
      //           name: "loginFailed", //跳转路径的name值，不写跳转后页面取不到参数
      //           // 参数
      //           query: {
      //             error: "error"
      //           }
      //         });
      //         console.log(error.request);
      //       } else {
      //         that.$router.push({
      //           path: "@/views/loginFailed", //跳转路径
      //           name: "loginFailed", //跳转路径的name值，不写跳转后页面取不到参数
      //           // 参数
      //           query: {
      //             error: "error"
      //           }
      //         });
      //         console.log("Error", error.message);
      //       }
      //       console.log(error.request);
      //     });
      // }
    },
    //获取任务规则
    getTaskRule(taskId) {
      let that = this;
      that
        .$axios({
          url:
            that.$root.URL +
            "/rule?taskId=" + //定时获取任务结果
            taskId,
          method: "get",
          crossDomain: true
        })
        .then(function(res) {
          if (res.status === 200) {
            console.log(res.data);
            // that.formData.push(res.data.rule);
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
  },
  mounted() {
    let that = this;
    if (that.$route.query) {
      if (that.$route.query.form === "[object Object]") {
      } else {
        let paramsData = that.$route.query;
        that.taskId = paramsData.taskId;

        that.formData.push(paramsData.form);
        that.formData[0]["taskName"] = paramsData.taskId;

        that.runingTime = paramsData.form.runingTime;
        
      }
    }

    if (that.$route.params.form) {
      let params = that.$route.params.form;
      that.formData.push(params);
      

      that.taskId = that.$route.params.taskId;
      that.getTaskRule(that.taskId);
      
      // that.getTaskOneStageData(that.taskId);
    }

    
    if (that.taskId != undefined || that.taskId != "") {
      //若存在该任务，填上数据
      that.getTaskOneStageData(that.taskId);
    }

    // let backTaskId = that.$route.params.taskId;//历史back回去的id
    // if(backTaskId){
    //   console.log(backTaskId);
    // }
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
  beforeRouteLeave(to, from, next) {
    //路由离开前返回上一页状态
    let that = this;
    to.params.taskId = that.taskId;
    to.params.formData = that.formData;
    next();
  },
  destroyed: function() {}
};
</script>
<style scoped>
.r-main {
  position: relative;
  margin-top: 30px;
  margin-right: 0;
  margin-left: 10px;
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
.s-table {
  width: 841px;
  margin-top: 10px;
}
.t-table {
  width: 351px;
  margin-top: 10px;
}
.status {
  color: #409eff;
  margin-right: 5px;
}
.showing {
  display: inline;
}
.first-word {
  color: #99a9bf;
}
.first-word span:nth-child(1) {
  color: red;
}
.first-word span:nth-child(2) {
  color: #409eff;
  cursor: pointer;
  font-weight: bold;
}
.group-table {
  width: 301px;
  display: inline-block;
  margin-top: 10px;
  margin-right: 18px;
}
.group-num-table {
  width: 561px;
  margin-top: 40px;
}
.one-result-table {
  width: 751px;
  margin-top: 10px;
}
.result-sty {
  color: #e6a23c;
  font-weight: bold;
  margin-top: 10px;
}
.mdify-btn {
  display: inline-block;
  margin: 0 10px;
}
.stage-one {
  margin-left: 20px;
}
.check {
  display: inline-block;
  height: 36.5px;
  line-height: 35px;
  font-size: 15px;
}
.next-btn {
  display: inline-block;
  margin: 40px 500px;
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
  top: 8px;
  animation: roate 1s ease 1s infinite backwards;
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