let session = {
    get: function (key) {
        // 存储进去的是字符串所以get的也是字符串，因此要转换成对象
        try {
            return JSON.parse(sessionStorage.getItem(key))
        } catch (err) {
            return sessionStorage.getItem(key)
        }
    },
    set: function (key, val) {
        // 只接受字符串，所以val一定要从对象转换成字符串
        sessionStorage.setItem(key, JSON.stringify(val))
    },
    remove(key) {
        sessionStorage.removeItem(key)
    },
    clear() {
        sessionStorage.clear()
    }
}
let local = {
    get: function (key) {
        // 存储进去的是字符串所以get的也是字符串，因此要转换成对象
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch (err) {
            return localStorage.getItem(key)
        }
    },
    set: function (key, val) {
        // 只接受字符串，所以val一定要从对象转换成字符串
        localStorage.setItem(key, JSON.stringify(val))
    },
    remove(key) {
        localStorage.removeItem(key)
    },
    clear() {
        localStorage.clear()
    }
}
export default {
    install: function (vm) {
        // local是获取到的用户名
        vm.prototype.$session = session
        vm.prototype.$local = local
    }
}
