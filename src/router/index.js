import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'

Vue.use(Router)




const router = new Router({
  // mode:'history',// 去掉路由地址的#
  // base: '/dist',
  routes: [
    {
      path: '/',
      name: 'login',
      component: () => import('@/views/Login'),
      meta: {
        title: '登录',//页面标题
        type: '', // 是否需要判断是否登录,这里是需要判断
        keepAlive: false//判断公共组件是否展示
      }
    },
    {
      path: '/header',
      name: 'header',
      component: () => import('@/components/Header'),
      meta: {
        title: '导航栏',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/left',
      name: 'left',
      component: () => import('@/components/Left'),
      meta: {
        title: '侧边栏',
        type: 'login',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/studentLesson',
      name: 'studentLesson',
      component: () => import('@/views/StudentLesson'),
      meta: {
        requiresAuth: true,
        title: '查课表',
        type: 'login',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/class',
      name: 'class',
      component: () => import('@/components/Class'),
      meta: {
        title: '班级信息',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/printButton',
      name: 'printButton',
      component: () => import('@/components/PrintButton'),
      meta: {
        title: '打印功能',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/assignmentTask',
      name: 'assignmentTask',
      component: () => import('@/views/divide-class-manage/AssignmentTask'),
      meta: {
        title: '任务列表',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/exportExcel',
      name: 'exportExcel',
      component: () => import('@/components/ExportExcel'),
      meta: {
        title: '导出excel',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/setRules',
      name: 'setRules',
      component: () => import('@/views/divide-class-manage/SetRules'),
      meta: {
        title: '设置规则',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/helloWorld',
      name: 'helloWorld',
      component: () => import('@/views/HelloWorld'),
      meta: {
        title: '欢迎页面',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/adminClass',
      name: 'adminClass',
      component: () => import('@/views/divide-class-manage/AdminClass'),
      meta: {
        title: '行政班',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/teachClass',
      name: 'teachClass',
      component: () => import('@/views/divide-class-manage/TeachClass'),
      meta: {
        title: '教学班',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/rulesLists',
      name: 'rulesLists',
      component: () => import('@/views/divide-class-manage/RulesLists'),
      meta: {
        title: '规则列表',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/ruleOneStage',
      name: 'ruleOneStage',
      component: () => import('@/components/rulesStage/RuleOneStage'),
      meta: {
        title: '规则设置第一阶段',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/ruleTwoStage',
      name: 'ruleTwoStage',
      component: () => import('@/components/rulesStage/RuleTwoStage'),
      meta: {
        title: '规则设置第二阶段',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/ruleThreeStage',
      name: 'ruleThreeStage',
      component: () => import('@/components/rulesStage/RuleThreeStage'),
      meta: {
        title: '规则设置第三阶段',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path: '/ruleFourthStage',
      name: 'ruleFourthStage',
      component: () => import('@/components/rulesStage/RuleFourthStage'),
      meta: {
        title: '规则设置第四阶段',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    }
  ]
})

// 注册全局钩子用来拦截导航
// router.beforeEach((to, from, next) => {
//   const token = store.state.token
//   if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//     if (token) { // 通过vuex state获取当前的token是否存在
//       next()
//     } else {
//       console.log('该页面需要登陆')
//       next({
//         path: '/login'
//         // query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//       })
//     }
//   } else {
//     next()
//   }
// })
export default router
