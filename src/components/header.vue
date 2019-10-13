<template>
   <div class="head">
      <div class="head-content">
        <h1 class="head-logo">排课系统</h1>
        <span>
          您好，
          <i>{{username}}</i>
        </span>
        <el-button type="warning" round size="mini" @click="changeLoginStatus">{{loginStatus}}</el-button>
      </div>
    </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      username:'',
      loginStatus:'登录'
    };
  },
  watch: {},
  computed: {},
  methods: {
      //改变登录状态
      changeLoginStatus(){
          let that =this;
          if(that.loginStatus = '退出'){
            that.sessionData("clean",'username');
            that.sessionData("clean",'password');
            that.$router.replace('/');
          }
      }
  },
  created() {
      let that =this;
      if(this.sessionData('get','username')){
          that.username = this.sessionData('get','username');
          that.loginStatus = '退出'
      }else{
          that.loginStatus = '登录'
      }
      
  },
  mounted() {
  }
};
</script>
<style scoped>
.head {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 70px;
  z-index: 98;
  background: rgb(84, 92, 100);
}
.head-content {
  padding: 0 40px;
  height: 70px;
  font-family: "STXihei", "微软雅黑", "Helvetica Neue", Helvetica, "PingFang SC",
    "Hiragino Sans GB", "Microsoft YaHei", Arial, sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.head-content span {
  color: #fff;
}
.head-logo {
  font-size: 25px;
  color: rgb(255, 208, 75);
  text-shadow: 3px 2px 3px rgb(202, 202, 200);
}
</style>