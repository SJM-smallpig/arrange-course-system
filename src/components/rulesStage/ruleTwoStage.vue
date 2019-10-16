<template>
  <div class="r-main">
    <template v-for="item in twoStageData">
      <el-form label-position="left" class="demo-table-expand" :key="item.index">
        <el-form-item label="任务状态">
          <span class="status">分班第二阶段:</span>
          <div class="showing">
            <span class="status">{{item.status}}</span>
            <i class="el-icon-refresh-right status el-making"></i>
          </div>
        </el-form-item>
        <el-form-item label>
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
              <el-table-column prop="group" label="分组" align="center" width="100px"></el-table-column>
              <el-table-column prop="History" label="历史" align="center" width="100px"></el-table-column>
              <el-table-column prop="Physics" label="物理" align="center" width="100px"></el-table-column>
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
        <el-button type="warning" @click="toRuleThreeStage" class="next-btn" size="small">下一步</el-button>
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
      showInput: true,
      isModify: "修改",
      twoStageData: [
        {
          status: "进行中",
          twoStageResultData: [
            //第一阶段结果数据
            {
              firstGroup: {
                group: "地政",
                hisNum: "14",
                phyNum: "7",
                edit: false
              },
              secondGroup: {
                group: "地生",
                hisNum: "8",
                phyNum: "79",
                edit: false
              },
              thirdGroup: {
                group: "地化",
                hisNum: "0",
                phyNum: "46",
                edit: false
              }
            },
            {
              firstGroup: {
                group: "生化",
                hisNum: "8",
                phyNum: "63",
                edit: false
              },
              secondGroup: {
                group: "政化",
                hisNum: "10",
                phyNum: "20",
                edit: false
              },
              thirdGroup: {
                group: "政生",
                hisNum: "0",
                phyNum: "56",
                edit: false
              }
            },
            {
              firstGroup: {
                group: "地生",
                hisNum: "25",
                phyNum: "54",
                edit: false
              },
              secondGroup: {
                group: "地化",
                hisNum: "12",
                phyNum: "39",
                edit: false
              },
              thirdGroup: {
                group: "地政",
                hisNum: "73",
                phyNum: "7",
                edit: false
              }
            },
            {
              firstGroup: {
                group: "政化",
                hisNum: "3",
                phyNum: "26",
                edit: false
              },
              secondGroup: {
                group: "政生",
                hisNum: "51",
                phyNum: "12",
                edit: false
              },
              thirdGroup: {
                group: "生化",
                hisNum: "2",
                phyNum: "91",
                edit: false
              }
            }
          ],
          twoStageScoreData: [
            //第二阶段评分数据
            {
              group: "第一组",
              History: "50.0/1",
              Physics: "50.0/3"
            },
            {
              group: "第二组",
              History: "40.5/2",
              Physics: "50.0/3"
            },
            {
              group: "第三组",
              History: "37.5/2",
              Physics: "50.0/4"
            },
            {
              group: "总计",
              History: "5.0",
              Physics: "10.0"
            },
            {
              group: "差值",
              History: "0.0",
              Physics: "0.0"
            }
          ]
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
      if(this.isModify == '确定'){
        this.isModify = '修改'
      }else{
        this.isModify = '确定'
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
            // form: that.form
          }
        });
      } else {
        alert("请先点击确认修改按钮！");
      }
    }
  },
  created() {

  },
  mounted() {
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
  width: 301px;
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
</style>