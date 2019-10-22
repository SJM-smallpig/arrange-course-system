// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import Print from "vue-print-nb"
import {localData, sessionData} from '@/plugin/db'
import store from './store/index'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Print);
Vue.prototype.localData = localData;
Vue.prototype.sessionData=sessionData;
// axios.defaults.baseURL = '/api'
Vue.prototype.$axios = axios;
// axios.defaults.headers.post["Content-type"] = "application/json"


//判断是进入登录页面还是主页面
// router.beforeEach((to, from, next) => {
  
//   if (to.meta.title) {
//     document.title = to.meta.title
//   }
//   // 判断该路由是否需要登录权限
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     //这里判断用户是否登录，验证本地存储是否有token
//     if (!window.sessionStorage.getItem('username_str')) {  //判断当前的token是否存在
//         next({
//             path: '/'
//         })
//     } else {
//         next()
//     }
// } else {
//     next() // 确保一定要调用 next()
// }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  render: h => h(App)
})
