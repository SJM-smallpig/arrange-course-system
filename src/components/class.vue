<template>
  <div class="divide">
    <el-page-header @back="goBack" :content="className" class="back-head"></el-page-header>
    <div class="t-table">
    <el-table
      :data="classData"
      border
      :header-cell-style="{background:'#eef1f6',color:'#606266'}"
      stripe
    >
   <el-table-column
          v-for="(item,index) in tableDataHeader"
          :key="index"
          :prop="item.prop"
          :label="item.col"
          width=""
          align="center"
        ></el-table-column>

      <!--<el-table-column fixed prop="id" label="学号" width="150" align="center"></el-table-column>
      <el-table-column prop="name" label="姓名" width="120" align="center"></el-table-column>
      <el-table-column prop="sex" label="性别" width="120" align="center"></el-table-column>
      <el-table-column prop="subject" label="选科数据" width="120" align="center"></el-table-column>
      <el-table-column prop="score" label="成绩" width="120" align="center"></el-table-column>
      <el-table-column prop="adminClass" label="行政班" width="120" align="center"></el-table-column>-->
    </el-table>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      classData:[],
      adminClassData: [
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          subject: "物化政",
          score: "30",
          adminClass: "高一1班"
        }
      ],
      teachClassData: [
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          adminClass: "13班",
          subject: "30",
          score: "392",
          teachClass: "物理1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          adminClass: "13班",
          subject: "30",
          score: "392",
          teachClass: "物理1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          adminClass: "13班",
          subject: "30",
          score: "392",
          teachClass: "物理1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          adminClass: "13班",
          subject: "30",
          score: "392",
          teachClass: "物理1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          adminClass: "13班",
          subject: "30",
          score: "392",
          teachClass: "物理1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          adminClass: "13班",
          subject: "30",
          score: "392",
          teachClass: "物理1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          adminClass: "13班",
          subject: "30",
          score: "392",
          teachClass: "物理1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          adminClass: "13班",
          subject: "30",
          score: "392",
          teachClass: "物理1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          adminClass: "13班",
          subject: "30",
          score: "392",
          teachClass: "物理1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          adminClass: "13班",
          subject: "30",
          score: "392",
          teachClass: "物理1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          adminClass: "13班",
          subject: "30",
          score: "392",
          teachClass: "物理1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          adminClass: "13班",
          subject: "30",
          score: "392",
          teachClass: "物理1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          adminClass: "13班",
          subject: "30",
          score: "392",
          teachClass: "物理1班"
        },
        {
          id: 20160310218,
          name: "马小明",
          sex: "男",
          adminClass: "13班",
          subject: "30",
          score: "392",
          teachClass: "物理1班"
        }
      ],
      tableDataHeader: [],
      adminHeaderData:[
        { col: "学号", prop: "id" },
        { col: "姓名", prop: "name" },
        { col: "性别", prop: "sex" },
         { col: "选科数据", prop: "subject" },
          { col: "成绩", prop: "score" },
           { col: "行政班", prop: "adminClass" }
      ],
      teachHeaderData:[
        { col: "学号", prop: "id" },
        { col: "姓名", prop: "name" },
        { col: "性别", prop: "sex" },
        { col: "行政班", prop: "adminClass" },
         { col: "选科数据", prop: "subject" },
          { col: "成绩", prop: "score" },
           { col: "教学班", prop: "teachClass" }
      ],
      // activeName: [
      //   {
      //     tabActiveName: "second"
      //   },
      //   {
      //     collapseActiveName: ""
      //   }
      // ],
      className:'',
      activeName:''
    };
  },
  watch: {},
  computed: {},
  methods: {
    goBack() {
       this.$router.go(-1);
      // router.go({name: 'user', params: {userId: 1}});
    },
    //根据参数向表格填不同内容
    getParams(params){
      this.activeName = params.tagActiveName;
        this.className = params.row.class;
      if(params.tagActiveName == "first"){
        this.classData = this.adminClassData;
        this.tableDataHeader = this.adminHeaderData;
      }else if(params.tagActiveName == "second"){
          this.classData = this.teachClassData;
          this.tableDataHeader = this.teachHeaderData;
      }else if(params.tagActiveName == "third"){
         this.classData = this.teachClassData;
          this.tableDataHeader = this.teachHeaderData;
      }else{
        this.classData = [];
      }
    }
  },
  created() {},
  mounted() {
      //接受跳转页面的参数
    let params = this.$route.query;
    this.getParams(params);
  },
  beforeRouteLeave(to, from, next) {
    //路由离开前返回上一页状态
    if (to.name == "adminClass" || to.name == "teachClass") {
      to.params.active = this.activeName;
    }
    next();
  }
};
</script>
<style scoped>
.divide {
  position: relative;
  margin-top: 30px;
  border: 20px solid #f5f5f5;
  margin-right: 0;
  margin-left: 250px;
}
.el-page-header__content{
  font-size: 25px !important;
}
.back-head{
  margin-bottom: 10px;
  color: #a8a6a6;
  margin-top:30px;
  margin-left: 30px; 
  
}
.t-table{
    width: 70%;
    margin: 0 auto;
    margin-top:30px;
  margin-bottom:30px;
}
</style>