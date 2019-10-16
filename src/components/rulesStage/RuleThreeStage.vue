<template>
  <div class="r-main">
    <div>
      <span class="r-title">任务状态</span>
      <span class="status">分班第三阶段:</span>
      <div class="showing">
        <span class="status">{{status}}</span>
        <i class="el-icon-refresh-right status el-making"></i>
      </div>
    </div>
    <el-collapse v-model="activeNames" @change="handleChange">
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
            <el-table-column prop="历" label="历史" align="center" width="100px"></el-table-column>
            <el-table-column prop="物" label="物理" align="center" width="100px"></el-table-column>
            <el-table-column prop="地" label="地理" align="center" width="100px"></el-table-column>
            <el-table-column prop="政" label="政治" align="center" width="100px"></el-table-column>
            <el-table-column prop="生" label="生物" align="center" width="100px"></el-table-column>
            <el-table-column prop="化" label="化学" align="center" width="100px"></el-table-column>
            <el-table-column prop="混合" label="是否历物混合" align="center" width="100px"></el-table-column>
          </el-table>
        </el-collapse-item>
        <el-collapse-item
          v-for="data in item.tableClassData"
          :key="data.index"
          :title="data.title"
          :name="data.name"
          v-model="item.tableClassData"
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
            <el-table-column prop="group" label="第一组" width="80" align="center"></el-table-column>

            <el-table-column prop="hgp" label="历地政" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.hgp!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.hgp}}</span>
                  <i
                    v-if="scope.row.hgp!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="hgb" label="历地生" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.hgb!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.hgb}}</span>
                  <i
                    v-if="scope.row.hgb!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="hgs" label="历地化" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.hgs!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.hgs}}</span>
                  <i
                    v-if="scope.row.hgs!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="hpb" label="历政生" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.hpb!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.hpb}}</span>
                  <i
                    v-if="scope.row.hpb!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="hps" label="历政化" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.hps!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.hps}}</span>
                  <i
                    v-if="scope.row.hps!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="hbs" label="历生化" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.hbs!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.hbs}}</span>
                  <i
                    v-if="scope.row.hbs!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="pgp" label="物地政" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.pgp!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.pgp}}</span>
                  <i
                    v-if="scope.row.pgp!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="pgb" label="物地生" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.pgb!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.pgb}}</span>
                  <i
                    v-if="scope.row.pgb!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="pgs" label="物地化" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.pgs!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.pgs}}</span>
                  <i
                    v-if="scope.row.pgs!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="ppb" label="物政生" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.ppb!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.ppb}}</span>
                  <i
                    v-if="scope.row.ppb!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="pps" label="物政化" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.pps!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.pps}}</span>
                  <i
                    v-if="scope.row.pps!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="pbs" label="物生化" width="80" align="center">
              <template slot-scope="scope">
                <div class="show-last-item">
                  <i v-if="scope.row.pbs!=''" class="el-icon-remove-outline icon"></i>
                  <span class="row-num">{{scope.row.pbs}}</span>
                  <i
                    v-if="scope.row.pbs!=''"
                    class="el-icon-circle-plus-outline icon"
                    @click="addData(scope.row)"
                  ></i>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="totalNum" width="80" align="center" label="班级总人数"></el-table-column>
          </el-table>
        </el-collapse-item>
      </template>
    </el-collapse>
    <el-button type="warning" @click="toRuleFourthStage" class="next-btn" size="small">下一步</el-button>
    
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
          <el-table-column prop="历" label="历史" align="center" width="85px"></el-table-column>
          <el-table-column prop="物" label="物理" align="center" width="85px"></el-table-column>
          <el-table-column prop="地" label="地理" align="center" width="85px"></el-table-column>
          <el-table-column prop="政" label="政治" align="center" width="85px"></el-table-column>
          <el-table-column prop="生" label="生物" align="center" width="85px"></el-table-column>
          <el-table-column prop="化" label="化学" align="center" width="85px"></el-table-column>
          <el-table-column prop="混合" label="是否历物混合" align="center" width="100px"></el-table-column>
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
      tableLastItem: true,
      status: "进行中",
      activeNames: [],
      tableData: [
        {
          threeStageScoreData: [
            {
              group: "0",
              历: "67/2/33.50",
              物: "66/2/33.00",
              地: "86/2/43.00",
              政: "83/2/41.50",
              生: "50/1/50.00",
              化: "47/1/47.00",
              混合: "0"
            },
            {
              group: "0",
              历: "67/2/33.50",
              物: "66/2/33.00",
              地: "86/2/43.00",
              政: "83/2/41.50",
              生: "50/1/50.00",
              化: "47/1/47.00",
              混合: "0"
            },
            {
              group: "0",
              历: "67/2/33.50",
              物: "66/2/33.00",
              地: "86/2/43.00",
              政: "83/2/41.50",
              生: "50/1/50.00",
              化: "47/1/47.00",
              混合: "0"
            },
            {
              group: "总计",
              历: "5.0",
              物: "11.0",
              地: "8.0",
              政: "6.0",
              生: "9.0",
              化: "7.0",
              混合: "/"
            },
            {
              group: "差值",
              历: "0.0",
              物: "-1.0",
              地: "0.0",
              政: "0.0",
              生: "0.0",
              化: "0.0",
              混合: "/"
            }
          ],
          tableClassData: [
            {
              title: "行政班一",
              name: "2",
              Group: [
                {
                  group: "0-1",
                  hgp: "",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "",
                  hbs: "",
                  pgp: "",
                  pgb: "",
                  pgs: "",
                  ppb: "",
                  pps: "",
                  pbs: "50.0",
                  totalNum: "50.0"
                },
                {
                  group: "0-1",
                  hgp: "",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "",
                  hbs: "",
                  pgp: "",
                  pgb: "50.0",
                  pgs: "",
                  ppb: "",
                  pps: "",
                  pbs: "",
                  totalNum: "50.0"
                },
                {
                  group: "0-1",
                  hgp: "33",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "9.0",
                  hbs: "5",
                  pgp: "",
                  pgb: "",
                  pgs: "",
                  ppb: "",
                  pps: "",
                  pbs: "",
                  totalNum: "47.0"
                },
                {
                  group: "0-1",
                  hgp: "",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "",
                  hbs: "",
                  pgp: "",
                  pgb: "",
                  pgs: "",
                  ppb: "",
                  pps: "",
                  pbs: "41",
                  totalNum: "50.0"
                },
                {
                  group: "0-1",
                  hgp: "",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "",
                  hbs: "",
                  pgp: "1",
                  pgb: "8.0",
                  pgs: "",
                  ppb: "",
                  pps: "42.0",
                  pbs: "",
                  totalNum: "50.0"
                },
                {
                  group: "总计",
                  hgp: "33",
                  hgb: "0",
                  hgs: "0",
                  hpb: "0",
                  hps: "9.0",
                  hbs: "5",
                  pgp: "1",
                  pgb: "66.0",
                  pgs: "0",
                  ppb: "0",
                  pps: "42.0",
                  pbs: "91.0",
                  totalNum: "247.0"
                }
              ]
            },
            {
              title: "行政班二",
              name: "3",
              Group: [
                {
                  group: "0-1",
                  hgp: "",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "",
                  hbs: "",
                  pgp: "",
                  pgb: "",
                  pgs: "",
                  ppb: "",
                  pps: "",
                  pbs: "50.0",
                  totalNum: "50.0"
                },
                {
                  group: "0-1",
                  hgp: "",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "",
                  hbs: "",
                  pgp: "",
                  pgb: "50.0",
                  pgs: "",
                  ppb: "",
                  pps: "",
                  pbs: "",
                  totalNum: "50.0"
                },
                {
                  group: "0-1",
                  hgp: "33",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "9.0",
                  hbs: "5",
                  pgp: "",
                  pgb: "",
                  pgs: "",
                  ppb: "",
                  pps: "",
                  pbs: "",
                  totalNum: "47.0"
                },
                {
                  group: "0-1",
                  hgp: "",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "",
                  hbs: "",
                  pgp: "",
                  pgb: "",
                  pgs: "",
                  ppb: "",
                  pps: "",
                  pbs: "41",
                  totalNum: "50.0"
                },
                {
                  group: "0-1",
                  hgp: "",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "",
                  hbs: "",
                  pgp: "1",
                  pgb: "8.0",
                  pgs: "",
                  ppb: "",
                  pps: "42.0",
                  pbs: "",
                  totalNum: "50.0"
                },
                {
                  group: "总计",
                  hgp: "33",
                  hgb: "0",
                  hgs: "0",
                  hpb: "0",
                  hps: "9.0",
                  hbs: "5",
                  pgp: "1",
                  pgb: "66.0",
                  pgs: "0",
                  ppb: "0",
                  pps: "42.0",
                  pbs: "91.0",
                  totalNum: "247.0"
                }
              ]
            },
            {
              title: "行政班三",
              name: "4",
              Group: [
                {
                  group: "0-1",
                  hgp: "",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "",
                  hbs: "",
                  pgp: "",
                  pgb: "",
                  pgs: "",
                  ppb: "",
                  pps: "",
                  pbs: "50.0",
                  totalNum: "50.0"
                },
                {
                  group: "0-1",
                  hgp: "",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "",
                  hbs: "",
                  pgp: "",
                  pgb: "50.0",
                  pgs: "",
                  ppb: "",
                  pps: "",
                  pbs: "",
                  totalNum: "50.0"
                },
                {
                  group: "0-1",
                  hgp: "33",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "9.0",
                  hbs: "5",
                  pgp: "",
                  pgb: "",
                  pgs: "",
                  ppb: "",
                  pps: "",
                  pbs: "",
                  totalNum: "47.0"
                },
                {
                  group: "0-1",
                  hgp: "",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "",
                  hbs: "",
                  pgp: "",
                  pgb: "",
                  pgs: "",
                  ppb: "",
                  pps: "",
                  pbs: "41",
                  totalNum: "50.0"
                },
                {
                  group: "0-1",
                  hgp: "",
                  hgb: "",
                  hgs: "",
                  hpb: "",
                  hps: "",
                  hbs: "",
                  pgp: "1",
                  pgb: "8.0",
                  pgs: "",
                  ppb: "",
                  pps: "42.0",
                  pbs: "",
                  totalNum: "50.0"
                },
                {
                  group: "总计",
                  hgp: "33",
                  hgb: "0",
                  hgs: "0",
                  hpb: "0",
                  hps: "9.0",
                  hbs: "5",
                  pgp: "1",
                  pgb: "66.0",
                  pgs: "0",
                  ppb: "0",
                  pps: "42.0",
                  pbs: "91.0",
                  totalNum: "247.0"
                }
              ]
            }
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
      console.log(index)
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
      aa = document.getElementsByClassName('el-collapse-item__header is-active')[index-1];
      //   console.log(aa);
      aa.setAttribute("style", "color:#99a9bf");
      // }
    },
    //是否展示加减号
    showTableLastItem(isShow) {
      let tbody = document.getElementsByTagName("tbody");
      this.$nextTick(() => {
        if (isShow == "noShow") {
          //全都不显示加减
          let itemIcon = document.getElementsByClassName("icon");
          for (let k = 0; k < itemIcon.length; k++) {
            itemIcon[k].setAttribute("style", "visibility:hidden");
          }
        } else {
          //最后一行不显示加减
          for (let j = 0; j < tbody.length; j++) {
            let tr = tbody[j].getElementsByClassName("el-table__row")[5];
            let td = tr.getElementsByTagName("td");
            for (let i = 1; i < 13; i++) {
              td[i]
                .getElementsByTagName("i")[0]
                .setAttribute("style", "display:none");
              td[i]
                .getElementsByTagName("i")[1]
                .setAttribute("style", "display:none");
            }
          }
        }
      });
    },
    //确认/修改
    getModify() {
      let itemIcon = document.getElementsByClassName("icon");
      if (this.isModify == "修改") {
        this.isModify = "确定";
        for (let k = 0; k < itemIcon.length; k++) {
          itemIcon[k].setAttribute("style", "visibility:normal");
        }
        this.showTableLastItem("show");
      } else {
        this.isModify = "修改";
        for (let k = 0; k < itemIcon.length; k++) {
          itemIcon[k].setAttribute("style", "visibility:hidden");
        }
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
    //跳转到第四个阶段
    toRuleFourthStage() {
      let that = this;
      if (that.isModify == "修改") {
        that.$router.push({
          path: "@/components/rulesStage/RuleFourthStage", //跳转路径
          name: "ruleFourthStage", //跳转路径的name值，不写跳转后页面取不到参数
          // 参数
          query: {
            // form: that.form
          }
        });
      } else {
        alert("请先点击折叠面板确认按钮！");
      }
    }
  },
  created() {},
  mounted() {
    this.showTableLastItem("noShow");
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
  margin: 40px 500px;
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
</style>