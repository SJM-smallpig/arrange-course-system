<template>
  <div class="s-main">
    <el-page-header @back="goBack" content="设置分班规则" class="back-head"></el-page-header>
    <div class="s-form">
      <el-form ref="form" :model="form" label-width="180px" class="form" label-position="right">
        <el-form-item label="任务名称">
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
        <el-form-item label="学生选科人数">
          <el-table
            v-model="form.studentData"
            :data="form.studentData"
            border
            size="mini"
            class="st-table"
            id="st-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          >
            <el-table-column prop="subject" label="科目" align="center" width="80px"></el-table-column>
            <el-table-column prop="Chinese" label="语文" align="center" width="80px"></el-table-column>
            <el-table-column prop="Math" label="数学" align="center" width="80px"></el-table-column>
            <el-table-column prop="English" label="英语" align="center" width="80px"></el-table-column>
            <el-table-column prop="Physics" label="物理" align="center" width="80px"></el-table-column>
            <el-table-column prop="Chemistry" label="化学" align="center" width="80px"></el-table-column>
            <el-table-column prop="Biology" label="生物" align="center" width="80px"></el-table-column>
            <el-table-column prop="Geography" label="地理" align="center" width="80px"></el-table-column>
            <el-table-column prop="History" label="历史" align="center" width="80px"></el-table-column>
            <el-table-column prop="sum" label="总计" align="center" width="80px"></el-table-column>
          </el-table>
        </el-form-item>

        <el-form-item label="老师科目人数">
          <el-table
            v-model="form.teachData"
            :data="form.teachData"
            border
            size="mini"
            class="st-table"
            id="st-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
          >
            <el-table-column prop="subject" label="科目" align="center" width="80px"></el-table-column>
            <el-table-column prop="Chinese" label="语文" align="center" width="80px"></el-table-column>
            <el-table-column prop="Math" label="数学" align="center" width="80px"></el-table-column>
            <el-table-column prop="English" label="英语" align="center" width="80px"></el-table-column>
            <el-table-column prop="Physics" label="物理" align="center" width="80px"></el-table-column>
            <el-table-column prop="Chemistry" label="化学" align="center" width="80px"></el-table-column>
            <el-table-column prop="Biology" label="生物" align="center" width="80px"></el-table-column>
            <el-table-column prop="Geography" label="地理" align="center" width="80px"></el-table-column>
            <el-table-column prop="History" label="历史" align="center" width="80px"></el-table-column>
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
      addShow: true,
      form: {
        taskName: "",
        grade: "高一",
        classCategory: "行政班",
        teachData: [
          {
            subject: "人数",
            Chinese: "173",
            Math: "500",
            English: "55",
            Physics: "752",
            Chemistry: "130",
            Biology: "50",
            Geography: "200",
            History: "150",
            sum: ""
          }
        ],
        studentData: [
          {
            subject: "人数",
            Chinese: "173",
            Math: "260",
            English: "55",
            Physics: "52",
            Chemistry: "30",
            Biology: "50",
            Geography: "00",
            History: "10",
            sum: ""
          }
        ],
        miniNums: "",
        maxNums: "",
        timeTable: [
          {
            section: "第1节课",
            time: { startTime: "07:00", endTime: "07:40" }
          }
        ]
      }
    };
  },
  watch: {},
  computed: {
    taskLists () {
      return this.$store.state.taskLists
    }
  },
  methods: {
    //求和
    getSum(obj) {
      var arr = [];
      for (let i in obj) {
        arr.push(parseInt(obj[i]));
      }
      arr.pop(arr.length-1);
      arr.shift(1);
      let sum = arr.reduce(function(prev, cur) {
        return prev + cur
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
      let taskLists = this.$store.state.taskLists;
      let that = this;
      var newLists = taskLists.filter(function(i){
        return i.taskName == formData.taskName
      })
      if(newLists.length == 0){
        that.$store.commit('SET_List',formData);
      }else{
        that.$store.commit('UPDATE_List',formData);
      }
      
      // console.log(formData);
      
      that.$refs[formName].validate(valid => {
        if (valid) {
          that.$router.push({
            path: "@/components/rulesStage/RuleOneStage", //跳转路径
            name: "ruleOneStage", //跳转路径的name值，不写跳转后页面取不到参数
            // 参数
            query: {
              form: that.form
            }
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created() {
    // console.log(this.$store.state.taskLists)
  },
  mounted() {
    var that = this;
    let params = that.$route.query;
    
    //获取当前任务名
    let studentData = that.form.studentData[0];
    let teachData = that.form.teachData[0];
    // console.log(studentData)
    that.getSum(studentData);
    that.getSum(teachData);
    let taskList = that.$store.state.taskLists;
    //若存在数据则先加载
    let currentList = taskList.filter(function(i){
      return i.taskName == params.taskName
    })
    if(currentList.length==0){
      // that.form = {} 
    }else{
      that.form = currentList[0];
    }
    that.form.taskName = params.taskName; 
   
  },
  updated() {
    // this.getSum(); //求和
  }
};
</script>
<style scoped>
.s-main {
  position: relative;
  margin-right: 0;
  margin-left: 0;
  height: 1200px;
}
.back-head {
  margin-bottom: 10px;
  color: #a8a6a6;
  margin-top: 30px;
  margin-left: 30px;
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
.st-table {
  width: 801px;
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