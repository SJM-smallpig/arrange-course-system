<template>
  <div class="e-main">
  <img class="e-body" src="../assets/error.png">
  <div class="word">访问该页面需要登录！请点击<span @click="toLogin()">登录</span></div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
    };
  },
  watch: {},
  computed: {},
  methods: {
    toLogin(){
      let that = this;
      that.$router.push("/login");
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.e-main{
    width: 100%;
    height:100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    
}
.e-body{
    width: 100%;
    height: 90%;

}
.word{
  float: left;
  position: absolute;
  bottom:200px;
  left: 40%;
  font-size: 25px;
  font-weight: bold;
}
.word span{
  color: dodgerblue;
  cursor: pointer;
}
</style>