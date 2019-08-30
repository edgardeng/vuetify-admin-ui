/**
 * state parameter for User
 *
 * Param : token, visitedViews
 */
import { getObject, setObject } from "@/utils/cookie";
const user = {
  state: {
    user: undefined,
    // status: '',
    // code: '',
    // token: undefined,
    // roles: [],
    authorities: undefined, // 用户的授权 ["authority": ] // 用户所有的授权
    // menus: undefined, // 用户的可用菜单 menus[code]= true
    // elements: undefined,  // 用户可用的UI元素(菜单，按钮) elements[code]= true
    // permissionMenus: undefined, // 显示给用户看的UI菜单
  },

  mutations: {
    // SET_CODE: (state, code) => {
    //   state.code = code
    // },
    // SET_TOKEN: (state, token) => {
    //   state.token = token
    // },
    // SET_STATUS: (state, status) => {
    //   state.status = status
    // },
    // SET_ROLES: (state, roles) => {
    //   state.roles = roles
    // },
    // SET_MENUS: (state, menus) => {
    //   state.menus = menus
    // },
    SET_AUTHORITIES: (state, data) => {
      state.authorities = data
    },
    SET_USER: (state, user) => {
      state.user = user
      setObject('user', user)
    }
  },
  actions: {
    // 用户登录
    USER_LOGIN ({ commit }, userInfo) {
      console.log('USER_LOGIN')
      let username = userInfo.username.trim()
      let password = userInfo.password
      commit('SET_AUTHORITIES', undefined)
      return new Promise((resolve, reject) => {
        // TODO 网络请求
        if (username === 'admin' && password === '123456') {
          userInfo.token = 'access_token'
          commit('SET_USER', userInfo)
          resolve(userInfo)
        } else {
          reject('用户名或密码错误')
        }
      })
    },
    // 获取用户信息
    USER_INFO ({ commit }, info) {
      return new Promise((resolve, reject) => {
        // TODO Network get info from access_token
        let user = getObject('user')
        if (user) {
          let authList = [] // ['user_add','user_del' ..]
          let authorities = {}
          for (let i = 0; i < authList.length; i++) {
            let item = authList[i]
            authorities[item.authority] = true
          }
          commit('SET_AUTHORITIES', authorities)  // key = true
          resolve(authorities)
        } else {
          commit('SET_AUTHORITIES', undefined)
          resolve(undefined)
        }
      })
    },
    // 用户登出
    USER_LOGOUT ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_AUTHORITIES', undefined)
        commit('SET_USER', undefined)
        // TODO del access_token remote server
        // logout().then(() => { })
        resolve()
      })
    }
  },
  getters: {
    userInfo: state => state.user,
    authorities: state => state.authorities,
    // userMenus (state) { // menu authority {}
    //   return state.menus
    // },
    // userElements (state) {
    //   return state.elements // authority list[auth]=true
    // }
  }
}

export default user
