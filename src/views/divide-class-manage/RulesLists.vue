<template>
  <div class="r-main">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>任务列表</span>
      </div>
      <el-collapse
        v-model="activeNames"
        @change="handleChange"
        v-show="isShow"
        v-for="item in formData"
        :key="item.index"
      >
        
          <el-collapse-item :title="item.taskName" :name="item.name">
            <el-form label-position="left" class="demo-table-expand">
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
              <!--<el-form-item label="课程时间设置">
                <el-table
                  v-show="item.timeTable"
                  v-model="item.timeTable"
                  :data="item.timeTable"
                  size="mini"
                  class="time-table"
                  :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                >
                  <el-table-column prop="section" label="节次" align="center" width="100px"></el-table-column>
                  <el-table-column prop="time.startTime" label align="center" width="70px"></el-table-column>
                  <el-table-column prop label="课程时间" align="center" width="80px">~~</el-table-column>
                  <el-table-column prop="time.endTime" label align="center" width="70px"></el-table-column>
                </el-table>
              </el-form-item>-->
              <el-form-item label="任务状态">
                <span class="status">分班第一阶段:</span>
                <el-button
                  type="primary"
                  round
                  size="mini"
                  @click="oneStageBegin"
                  v-show="showBegin"
                >开始</el-button>
                <div v-show="!showBegin" class="showing">
                  <span class="status">{{status}}</span>
                  <i class="el-icon-refresh-right status"></i>
                </div>
              </el-form-item>
              <el-form-item label>
                <div class="step-left">
                  <el-steps direction="vertical" :active="active">
                    <el-step title="科目组合及人数(可修改)"></el-step>
                    <el-step title="物理历史分班"></el-step>
                    <el-step title="步骤 3" description="这是一段很长很长很长的描述性文字"></el-step>
                  </el-steps>
                </div>
                <div class="step-right">
                  <div>
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

                    <el-table
                      :data="firstGroup"
                      v-model="firstGroup"
                      border
                      stripe
                      class="group-table"
                      size="mini"
                    >
                      <el-table-column label="第一组" align="center">
                        <el-table-column prop="comColumn" label="科目组合" width="80" align="center"></el-table-column>
                        <el-table-column prop="numColumn" label="人数" width="80" align="center">
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
                        <el-table-column label="操作" width="80" align="center" prop="firstGroup">
                          <template slot-scope="scope">
                            <div v-if="!showOneResult">
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
                            <div v-if="showOneResult">
                              <i class="el-icon-check"></i>
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
                        <el-table-column prop="comColumn" label="科目组合" width="80" align="center"></el-table-column>
                        <el-table-column prop="numColumn" label="人数" width="80" align="center">
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
                        <el-table-column label="操作" width="80" align="center" prop="secondGroup">
                          <template slot-scope="scope">
                            <div v-if="!showOneResult">
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
                            <div v-if="showOneResult">
                              <i class="el-icon-check"></i>
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
                        <el-table-column prop="comColumn" label="科目组合" width="80" align="center"></el-table-column>
                        <el-table-column prop="numColumn" label="人数" width="80" align="center">
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
                        <el-table-column label="操作" width="80" align="center" prop="thirtGroup">
                          <template slot-scope="scope">
                            <div v-if="!showOneResult">
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
                            <div v-if="showOneResult">
                              <i class="el-icon-check"></i>
                            </div>
                          </template>
                        </el-table-column>
                      </el-table-column>
                    </el-table>
                    <div class="first-word">
                      第一阶段不同科目组合人数已完成，若需修改
                      <span>请手动调整</span>,若不需修改或修改好请点击
                      <span @click="getOnePartResult">生成班级结果</span>继续下一步操作
                    </div>
                    <div class="result-sty" v-if="showOneResult">第一阶段生成结果如下:</div>
                    <el-table
                      v-if="showOneResult"
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
                    <el-button
                      class="next-btn"
                      type="primary"
                      round
                      size="mini"
                      @click="nextTwoPart"
                      v-if="showOneResult"
                    >继续下一步</el-button>
                  </div>

                  <div>
                    <el-table
                      v-show="isTwoPartData"
                      v-model="twoPartData"
                      :data="twoPartData"
                      border
                      size="mini"
                      class="two-part-table"
                      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                    >
                      <el-table-column label="第一组" align="center">
                        <el-table-column
                          prop="firstGroup.group"
                          label="组合(历 / 物)"
                          align="center"
                          width="100px"
                        ></el-table-column>
                        <el-table-column
                          prop="firstGroup.rate"
                          label="比例"
                          align="center"
                          width="100px"
                        ></el-table-column>
                      </el-table-column>
                      <el-table-column label="第二组" align="center">
                        <el-table-column
                          prop="secondGroup.group"
                          label="组合(历 / 物)"
                          align="center"
                          width="100px"
                        ></el-table-column>
                        <el-table-column
                          prop="secondGroup.rate"
                          label="比例"
                          align="center"
                          width="100px"
                        ></el-table-column>
                      </el-table-column>
                      <el-table-column label="第三组" align="center">
                        <el-table-column
                          prop="thirdGroup.group"
                          label="组合(历 / 物)"
                          align="center"
                          width="100px"
                        ></el-table-column>
                        <el-table-column
                          prop="thirdGroup.rate"
                          label="比例"
                          align="center"
                          width="100px"
                        ></el-table-column>
                      </el-table-column>
                    </el-table>
                    <div class="result-sty" v-show="isTwoPartData">第二阶段生成结果如下:</div>
                    <el-table
                      v-show="isTwoPartData"
                      v-model="twoResutltData"
                      :data="twoResutltData"
                      border
                      size="mini"
                      class="two-result-table"
                      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
                    >
                      <el-table-column prop="group" label="分组" align="center" width="100px"></el-table-column>
                      <el-table-column prop="History" label="历史" align="center" width="100px"></el-table-column>
                      <el-table-column prop="Physics" label="物理" align="center" width="100px"></el-table-column>
                    </el-table>
                  </div>
                </div>
              </el-form-item>
            </el-form>
          </el-collapse-item>
      </el-collapse>
      <div v-show="!isShow" class="no-data">没有设置任务</div>

    </el-card>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  components: {},
  props: {},
  data() {
    return {
      active: 1,
      isTwoPartData: false,
      showOneResult: false,
      showBegin: true,
      status: "进行中",
      isShow: false,
      formData: [],
      activeNames: ['1'],
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
      twoResutltData: [
        //第二阶段结果数据
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
    //生成分班第一阶段结果
    getOnePartResult() {
      if (this.showOneResult == false) {
        console.log(this.edit);
        this.showOneResult = !this.showOneResult;
      } else {
        alert("已生成");
      }
    },
    //第二阶段开始
    nextTwoPart() {
      if (this.isTwoPartData == false) {
        this.isTwoPartData = !this.isTwoPartData;
        this.active = 2;
      }
    }
  },
  created() {
    let that = this;
  },
  mounted() {
    let that = this;
    let params = that.$route.query; 
    if(params.form.taskName){
      let that = this;
      let lists = that.$store.state.taskLists;
      that.formData = lists;
      for (let i in that.formData) {
        that.formData[i]['name']=(parseInt(i)+1).toString() //给list增加当前折叠面板name
      }
      that.isShow = true;
      for(let i=0;i<lists.length;i++){
        if(params.form.taskName == lists[i].taskName){
          that.activeNames = lists[i].name;
        }
      }
      
    }
    
  }
};
</script>
<style scoped>
.r-main {
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
  background: #ebeef5;
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
  margin-right: 10px;
}
.no-data {
  width: 100%;
  height: 50px;
  line-height: 50px;
  background: #fff;
  text-align: center;
}
.time-table {
  width: 340px;
}
.showing {
  display: inline;
}
.one-stage-table {
  width: 721px;
}
.step-right {
  width: 80%;
  float: right;
}
.step-left {
  width: 20%;
  height: 1550px;
  float: left;
  margin-top: 20px;
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
.el-icon-edit-outline {
  font-size: 16px;
  color: #409eff;
  cursor: pointer;
}
.edit-hidden {
  display: none;
}
.group-table {
  width: 241px;
  display: inline-block;
  margin-top: 20px;
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
}
.two-part-table {
  width: 601px;
  margin-top: 60px;
  margin-bottom: 10px;
}
.two-result-table {
  width: 301px;
  margin-top: 10px;
}
.next-btn {
  margin-left: 510px;
}
</style>