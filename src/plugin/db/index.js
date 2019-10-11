const localData = function (method, name, obj) {
    /*
     * 参数说明：
     * method：get获取，set存入或覆盖，clean清除
     * name:localStorage的名称
     * obj:存入的内容，可以是任意类型
     * localStorage.getItem(key):获取指定key本地存储的值
     * localStorage.setItem(key,value)：将value存储到key字段
     * localStorage.removeItem(key):删除指定key本地存储的值
     * */ 
    switch (method) {
      case 'get':
        if (localStorage.getItem(name)) {
          return JSON.parse(localStorage.getItem(name));
        } else if (localStorage.getItem(name)) {
          return localStorage.getItem(name);
        } else {
          return null
        }
      case 'set':
        localData('clean', name);
        if (typeof obj == 'object') {
          localStorage.setItem(name, JSON.stringify(obj));
        } else {
          localStorage.setItem(name, obj);
        }
        return true;
      case 'clean':
        localStorage.removeItem(name);
        localStorage.removeItem(name);
        return true;
    }
  };
  
  // session操作
  const sessionData = function (method, name, obj) {
    /*
     * 参数说明：
     * method：get获取，set存入或覆盖，clean清除
     * name:session的名称
     * obj:存入的内容，可以是任意类型
     * */
    switch (method) {
      case 'get':
        if (sessionStorage.getItem(name)) {
          return JSON.parse(sessionStorage.getItem(name));
        } else if (sessionStorage.getItem(name)) {
          return sessionStorage.getItem(name);
        } else {
          return null
        }
      case 'set':
        sessionData('clean', name);
        if (typeof obj == 'object') {
          sessionStorage.setItem(name, JSON.stringify(obj));
        } else {
          sessionStorage.setItem(name, obj);
        }
        return true;
      case 'clean':
        sessionStorage.removeItem(name);
        sessionStorage.removeItem(name);
        return true;
    }
  };
  export {localData, sessionData}