<template>
  <div class="main">
      <el-row class="tac">
        <el-col class="el-col">
          <!--<button @click="isCollapse=!isCollapse" class="showbtn">
            <i class="el-icon-d-arrow-right" :class="{showColor:!isCollapse}"></i>
          </button>-->
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
            :collapse="isCollapse"
          >
            <!-- <el-menu-item @click="isCollapse=!isCollapse" v-bind:class="isCollapse">
					 <i class="el-icon-d-arrow-right
					 "></i>
            </el-menu-item>-->
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-user-solid"></i>
                <span>学生信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item class="main-item" index="1-1">选课</el-menu-item>
                <el-menu-item
                  class="main-item"
                  index="/studentLesson"
                  @click="goTo('/studentLesson')"
                >查课表</el-menu-item>
                <el-menu-item class="main-item" index="2-5">学生信息添加</el-menu-item>
                <el-menu-item class="main-item" index="2-6">学生信息查询</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-custom"></i>
                <span>教师信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item class="main-item" index="2-1" @click="goTo('/studentLesson')">申请上课时间</el-menu-item>
                <el-menu-item class="main-item" index="2-2">申请调课</el-menu-item>
                <el-menu-item class="main-item" index="2-3">查课表</el-menu-item>
                <el-menu-item class="main-item" index="2-4">查学生名单</el-menu-item>
                <el-menu-item class="main-item" index="2-5">教师信息添加</el-menu-item>
                <el-menu-item class="main-item" index="2-6">教师信息查询</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>课程信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item class="main-item" index="3-1">课程信息添加</el-menu-item>
                <el-menu-item class="main-item" index="3-2">课程信息查询</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-menu"></i>
                <span>教室信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item class="main-item" index="4-1">教室信息添加</el-menu-item>
                <el-menu-item class="main-item" index="4-2">教室信息查询</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>班级信息管理</span>
              </template>
              <el-menu-item-group>
                <el-menu-item class="main-item" index="5-1">班级信息添加</el-menu-item>
                <el-menu-item class="main-item" index="5-2">班级信息查询</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-s-check"></i>
                <span>管理员</span>
              </template>
              <el-menu-item-group>
                <el-menu-item class="main-item" index="6-1">权限管理</el-menu-item>
                <el-menu-item class="main-item" index="6-2">系统管理</el-menu-item>
                <el-menu-item class="main-item" index="6-3">调课管理</el-menu-item>
                <el-menu-item class="main-item" index="6-4">假期管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span>分班管理</span>
              </template>
              <el-menu-item-group>
                <template slot="title">分班规则</template>
                <el-menu-item class="main-item" index="7-1" @click="goTo('/assignmentTask')">分班任务管理</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group>
                <template slot="title">分班查看</template>
                <el-menu-item class="main-item" index="7-4" @click="goTo('/adminClass')">行政班</el-menu-item>
                <el-menu-item class="main-item" index="7-5" @click="goTo('/teachClass')">教学班</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-col>
      </el-row>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
        isCollapse: false
    };
  },
  watch: {},
  computed: {},
  methods: {
      handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    //跳转到某个页面
    goTo(path) {
      this.$router.push(path);
    },
  },
  created() {
      
  },
  mounted() {}
};
</script>
<style scoped>
.main {
  width: 100%;
  left: 0;
  position: absolute;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 250px;
}

.el-col {
  width: 250px;
}

.el-menu-item-group__title {
  padding: 0;
}

.el-submenu .el-menu-item {
  height: 40px;
  line-height: 40px;
  padding-left: 12px;
}

.showbtn {
  width: 64px;
  height: 32px;
  border-radius: 32px 32px 0 0;
  border: 0;
  background: rgb(84, 92, 100);
  padding: 0;
  outline: none;
}

.el-menu {
  border: 0;
}

.el-icon-d-arrow-right {
  transform: rotate(90deg);
  color: #fff;
  transition: all 2s ease;
}

.showColor {
  transform: rotate(0deg);
  color: rgb(255, 208, 75);
  transition: all 2s ease;
}

.main-item {
  padding-left: 52px !important;
  font-size: 12px !important;
}
</style>