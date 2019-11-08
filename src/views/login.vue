<template>
  <div class="l-main">
    <div class="login-page" v-show="!common">
      <div class="page-bg">
        <div class="page-header">
          <i class="el-icon-s-custom"></i>
          <span>{{HeaderContent}}</span>
        </div>
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
          v-show="loginPage"
        >
          <el-form-item label="用户名" prop="userName">
            <el-input v-model.number="ruleForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
            <el-button @click="setPassword">忘记密码？</el-button>
          </el-form-item>
        </el-form>
        <el-form
          :model="setPasswordData"
          status-icon
          :rules="rules"
          ref="setPasswordData"
          label-width="100px"
          class="demo-ruleForm"
          v-show="setPage"
        >
          <el-form-item label="手机号" prop="phone">
            <el-input v-model.number="ruleForm.phone"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="sunmitPassword('ruleForm')">提交</el-button>
            <el-button @click="goLoginPage">返回</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    var checkUserName = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      } else {
        callback();
      }
    };
    var checkPassword = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var searchPassword = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("请输入正确的手机号码"));
      } else {
        callback();
      }
    };
    return {
      setPage: false,
      loginPage: true,
      HeaderContent: "统一身份认证登录",
      common: false,
      ruleForm: {
        userName: "",
        password: ""
      },
      setPasswordData: {
        phone: ""
      },
      rules: {
        userName: [{ validator: checkUserName, trigger: "blur" }],
        password: [{ validator: checkPassword, trigger: "blur" }],
        phone: [{ validator: searchPassword, trigger: "blur" }]
      }
    };
  },
  watch: {},
  computed: {},
  methods: {
    //登录跳转
    submitForm(formName) {
      let that = this;
      that.$refs[formName].validate(valid => {
        if (valid) {
          let username = that.ruleForm.userName;
          let password = that.ruleForm.password;
          let obj = {};
          obj["accounts"] = username;
          obj["password"] = password;
          let queryArray = obj;
          console.log(queryArray);
          that.common = true;
          that.sessionData("set", "username", username);
          that.sessionData("set", "password", password);
          // this.$router.push("/helloWorld");
          // } else {
          //   console.log("error submit!!");
          //   return false;
          // }



          that.$axios({
            url: "http://lede.dalaomai.cn:5051/goclass/api/user/login",
              method: "post",
              data: queryArray,
              crossDomain: true,
              withCredentials:true

            })
            .then(function(res) {
              
              if (res.status === 200) {
                // console.log(res.data.date.sessionId);
                that.$store.commit("SET_TOKEN", res.data.date.sessionId);
               
                that.$router.push("/helloWorld");

                // if(res.data["accessToken"]){
                //   let tokenCur = res.data["accessToken"];
                //   console.log(typeof tokenCur);
                //   that.$store.commit("SET_TOKEN", tokenCur);
                  
                // }
                // console.log(that.$store.state.token);

              
                
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
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //重新设置密码
    setPassword() {
      let that = this;
      that.loginPage = !that.loginPage;
      that.setPage = !that.setPage;
      that.HeaderContent = "找回密码";
    },
    //展示登录页面
    goLoginPage() {
      let that = this;
      that.loginPage = !that.loginPage;
      that.setPage = !that.setPage;
      that.HeaderContent = "统一身份认证登录";
    },
    //提交找回密码表单
    sunmitPassword(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          console.log(valid);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    }
  },
  created() {},
  mounted() {}
};
</script>
<style scoped>
.login-page {
  background: url("../assets/bg.png") no-repeat center center;
  width: 100%;
  height: 100%;
  position: fixed;
  background-size: 100% 100%;
  left: 0;
  right: 0;
  top: 0;
  z-index: -1;
  opacity: 0.8;
}
.page-bg {
  width: 400px;
  height: 300px;
  background: #fff;
  position: absolute;
  left: 50%;
  top: 50%;
  margin: -150px 0 0 -200px;
  box-shadow: 3px 5px 7px 1px black;
  background-color: rgba(255, 255, 255, 0.9);
}
.demo-ruleForm {
  width: 360px;
  margin-top: 40px;
}
.el-icon-s-custom {
  font-size: 30px;
  color: #409eff;
  margin-right: 10px;
}
.l-main {
  width: 100%;
  height: 100%;
}
.l-main i {
  color: brown;
}
.page-header {
  text-align: center;
  padding-top: 30px;
}
.page-header span {
  font-weight: bold;
}
</style>