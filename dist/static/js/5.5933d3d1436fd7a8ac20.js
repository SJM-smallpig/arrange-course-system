webpackJsonp([5],{"b/nV":function(e,o){},lmfZ:function(e,o,t){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var r=t("mvHQ"),s=t.n(r),a={components:{},props:{},data:function(){return{setPage:!1,loginPage:!0,HeaderContent:"统一身份认证登录",common:!1,ruleForm:{userName:"",password:""},setPasswordData:{phone:""},rules:{userName:[{validator:function(e,o,t){if(!o)return t(new Error("用户名不能为空"));t()},trigger:"blur"}],password:[{validator:function(e,o,t){if(""===o)return t(new Error("请输入密码"));t()},trigger:"blur"}],phone:[{validator:function(e,o,t){if(""===o)return t(new Error("请输入正确的手机号码"));t()},trigger:"blur"}]}}},watch:{},computed:{},methods:{submitForm:function(e){var o=this;o.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;var t=o.ruleForm.userName,r=o.ruleForm.password,a={};a.username=t,a.password=r;var n=s()(a);o.common=!0,o.$axios({url:"/api/goclass/login",method:"post",headers:{"Content-Type":"application/json;charset=utf-8"},data:n,crossDomain:!0}).then(function(e){if(200===e.status){if(console.log(e),e.data.accessToken){var t=e.data.accessToken;o.$store.commit("SET_TOKEN",t),o.$router.push("/helloWorld")}}else e.status}).catch(function(e){console.log(e)})})},setPassword:function(){this.loginPage=!this.loginPage,this.setPage=!this.setPage,this.HeaderContent="找回密码"},goLoginPage:function(){this.loginPage=!this.loginPage,this.setPage=!this.setPage,this.HeaderContent="统一身份认证登录"},sunmitPassword:function(e){this.$refs[e].validate(function(e){if(!e)return console.log("error submit!!"),!1;console.log(e)})}},created:function(){},mounted:function(){}},n={render:function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("div",{staticClass:"l-main"},[t("div",{directives:[{name:"show",rawName:"v-show",value:!e.common,expression:"!common"}],staticClass:"login-page"},[t("div",{staticClass:"page-bg"},[t("div",{staticClass:"page-header"},[t("i",{staticClass:"el-icon-s-custom"}),e._v(" "),t("span",[e._v(e._s(e.HeaderContent))])]),e._v(" "),t("el-form",{directives:[{name:"show",rawName:"v-show",value:e.loginPage,expression:"loginPage"}],ref:"ruleForm",staticClass:"demo-ruleForm",attrs:{model:e.ruleForm,"status-icon":"",rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"用户名",prop:"userName"}},[t("el-input",{model:{value:e.ruleForm.userName,callback:function(o){e.$set(e.ruleForm,"userName",e._n(o))},expression:"ruleForm.userName"}})],1),e._v(" "),t("el-form-item",{attrs:{label:"密码",prop:"password"}},[t("el-input",{attrs:{type:"password",autocomplete:"off"},model:{value:e.ruleForm.password,callback:function(o){e.$set(e.ruleForm,"password",o)},expression:"ruleForm.password"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(o){return e.submitForm("ruleForm")}}},[e._v("登录")]),e._v(" "),t("el-button",{on:{click:e.setPassword}},[e._v("忘记密码？")])],1)],1),e._v(" "),t("el-form",{directives:[{name:"show",rawName:"v-show",value:e.setPage,expression:"setPage"}],ref:"setPasswordData",staticClass:"demo-ruleForm",attrs:{model:e.setPasswordData,"status-icon":"",rules:e.rules,"label-width":"100px"}},[t("el-form-item",{attrs:{label:"手机号",prop:"phone"}},[t("el-input",{model:{value:e.ruleForm.phone,callback:function(o){e.$set(e.ruleForm,"phone",e._n(o))},expression:"ruleForm.phone"}})],1),e._v(" "),t("el-form-item",[t("el-button",{attrs:{type:"primary"},on:{click:function(o){return e.sunmitPassword("ruleForm")}}},[e._v("提交")]),e._v(" "),t("el-button",{on:{click:e.goLoginPage}},[e._v("返回")])],1)],1)],1)])])},staticRenderFns:[]};var i=t("VU/8")(a,n,!1,function(e){t("b/nV")},"data-v-fdf1c478",null);o.default=i.exports}});
//# sourceMappingURL=5.5933d3d1436fd7a8ac20.js.map