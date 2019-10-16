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
            v-show="item.studentData"
            v-model="item.studentData"
            :data="item.studentData"
            border
            size="mini"
            class="s-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          >
            <el-table-column prop="subject" label="科目" align="center" width="50px"></el-table-column>
            <el-table-column prop="Chinese" label="语文" align="center" width="50px"></el-table-column>
            <el-table-column prop="Math" label="数学" align="center" width="50px"></el-table-column>
            <el-table-column prop="English" label="英语" align="center" width="50px"></el-table-column>
            <el-table-column prop="Physics" label="物理" align="center" width="50px"></el-table-column>
            <el-table-column prop="Chemistry" label="化学" align="center" width="50px"></el-table-column>
            <el-table-column prop="Biology" label="生物" align="center" width="50px"></el-table-column>
            <el-table-column prop="Geography" label="地理" align="center" width="50px"></el-table-column>
            <el-table-column prop="History" label="历史" align="center" width="50px"></el-table-column>
            <el-table-column prop="sum" label="总计" align="center" width="50px"></el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item label="老师各科人数">
          <el-table
            v-show="item.teachData"
            v-model="item.teachData"
            :data="item.teachData"
            border
            size="mini"
            class="t-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          >
            <el-table-column prop="subject" label="科目" align="center" width="50px"></el-table-column>
            <el-table-column prop="Chinese" label="语文" align="center" width="50px"></el-table-column>
            <el-table-column prop="Math" label="数学" align="center" width="50px"></el-table-column>
            <el-table-column prop="English" label="英语" align="center" width="50px"></el-table-column>
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
        <el-form-item label="任务状态">
          <span class="status">分班第一阶段:</span>
          <el-button type="primary" round size="mini" @click="oneStageBegin" v-show="showBegin">开始</el-button>
          <div v-show="!showBegin" class="showing">
            <span class="status">{{status}}</span>
            <i class="el-icon-refresh-right status el-making"></i>
          </div>
        </el-form-item>
        <el-form-item label>
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
              <el-table-column prop="GeoPol" label="地政" align="center" width="80px"></el-table-column>
              <el-table-column prop="BioChe" label="生化" align="center" width="80px"></el-table-column>
              <el-table-column prop="GeoBio" label="地生" align="center" width="80px"></el-table-column>
              <el-table-column prop="PoiChe" label="政化" align="center" width="80px"></el-table-column>
              <el-table-column prop="GeoChe" label="地化" align="center" width="80px"></el-table-column>
              <el-table-column prop="PoiPhy" label="政生" align="center" width="80px"></el-table-column>
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
              <el-table-column prop="group" label="分组" align="center" width="100px"></el-table-column>
              <el-table-column prop="Geography" label="地理" align="center" width="100px"></el-table-column>
              <el-table-column prop="Politics" label="政治" align="center" width="100px"></el-table-column>
              <el-table-column prop="Biology" label="生物" align="center" width="100px"></el-table-column>
              <el-table-column prop="Chemistry" label="化学" align="center" width="100px"></el-table-column>
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
        <el-button type="warning" @click="toRuleTwoStage" class="next-btn" size="small">下一步</el-button>
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
      showBegin: true,
      showHook: false,
      status: "进行中",
      isModify: "确定",
      formData: [],
      oneResutltData: [
        //第一阶段结果数据
        {
          group: "第一组",
          Geography: "50.0/2",
          Politics: "50.0/1",
          Biology: "50.0/3",
          Chemistry: "50.0/2"
        },
        {
          group: "第二组",
          Geography: "46.0/3",
          Politics: "46.5/2",
          Biology: "50.0/3",
          Chemistry: "40.5/3"
        },
        {
          group: "第三组",
          Geography: "42.0/3",
          Politics: "45.3/3",
          Biology: "49.7/3",
          Chemistry: "46.3/3"
        },
        {
          group: "总计",
          Geography: "8.0",
          Politics: "6.0",
          Biology: "9.0",
          Chemistry: "7.0"
        },
        {
          group: "差值",
          Geography: "0.0",
          Politics: "0.0",
          Biology: "0.0",
          Chemistry: "0.0"
        }
      ],

      subGroupData: [
        //第一阶段每个组合总人数
        {
          subject: "人数",
          GeoPol: "101",
          BioChe: "164",
          GeoBio: "166",
          PoiChe: "59",
          GeoChe: "97",
          PoiPhy: "119",
          地政: "101",
          生化: "164",
          地生: "166",
          政化: "59",
          地化: "97",
          政生: "119"
        }
      ],
      firstGroup: [
        //第一阶段第一组组合数据
        {
          comColumn: "地政",
          numColumn: "21.0",
          edit: false
        },
        {
          comColumn: "生化",
          numColumn: "71.0",
          edit: false
        },
        {
          comColumn: "地生",
          numColumn: "79.0",
          edit: false
        },
        {
          comColumn: "政化",
          numColumn: "29.0",
          edit: false
        }
      ],
      secondGroup: [
        //第一阶段第二组组合数据
        {
          comColumn: "地生",
          numColumn: "87.0",
          edit: false
        },
        {
          comColumn: "政化",
          numColumn: "30.0",
          edit: false
        },
        {
          comColumn: "地化",
          numColumn: "51.0",
          edit: false
        },
        {
          comColumn: "政生",
          numColumn: "63.0",
          edit: false
        }
      ],
      thirtGroup: [
        //第一阶段第三组组合数据
        {
          comColumn: "地化",
          numColumn: "46.0",
          edit: false
        },
        {
          comColumn: "政生",
          numColumn: "56.0",
          edit: false
        },
        {
          comColumn: "地政",
          numColumn: "80.0",
          edit: false
        },
        {
          comColumn: "生化",
          numColumn: "93.0",
          edit: false
        }
      ],
      twoPartData: [
        //第一阶段数据
        {
          firstGroup: {
            group: "地政",
            rate: "14 / 7"
          },
          secondGroup: {
            group: "地生",
            rate: "8 / 79"
          },
          thirdGroup: {
            group: "地化",
            rate: "0 / 46"
          }
        },
        {
          firstGroup: {
            group: "生化",
            rate: "8 / 63"
          },
          secondGroup: {
            group: "政化",
            rate: "10 / 20"
          },
          thirdGroup: {
            group: "政生",
            rate: "0 / 56"
          }
        },
        {
          firstGroup: {
            group: "地生",
            rate: "25 / 54"
          },
          secondGroup: {
            group: "地化",
            rate: "12 / 39"
          },
          thirdGroup: {
            group: "地政",
            rate: "73 / 7"
          }
        },
        {
          firstGroup: {
            group: "政化",
            rate: "3 / 26"
          },
          secondGroup: {
            group: "政生",
            rate: "51 / 12"
          },
          thirdGroup: {
            group: "生化",
            rate: "2 / 91"
          }
        }
      ]
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
              console.log(groupOneName[i]["numColumn"]);
            }
          }
        }
      }
      for (let i = 0; i < groupTwoName.length; i++) {
        for (let key in groupTwoName[i]) {
          if (key == "comColumn") {
            if (groupTwoName[i]["comColumn"] == curCom) {
              groupTwoName[i]["numColumn"] = (toalName - curNum).toFixed(1);
              console.log(groupTwoName[i]["numColumn"]);
            }
          }
        }
      }
    },
    //修改第一阶段数据
    editData(row, column = null) {
      console.log(row.edit);
      row.edit = !row.edit;
      let pro;
      if (column != null) {
        pro = column.property;
      }
      console.log(pro);
      let groupOneName, groupTwoName;
      let currentComColumn = row.comColumn; //当前所选组合名称
      let currentNumColumn = row.numColumn; //当前所选组合人数
      let subGroupData = this.subGroupData; //所有组合
      let groupTotaNum; //修改当前组合的人数总和
      for (let subGroup in subGroupData[0]) {
        if (subGroup == currentComColumn) {
          groupTotaNum = subGroupData[0][subGroup];
        }
      }
      if (row.edit === false) {
        row.numColumn = parseInt(currentNumColumn).toFixed(1);
        if (pro == "firstGroup") {
          groupOneName = this.secondGroup;
          groupTwoName = this.thirtGroup;
          this.ergodicGroup(
            currentComColumn,
            currentNumColumn,
            groupTotaNum,
            groupOneName,
            groupTwoName
          );
        } else if (pro == "secondGroup") {
          groupOneName = this.firstGroup;
          groupTwoName = this.thirtGroup;
          this.ergodicGroup(
            currentComColumn,
            currentNumColumn,
            groupTotaNum,
            groupOneName,
            groupTwoName
          );
        } else {
          groupOneName = this.firstGroup;
          groupTwoName = this.secondGroup;
          this.ergodicGroup(
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
    //分班第一阶段开始
    oneStageBegin() {
      this.showBegin = false;
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
            // form: that.form
          }
        });
      } else {
        alert("请先点击确认修改按钮！");
      }
    }
  },
  created() {
    let that = this;
  },
  mounted() {
    let that = this;
    let params = that.$route.query;
    if (params.form.taskName) {
      let that = this;
      let lists = that.$store.state.taskLists;
      that.formData = lists;
    }
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
  width: 501px;
  margin-top: 10px;
}
.t-table {
  width: 501px;
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
  width: 501px;
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
</style>