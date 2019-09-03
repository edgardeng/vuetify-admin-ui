import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Snackbar from "./components/message";
import MessageConfirm from "./components/confirm";

import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@mdi/font/css/materialdesignicons.css'

import router from './router';
import store from './store';
import i18n from './i18n'

Vue.config.productionTip = false
Vue.prototype.$message = Snackbar;  // Vue App
Vue.prototype.$confirm = MessageConfirm;  // Vue App
Vue.prototype.$vuetify = vuetify;  // Vue App

store.commit('INIT_STATE', false) // Init Application with default state

router.beforeEach((to, from, next) => {
  store.commit('SET_LOADING', true)
  let menus = store.getters.authorities
  if (!menus) { // 判断当前用户是否已拉取完user_info信息
    // get user's info and menus
    // console.log('no authorities')
    store.dispatch('USER_INFO').then(info => { // 拉取user_info
      let auth = store.getters.authorities
      // if (!auth) {
      //   if (to.path === '/login') {
      //     next()
      //   } else {
      //     next({
      //       path: '/login',
      //       query: { redirect: to.fullPath }
      //     })
      //   }
      //   console.log(' no auth ')
      //   return
      // }
      console.log('get store authorities: ', auth)
      store.dispatch('GENERATE_ASYNC_ROUTES', auth).then(info => {
        let add = store.getters.addedRouters
        if (add) {
          router.addRoutes(add) // 动态添加 可访问的路由表
        }
      })
      if (to.path === '/login') {
        next('/')
      } else {
        next()
      }
    }).catch(error => {
      // console.log('main js USER_INFO catch error')
      console.log(error)
      if (to.path !== '/login') {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
    })
  } else {
    next() // 有 token 有menus
  }
})

router.afterEach(transition => {
  // console.log('main is going  ok')
  setTimeout(() => {
    store.commit('SET_LOADING', false)
  }, 500)
})

new Vue({
  vuetify,
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
