<template>
  <div class="f-main" :style="{'width':allWidth}">
    <div class="f-left">
      <img class="pic" src="../assets/loginFailed.jpg" />
    </div>

    <div class="f-right-word" :style="{'width':rightWidth}">
      <div>{{errorWord}}</div>
      <span>糟糕......</span>
      <span class="locking">您要查找的网页找不到</span>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      errorWord: "",
      allWidth:"",
      rightWidth:""
    };
  },
  watch: {},
  computed: {},
  methods: {},
  created() {},
  mounted() {
    let that = this;
    let params = that.$route.query;
    if (params.error == "error") {
      that.errorWord = "页面飞走了！！！";
      that.allWidth = "80%";
      that.rightWidth = "1000px";
    } else {
      that.errorWord = "404";
      that.allWidth = "60%";
      that.rightWidth = "600px";
    }
  }
};
</script>
<style scoped>
.f-main {
  height: 100%;
  margin: 0 auto;
}
.f-right-word {
  height: 500px;
  float: right;
  margin-top: 80px;
}
.f-right-word span:nth-child(2) {
  display: inline-block;
  font-size: 60px;
  color: #84898c;
  margin-top: 60px;
}
.f-right-word span:nth-child(3) {
  display: inline-block;
  font-size: 20px;
  color: #84898c;
}
.f-right-word :nth-child(1) {
  font-size: 120px;
  color: #340030;
  text-shadow: 8px 12px 12px #51432e8a;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  font-weight: bold;
}
.f-left {
  float: left;
  height: 500px;
  text-align: center;
  margin-top: 100px;
}
.pic {
  width: 200px;
  height: 250px;
}
</style>