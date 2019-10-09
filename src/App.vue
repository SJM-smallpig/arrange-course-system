<template>
  <div id="app">
    <el-container v-if="$route.meta.keepAlive">
      <el-header>
        <keep-alive>
        <!-- 导航栏 -->
          <header-nav></header-nav>
        </keep-alive>
      </el-header>
    <el-container>
      <el-aside width="250px">
        <!-- 侧边栏 -->
        <keep-alive>
          <left></left>
        </keep-alive>
      </el-aside>
      <el-main>
        <!-- Body -->
         <router-view></router-view>
      </el-main>
    </el-container>
    </el-container>
 
    <!-- 登录页 -->
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import headerNav from "@/components/Header";
import left from "@/components/Left";
export default {
  name: "App",
  components: {
    headerNav,
    left
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
