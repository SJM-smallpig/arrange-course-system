import Vue from 'vue'
import Vuex from 'vuex'
import { localData, sessionData } from '@/plugin/db'
import createPersistedState from "vuex-persistedstate"


Vue.use(Vuex)
Vue.prototype.localData = localData;
Vue.prototype.sessionData = sessionData;
// 初始化时用sessionStore.getItem('token'),这样子刷新页面就无需重新登录
const state = {//驱动应用的数据源
  // user: window.sessionStorage.getItem('user'),
  token: '',//window.sessionStorage.getItem('token'),
  taskLists: [],
  taskListName: []
}
const mutations = {  //更改 Vuex 的 store 中的状态的唯一方法
  //将token保存到sessionStorage里，token表示登陆状态
  SET_TOKEN: (state, data) => {
    state.token = data
    sessionData('set', 'token', state.token)
    // window.sessionStorage.setItem('token', data)

  },
  //获取用户名
  GET_USER: (state, data) => {
    // 把用户名存起来
    state.user = data
    window.sessionStorage.setItem('user', data)
  },
  //登出
  LOGOUT: (state) => {
    // 登出的时候要清除token
    state.token = null
    state.user = null
    window.sessionStorage.removeItem('token')
    window.sessionStorage.removeItem('user')
  },
  //添加任务列表
  SET_List: (state, obj) => { 
    state.taskLists.push(obj);
    sessionData('set', 'taskLists', state.taskLists)
    
  },
  //更新任务列表
  UPDATE_List:(state,obj) => {
    for (let i = 0; i < state.taskLists.length; i++) {
      if (state.taskLists[i].taskName == obj.taskName) {
        state.taskLists.splice(i, 1);
      }
    }
    state.taskLists.push(obj);
    sessionData('set', 'taskLists', state.taskLists)
  },
  //删除任务列表
  DEL_List_NAME: (state, name) => {

    for (let i = 0; i < state.taskListName.length; i++) {
      if (state.taskListName[i].taskName == name) {
        state.taskListName.splice(i, 1);
      }
    }
    sessionData('set', 'taskListName', state.taskListName)
  },
  //增加任务列表名字
  SET_List_NAME: (state, name) => {
          state.taskListName.push(name)
          sessionData('set', 'taskListName', state.taskListName)
  
    
  },
  //任务列表重命名
  LIST_RENAME: (state, names) => {
    let oldName = names.oldName;
    let reName = names.reName;
    console.log(names);console.log(reName);
    state.taskListName.forEach((item, index, array) => {
      if (state.taskListName[index].taskName == oldName) {
       
        state.taskListName[index].taskName = reName;
      }
    })
    sessionData('set', 'taskListName', state.taskListName)
  }

}
const getters = {   //实时监听state值的变化(最新状态)
  getTaskList() {  //获取任务列表

    return sessionData('get', 'taskLists')
  },
  getListByName: (state) => (taskName) => {
    return state.taskLists.find(taskList => taskLists.taskName === taskName)
  }
};
const actions = {

}
export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
  plugins: [createPersistedState({
    key: 'taskLists',
    storage: window.sessionStorage,
    reducer(val) {
      return {
        // 只储存state中的user
        taskLists: val.taskLists,
        taskListName: val.taskListName
      }
    }
  })]
})