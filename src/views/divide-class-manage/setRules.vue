<template>
  <div class="s-main">
    <el-page-header @back="goBack" content="设置分班规则" class="back-head"></el-page-header>
    <div class="s-form">
      <el-form ref="form" :model="form" label-width="180px" class="form" label-position="right">
        <el-form-item label="任务名称" v-show="isShowName">
          <span class="task-name">{{form.taskName}}</span>
        </el-form-item>
        <el-form-item label="年级">
          <el-radio-group v-model="form.grade">
            <el-radio label="高一"></el-radio>
            <el-radio label="高二"></el-radio>
            <el-radio label="高三"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="班类">
          <el-radio-group v-model="form.classCategory">
            <el-radio label="行政班"></el-radio>
            <el-radio label="教学班"></el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="学生选科组合人数">
          <el-table
            v-model="form.sectionStudentNumber"
            :data="form.sectionStudentNumber"
            :key="form.index"
            border
            size="mini"
            class="st-table"
            id="st-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          >
            <el-table-column prop="1" label="科目" align="center" width="60px"></el-table-column>
            <el-table-column prop="50" label="历地政" align="center" width="60px"></el-table-column>
            <el-table-column prop="26" label="历地生" align="center" width="60px"></el-table-column>
            <el-table-column prop="22" label="历地化" align="center" width="60px"></el-table-column>
            <el-table-column prop="42" label="历政生" align="center" width="60px"></el-table-column>
            <el-table-column prop="38" label="历政化" align="center" width="60px"></el-table-column>
            <el-table-column prop="14" label="历生化" align="center" width="60px"></el-table-column>
            <el-table-column prop="49" label="物地政" align="center" width="60px"></el-table-column>
            <el-table-column prop="25" label="物地生" align="center" width="60px"></el-table-column>
            <el-table-column prop="21" label="物地化" align="center" width="60px"></el-table-column>
            <el-table-column prop="41" label="物政生" align="center" width="60px"></el-table-column>
            <el-table-column prop="37" label="物政化" align="center" width="60px"></el-table-column>
            <el-table-column prop="13" label="物生化" align="center" width="60px"></el-table-column>
            <el-table-column prop="sum" label="总计" align="center" width="60px"></el-table-column>
          </el-table>
        </el-form-item>

        <el-form-item label="老师科目人数">
          <el-table
            v-model="form.subjectTeacherNumber"
            :data="form.subjectTeacherNumber"
            border
            size="mini"
            class="t-table"
            id="st-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          >
            <el-table-column prop="subject" label="科目" align="center" width="80px"></el-table-column>
            <!--<el-table-column prop="Chinese" label="语文" align="center" width="80px"></el-table-column>
            <el-table-column prop="Math" label="数学" align="center" width="80px"></el-table-column>
            <el-table-column prop="English" label="英语" align="center" width="80px"></el-table-column>-->
            <el-table-column prop="Physics" label="物理" align="center" width="80px"></el-table-column>
            <el-table-column prop="Chemistry" label="化学" align="center" width="80px"></el-table-column>
            <el-table-column prop="Biology" label="生物" align="center" width="80px"></el-table-column>
            <el-table-column prop="Geography" label="地理" align="center" width="80px"></el-table-column>
            <el-table-column prop="History" label="历史" align="center" width="80px"></el-table-column>
            <el-table-column prop="Politics" label="政治" align="center" width="80px"></el-table-column>
            <el-table-column prop="sum" label="总计" align="center" width="80px"></el-table-column>
          </el-table>
        </el-form-item>
        <el-form-item
          label="班级最少人数"
          prop="miniNums"
          :rules="[
                    { required: true, message: '该空不能为空'},
                    { type: 'number', message: '该空必须为数字值'}
                    ]"
        >
          <el-input
            type="text"
            v-model.number="form.miniNums"
            autocomplete="off"
            maxlength="3"
            placeholder="请输入数字"
            style="width:200px"
            class="input"
            :disabled="edit"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="班级最多人数"
          prop="maxNums"
          :rules="[
                    { required: true, message: '该空不能为空'},
                    { type: 'number', message: '该空必须为数字值'}
                    ]"
        >
          <el-input
            type="text"
            v-model.number="form.maxNums"
            autocomplete="off"
            maxlength="3"
            style="width:200px"
            placeholder="请输入数字"
            class="input"
            :disabled="edit"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="任务运行时间"
          prop="runingTime"
          :rules="[
                    { required: true, message: '该空不能为空'},
                    { type: 'number', message: '该空必须为数字值'}
                    ]"
        >
          <el-input
            type="text"
            v-model.number="form.runingTime"
            autocomplete="off"
            maxlength="2"
            style="width:200px"
            placeholder="请输入数字"
            class="input"
            :disabled="edit"
          ></el-input>
        </el-form-item>
        <!--<el-form-item label="课程时间设置">
          <el-table
            class="time-table"
            :data="form.timeTable"
            v-model="form.timeTable"
            style="width: 781px"
            size="mini"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          >
            <el-table-column prop="section" label width="180" align="center"></el-table-column>
            <el-table-column prop="time" label="课程时间" width="480" align="center">
              <template slot-scope="scope">
                <el-time-select
                  :rules="[
                    { required: true, message: '该空不能为空'},
                    { type: 'number', message: '该空必须为数字值'}
                    ]"
                  placeholder="起始时间"
                  v-model="scope.row.time.startTime"
                  :picker-options="{
      start: '06:00',
      step: '00:05',
      end: '22:30'
    }"
                ></el-time-select>
                <el-time-select
                  placeholder="结束时间"
                  v-model="scope.row.time.endTime"
                  :picker-options="{
      start: '06:00',
      step: '00:05',
      end: '22:30',
      minTime: scope.row.time.startTime
    }"
                ></el-time-select>
              </template>
            </el-table-column>
            <el-table-column label="操作" width="120">
              <template slot-scope="scope">
                <el-button
                  @click.native.prevent="deleteRow(scope.$index, form.timeTable)"
                  type="text"
                  size="small"
                >移除</el-button>
              </template>
            </el-table-column>
          </el-table>
          <span class="add-time-row" @click="addTimeRow" v-show="addShow">+</span>
        </el-form-item>-->
        <el-form-item>
          <el-button class="save">保存</el-button>
          <el-button type="primary" @click="submitForm('form',form)" class="sub">开始分班</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
export default {
  components: {},
  props: {},
  data() {
    return {
      edit: false,
      addShow: true,
      taskId: "",
      form: {
        taskName: "",
        grade: "高一",
        classCategory: "行政班",
        subjectTeacherNumber: [
          {
            subject: "人数",
            // Chinese: "173",
            // Math: "260",
            // English: "55",
            Physics: "52",
            Chemistry: "30",
            Biology: "50",
            Geography: "00",
            History: "10",
            Politics: "20",
            sum: ""
          }
        ],
        sectionStudentNumber: [],
        miniNums: "",
        maxNums: "",
        runingTime: ""
        // timeTable: [
        //   {
        //     section: "第1节课",
        //     time: { startTime: "07:00", endTime: "07:40" }
        //   }
        // ]
      },
      isNameExit: false,
      isShowName: true
    };
  },
  watch: {},
  computed: {
    taskLists() {
      return this.$store.state.taskLists;
    }
  },
  methods: {
    //求和

    getSum(obj) {
      var arr = [];
      for (let i in obj) {
        arr.push(parseInt(obj[i]));
      }
      arr.pop(arr.length - 1);
      arr.shift(1);
      let sum = arr.reduce(function(prev, cur) {
        return prev + cur;
      }, 0);
      obj.sum = sum;
      let tbody = $("tbody");
      //移除timeTable的删除操作
      let timeTr = tbody.eq(2).find("tr");
      for (let j = 0; j < timeTr.length - 1; j++) {
        $("tbody:eq(2) tr:eq(" + j + ") .cell:eq(2)").css(
          "visibility",
          "hidden"
        );
      }
    },
    //返回上一页
    goBack() {
      this.$router.go(-1);
    },
    //删除timeTable的某行
    deleteRow(index, rows) {
      rows.splice(index, 1);
      let trLength = $(".time-table").find("tr").length - 2;
      $(".time-table tr:eq(" + trLength + ") .cell:eq(2)").css(
        "visibility",
        "visible"
      );
    },
    //timeTable每行增加时间
    addTime(time, num) {
      let temp = time.split(":");
      let hour = parseInt(temp[0]);
      let minute = parseInt(temp[1]) + num;
      if (minute >= 60) {
        let remainNum = minute - 60;
        minute = remainNum;
        if (remainNum < 60) {
          hour += 1;
        }
      }
      if (hour.toString().length == 1) {
        hour = "0" + hour;
      }
      if (minute.toString().length == 1) {
        minute = "0" + minute;
      }
      if (hour >= 22 && minute >= 30) {
        return time;
      } else {
        let newTime = [hour, minute].join(":");
        return newTime;
      }
    },
    //增加timeTable的行数
    addTimeRow() {
      let rows = $(".time-table").find("tr").length - 1;
      let lastEndTime = this.form.timeTable[rows - 1].time.endTime;
      let newStartTime = this.addTime(lastEndTime, 55);
      let newEndTime = this.addTime(newStartTime, 45);
      if (newStartTime == lastEndTime) {
        alert("已超过最大时间，不能继续添加");
        this.addShow = false;
      } else {
        let rowCurrent = rows + 1;
        let rowData = {
          section: "第" + rowCurrent + "节课",
          time: { startTime: newStartTime, endTime: newEndTime }
        };
        this.form.timeTable.push(rowData);
      }
    },
    //提交表单
    submitForm(formName, formData) {
      // let taskLists = this.$store.state.taskLists;
      let that = this;
      // var newLists = taskLists.filter(function(i) {
      //   return i.taskName == formData.taskName;
      // });
      // if (newLists.length == 0) {
      //   that.$store.commit("SET_List", formData); //缓存表单
      // } else {
      //   that.$store.commit("UPDATE_List", formData);
      // }
      if (that.isNameExit == false) {
        console.log("访问");
        let form = JSON.parse(JSON.stringify(formData));
        let studentDataForm = form.sectionStudentNumber[0];
        let teachDataForm = form.subjectTeacherNumber[0];
        let newStudentData = [];
        let newTeachData = [];

        for (let i in studentDataForm) {
          newStudentData.push(studentDataForm[i]);
        }
        for (let j in teachDataForm) {
          newTeachData.push(teachDataForm[j]);
        }
        newStudentData.pop(1);
        newStudentData.shift(1);
        newTeachData.pop(1);
        newTeachData.shift(1);

        let arrTemp = [];
        arrTemp[0] = newStudentData[0];
        arrTemp[1] = newStudentData[2];
        arrTemp[2] = newStudentData[6];
        arrTemp[3] = newStudentData[4];
        arrTemp[4] = newStudentData[8];
        arrTemp[5] = newStudentData[10];
        arrTemp[6] = newStudentData[1];
        arrTemp[7] = newStudentData[3];
        arrTemp[8] = newStudentData[7];
        arrTemp[9] = newStudentData[5];
        arrTemp[10] = newStudentData[9];
        arrTemp[11] = newStudentData[11];
        form.sectionStudentNumber = arrTemp;
        form.subjectTeacherNumber = newTeachData;
        console.log(arrTemp);
        let maxAndMinClassStudentNumber = [];

        maxAndMinClassStudentNumber.push(form.maxNums);
        maxAndMinClassStudentNumber.push(form.miniNums);
        delete form.miniNums;
        delete form.maxNums;
        delete form.classCategory;
        form["maxAndMinClassStudentNumber"] = maxAndMinClassStudentNumber;
        form["runingTime"] = form["runingTime"].toString();
        // let newForm = JSON.stringify(form);
        console.log(typeof form["runingTime"]);
        //创建排班任务
        that.$refs[formName].validate(valid => {
          if (valid) {
            that
              .$axios({
                url: this.$root.URL + "/createtask",
                method: "post",
                headers: {
                  "Content-Type": "application/json;charset=utf-8"
                },
                data: JSON.stringify(form),
                crossDomain: true
              })

              .then(function(res) {
                if (res.status === 200) {
                  // console.log(res);
                  // that.$store.commit("SET_TOKEN", response.data.token);
                  // that.$store.commit("GET_USER", response.data.user);
                  // this.$router.push({ name: "/helloWorld" });
                  //跳转
                  // console.log(JSON.stringify(form));
                  if (res.data.message == "ok") {
                    that.taskId = res.data.taskId;
                    // console.log(res.data)
                  }
                  console.log(that.form.sectionStudentNumber);
                  that.$router.push({
                    path: "@/components/rulesStage/RuleOneStage", //跳转路径
                    name: "ruleOneStage", //跳转路径的name值，不写跳转后页面取不到参数
                    // 参数
                    query: {
                      form: that.form,
                      taskId: that.taskId
                    }
                  });
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
          } else {
            console.log("error submit!!");
            return false;
          }
        });
      } else {
        that.$router.push({
          path: "@/components/rulesStage/RuleOneStage", //跳转路径
          name: "ruleOneStage", //跳转路径的name值，不写跳转后页面取不到参数
          // 参数
          query: {
            form: that.form,
            taskId: that.form.taskName
          }
        });
      }
    },
    getTaskRule(taskId) {
      let that = this;
      if (taskId != undefined) {
        that
          .$axios({
            url: this.$root.URL + "/rule?taskId=" + taskId,
            method: "get",
            crossDomain: true
          })

          .then(function(res) {
            if (res.status === 200) {
              if (res.data.statusCode == 0) {
                that.edit = true;
                that.isNameExit = true;
                that.form.miniNums =
                  res.data.rule.maxAndMinClassStudentNumber[0];
                that.form.maxNums =
                  res.data.rule.maxAndMinClassStudentNumber[1];
                that.form.runingTime = res.data.rule.runing_time;
              } else {
                that.isNameExit = false;
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
  },
  created() {
    // console.log(this.taskId);

    let that = this;
    that
      .$axios({
        url: this.$root.URL + "/data?object=student",
        method: "get",
        crossDomain: true
      })
      .then(function(res) {
        if (res.status === 200) {
          that.form.sectionStudentNumber.push(res.data);
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

    // console.log(JSON.stringify(this.form.studentData))
  },
  mounted() {
    var that = this;

    //计算总和
    // console.log(that.form.studentData[0]);
    // let studentData = that.form.studentData[0];
    // let teachData = that.form.teachData[0];
    // console.log(studentData)
    // that.getSum(studentData);
    // that.getSum(teachData);

    // let taskList = that.$store.state.taskLists;
    //若存在数据则先加载
    // let currentList = taskList.filter(function(i) {
    //   return i.taskName == params.taskName;
    // });
    // if (currentList.length == 0) {
    //   // that.form = {}
    // } else {
    //   that.form = currentList[0];
    // }
    if (that.$route.query["taskName"] == undefined) {
      that.isShowName = false;
    } else {
      that.isShowName = true;
      let params = that.$route.query;

      that.form.taskName = params.taskName;
      that.getTaskRule(that.form.taskName);
    }
    if (that.$route.params.taskId != undefined) {
      that.edit = true;
      let paramsData = that.$route.params;
      that.form.miniNums = paramsData.formData[0].miniNums;
      that.form.maxNums = paramsData.formData[0].maxNums;
      that.form.runingTime = paramsData.formData[0].runingTime;
    }else{
      that.edit = false;
    }
    //获取前页面传递的taskname

    // if (that.form.taskName != undefined || that.form.taskName != "") {
    //   //若存在该任务，填上数据
    //   that.getTaskRule(that.form.taskName);
    // }

    // let backTaskId = that.$route.params.taskId; //历史back回去的id
    // console.log(backTaskId)
    // if(backTaskId != undefined || backTaskId !="" || that.form.taskName != undefined || that.form.taskName !=""){
    //   that.getTaskRule(backTaskId);
    // }

    //获取当前状态
  },
  updated() {
    // this.getSum(); //求和
  }
};
</script>
<style scoped>
.s-main {
  position: relative;
  margin-top: 30px;
  margin-right: 0;
  margin-left: 20px;
  height: 1200px;
}
.back-head {
  margin-bottom: 10px;
  color: #a8a6a6;
  margin-top: 30px;
}
.s-form {
  margin: 0 auto;
}
.form {
  position: absolute;
  left: 50%;
  top: 80px;
  transform: translate(-50%, 0);
}
.save {
  margin-top: 50px;
}
.sub {
  margin-top: 50px;
  margin-left: 30px;
}
.task-name {
  font-size: 14px;
  color: #409eff;
}
.t-table {
  width: 641px;
}
.st-table {
  width: 841px;
}
.time-table {
  position: relative;
}
.add-time-row {
  position: absolute;
  display: block;
  line-height: 20px;
  text-align: center;
  width: 40px;
  height: 20px;
  border-radius: 0 0 40px 40px;
  border: 1px solid rgb(220, 223, 230);
  left: 400px;
  color: #409eff;
  cursor: pointer;
}
.td-dispaly {
  display: none;
}
</style>