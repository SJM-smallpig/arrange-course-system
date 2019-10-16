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
      this.$refs[formName].validate(valid => {
        if (valid) {
          let username = this.ruleForm.userName;
          let password = this.ruleForm.password;
          let obj = {};
          obj["username"] = username;
          obj["password"] = password;
          let queryArray = JSON.stringify(obj);
            this.common = true;
            this.sessionData("set", "username", username);
            this.sessionData("set", "password", password);
            this.$router.push("/helloWorld");
          } else {
            console.log("error submit!!");
            return false;
          }
          // this.$axios.post("http://lede.dalaomai.cn:5050/goclass/login", {
          //     user: this.ruleForm.userName,
          //     pass: this.ruleForm.password
          //   })

          //   .then(response => {
          // this.$ajax({
          //   method: "post",
          //   headers: {
          //     "Content-Type": "application/json;charset=utf-8"
          //   },
          //   // headers: { "Access-Control-Allow-Origin": "*" },
          //   url: "http://lede.dalaomai.cn:5050/goclass/login",
          //   data: queryArray
          // })
          //   .then(function(res) {
              // if (response.status === 200) {
              //   console.log(res);
                // this.$store.commit("SET_TOKEN", response.data.token);
                // this.$store.commit("GET_USER", response.data.user);
                // this.$message({
                //   message: "登陆成功",
                //   type: "success"
                // });
                // this.$router.push({ name: "/" });
        //       }
        //     })
        //     .catch(function(error) {
        //       console.log(error);
        //     });
        // } else {
        //   console.log("error submit!!");
        //   return false;
        // }
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