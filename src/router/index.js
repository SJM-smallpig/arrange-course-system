import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)




export default new Router({
  // mode:'history',// 去掉路由地址的#
  // base: '/dist',
  routes: [
    {
      path:'/',
      name:'login',
      component:() => import('@/views/Login'),
      meta: {
        title: '登录',//页面标题
        type: '', // 是否需要判断是否登录,这里是需要判断
        keepAlive: false//判断公共组件是否展示
      }
    },
    {
      path:'/header',
      name:'header',
      component:() => import('@/components/Header'),
      meta: {
        title: '导航栏',
        type: '',// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
    {
      path:'/left',
      name:'left',
      component:() => import('@/components/Left'),
      meta: {
        title: '侧边栏',
        type: 'login' ,// 不需要鉴权
        keepAlive: true,
        requiresAuth: true
      }
    },
   {
     path:'/studentLesson',
     name:'studentLesson',
     component:() => import('@/views/StudentLesson'),
     meta: {
      requiresAuth: true,
      title: '查课表',
      type: 'login' ,// 不需要鉴权
      keepAlive: true,
      requiresAuth: true
    }
   },
  {
    path:'/class',
    name:'class',
    component:() => import('@/components/Class'),
    meta: {
      title: '班级信息',
      type: '' ,// 不需要鉴权
      keepAlive: true,
      requiresAuth: true
    }
  },
  {
    path:'/printButton',
    name:'printButton',
    component:() => import('@/components/PrintButton'),
    meta: {
      title: '打印功能',
      type: '' ,// 不需要鉴权
      keepAlive: true,
      requiresAuth: true
    }
  },
  {
    path:'/assignmentTask',
    name:'assignmentTask',
    component:() => import('@/views/divide-class-manage/AssignmentTask'),
    meta: {
      title: '任务列表',
      type: '' ,// 不需要鉴权
      keepAlive: true,
      requiresAuth: true
    }
  },
  {
    path:'/exportExcel',
    name:'exportExcel',
    component:() => import('@/components/ExportExcel'),
    meta: {
      title: '导出excel',
      type: '' ,// 不需要鉴权
      keepAlive: true,
      requiresAuth: true
    }
  },
  {
    path:'/setRules',
    name:'setRules',
    component:() => import('@/views/divide-class-manage/SetRules'),
    meta: {
      title: '设置规则',
      type: '' ,// 不需要鉴权
      keepAlive: true,
      requiresAuth: true
    }
  },
  {
    path:'/helloWorld',
    name:'helloWorld',
    component:() => import('@/views/HelloWorld'),
    meta: {
      title: '欢迎页面',
      type: '' ,// 不需要鉴权
      keepAlive: true,
      requiresAuth: true
    }
  },
  {
    path:'/adminClass',
    name:'adminClass',
    component:() => import('@/views/divide-class-manage/AdminClass'),
    meta: {
      title: '行政班',
      type: '' ,// 不需要鉴权
      keepAlive: true,
      requiresAuth: true
    }
  },
  {
    path:'/teachClass',
    name:'teachClass',
    component:() => import('@/views/divide-class-manage/TeachClass'),
    meta: {
      title: '教学班',
      type: '' ,// 不需要鉴权
      keepAlive: true,
      requiresAuth: true
    }
  },
  {
    path:'/rulesLists',
    name:'rulesLists',
    component:() => import('@/views/divide-class-manage/RulesLists'),
    meta: {
      title: '规则列表',
      type: '' ,// 不需要鉴权
      keepAlive: true,
      requiresAuth: true
    }
  }
  ]
})
