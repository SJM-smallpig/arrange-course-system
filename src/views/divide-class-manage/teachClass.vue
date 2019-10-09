<template>
  <div class="w-main">
    <div class="tabs">
      <el-tabs v-model="tagActiveName" @tab-click="handleClick">
        <el-tab-pane label="高一" name="first">
          <el-table
            :data="teachClassData"
            border
            class="tc-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            stripe
          >
            <el-table-column fixed prop="class" label="班级名称" width="120" align="center"></el-table-column>
            <el-table-column prop="classNum" label="班级人数" width="120" align="center"></el-table-column>
            <el-table-column prop="ratio" label="男女比例" width="120" align="center"></el-table-column>
            <el-table-column prop="average" label="教学科目平均分" width="120" align="center"></el-table-column>
            <el-table-column fixed="right" label="操作" width="120" align="center">
              <template slot-scope="scope">
                <el-button @click="goClass(scope.row)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="高二" name="second">
          <el-table
            :data="teachClassData"
            border
            class="tc-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            stripe
          >
            <el-table-column fixed prop="class" label="班级名称" width="120" align="center"></el-table-column>
            <el-table-column prop="classNum" label="班级人数" width="120" align="center"></el-table-column>
            <el-table-column prop="ratio" label="男女比例" width="120" align="center"></el-table-column>
            <el-table-column prop="average" label="教学科目平均分" width="120" align="center"></el-table-column>
            <el-table-column fixed="right" label="操作" width="120" align="center">
              <template slot-scope="scope">
                <el-button @click="goClass(scope.row)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
        <el-tab-pane label="高三" name="third">
          <el-table
            :data="teachClassData"
            border
            class="tc-table"
            :header-cell-style="{background:'#eef1f6',color:'#606266'}"
            stripe
          >
            <el-table-column fixed prop="class" label="班级名称" width="120" align="center"></el-table-column>
            <el-table-column prop="classNum" label="班级人数" width="120" align="center"></el-table-column>
            <el-table-column prop="ratio" label="男女比例" width="120" align="center"></el-table-column>
            <el-table-column prop="average" label="教学科目平均分" width="120" align="center"></el-table-column>
            <el-table-column fixed="right" label="操作" width="120" align="center">
              <template slot-scope="scope">
                <el-button @click="goClass(scope.row)" type="text" size="small">查看</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      tagActiveName: "first",
      teachClassData: [
        {
          id: 1,
          class: "物理选考1班",
          classNum: "25",
          ratio: "13/12",
          average: "30"
        },
        {
          id: 2,
          class: "物理选考2班",
          classNum: "30",
          ratio: "15/15",
          average: "30"
        },
        {
          id: 3,
          class: "物理会考3班",
          classNum: "25",
          ratio: "15/10",
          average: "30"
        },
        {
          id: 4,
          class: "化学1班",
          classNum: "30",
          ratio: "15/15",
          average: "30"
        },
        {
          id: 5,
          class: "化学2班",
          classNum: "29",
          ratio: "14/15",
          average: "30"
        },
        {
          id: 6,
          class: "化学3班",
          classNum: "28",
          ratio: "14/14",
          average: "30"
        },
        {
          id: 7,
          class: "历史1班",
          classNum: "25",
          ratio: "13/12",
          average: "30"
        },
        {
          id: 8,
          class: "历史2班",
          classNum: "35",
          ratio: "18/17",
          average: "30"
        }
      ]
    };
  },
  watch: {},
  computed: {},
  methods: {
    handleClick(key, keyPath) {
      // console.log(key, keyPath);
    },
    //跳转到班级信息页面
    goClass(row) {
      //  console.log(row);
      let that = this;
      that.$router.push({
        path: "@/components/Class", //跳转路径
        name: "class", //跳转路径的name值，不写跳转后页面取不到参数
        // 参数
        query: {
          row: row,
          tagActiveName: this.tagActiveName
        }
      });
    }
  },
  created() {},
  mounted() {
    if (this.$route.params.active) {//判断您当前所在tab
      this.tagActiveName = this.$route.params.active;
    }
  }
};
</script>
<style scoped>
.w-main {
  position: relative;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
}
.ac-table {
  margin: 0 auto;
  width: 921px;
}
.tc-table {
  width: 601px;
  margin: 0 auto;
  margin-top:30px;
  margin-bottom:30px;
}
.tabs {
  border-bottom: 1px solid #eaecf1;
}
.el-dropdown {
  color: #409eff;
  margin: 15px 20px;
  font-size: 18px;
}
.el-dropdown-link {
  cursor: pointer;
  color: #409eff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.demonstration {
  display: block;
  color: #8492a6;
  font-size: 16px;
  margin-bottom: 20px;
}
</style>