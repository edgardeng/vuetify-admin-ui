/**
 * state parameter for User
 *
 * Param : token, visitedViews
 */
import { getObject, setObject } from "@/utils/cookie"
const user = {
  state: {
    user: undefined,
    // status: '',
    // code: '',
    // token: undefined,
    // roles: [],
    authorities: undefined, // dict: [{'auth':true}]
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
        let u = getObject('user')
        if (u) {
          const authList = ['user:list', 'menu:list', 'role:list'] // ['user_add','user_del' ..]
          const authorities = {}
          for (let i = 0; i < authList.length; i++) {
            let item = authList[i]
            authorities[item] = true
          }
          commit('SET_AUTHORITIES', authorities)  // key = true
          resolve(authorities)
        } else {
          commit('SET_AUTHORITIES', undefined)
          reject()
        }
      })
    },
    // 用户登出
    USER_LOGOUT ({ commit }) {
      return new Promise((resolve, reject) => {
        commit('SET_AUTHORITIES', undefined)
        commit('SET_USER', undefined)
        setObject('user', undefined)
        // TODO del access_token remote server
        // logout().then(() => { })
        resolve()
      })
    }
  },
  getters: {
    userInfo: state => state.user,
    authorities: state => state.authorities
  }
}

export default user
