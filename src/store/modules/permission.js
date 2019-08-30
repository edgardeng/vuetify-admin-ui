import { asyncRouters } from '@/router/async'
import { constRouters } from '@/router/index'

/**
 * 通过authority判断是否与当前用户权限匹配
 * @param menus
 * @param route
 */
function hasPermission(menus, route) {
    let authority = route.authority
    if (authority) {
      return menus[authority] !== undefined
    } else {
      return true
    }
}

/**
 * 递归过滤异步路由表，返回符合用户角色权限(即存在menus中code=authority)的路由表
 * @param asyncRouterMap
 * @param roles
 */
function filterAsyncRouter(asyncRouterMap, menuCode) {
  const accessedRouters = asyncRouterMap.filter(route => {
    if (hasPermission(menuCode, route)) {
      if (route.children && route.children.length) {
        route.children = filterAsyncRouter(route.children, menuCode)
      }
      return true
    }
    return false
  })
  return accessedRouters
}

const permission = {
  state: {
    routers: undefined, // 所有的可用路由
    addRouters: undefined
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      // 比较路由，如果已有不再添加 通过name
      state.addRouters = routers
      state.routers = constRouters.concat(routers)
    }
  },
  actions: {
    GENERATE_ASYNC_ROUTES ({ commit }, permissions) {
      return new Promise(resolve => {
        // 通过code来过滤不再 menuCodes中的路由
        const access = filterAsyncRouter(asyncRouters, permissions)
        commit('SET_ROUTERS', access)
        resolve()
      })
    },
  },
  getters: {
    addedRouters (state) {
      return state.addRouters
    },
    accessedRouters (state) {
      return state.routers
    },
    router4Menu (state) { // UI menu for home
      let len = state.routers.length
      let menus = []
      let header = ''
      for (let i = 0;i < len; i++) {
        let item = state.routers[i]
        if (item.hidden) {
          continue;
        }
        if (item.header && item.header !== header) {
          header = item.header
          menus.push({header})
        }
        let itemN = {path: item.path, title: item.title, icon: item.icon, name: item.name }
        let children = item.children
        if (children) {
          // 如果只有一个直接 第一个
          if (children.length == 1) {
            let child = children[0]
            if (child.hidden) {
              continue;
            }
            let childN = {path: child.path, title: child.title, icon: child.icon, name: child.name }
            menus.push(childN)
            continue;
          }
          let childrenN = []
          for (let child of item.children) {
            if (child.hidden) {
              continue;
            }
            let childN = {path: child.path, title: child.title, icon: child.icon, name: child.name}
            childrenN.push(childN)
          }
          itemN.children = childrenN
        }
        menus.push(itemN)
      }
      return menus
    }
  }
}

export default permission
