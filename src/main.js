import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import Snackbar from "./components/message";
import MessageConfirm from "./components/confirm";

// import 'roboto-fontface/css/roboto/roboto-fontface.css'
// import '@mdi/font/css/materialdesignicons.css'

import router from './router';
import store from './store';
import i18n from './i18n'

import moment from 'moment';
import './plugins/echarts';

Vue.config.productionTip = false
Vue.prototype.$message = Snackbar;  // Vue App
Vue.prototype.$confirm = MessageConfirm;  // Vue App
Vue.prototype.$vuetify = vuetify;  // Vue App
Vue.prototype.$moment = moment;  // Vue App

store.commit('INIT_STATE', false) // Init Application with default state

router.beforeEach((to, from, next) => {
  store.commit('SET_LOADING', true)
  let menus = store.getters.authorities
  // console.log('1. get auth:', menus)
  if (!menus) { // 判断当前用户是否已拉取完user_info信息
    store.dispatch('USER_INFO').then(info => { // 拉取user_info 获取 authorities
      let auth = store.getters.authorities
      // console.log('2. get auth:', auth)
      store.dispatch('GENERATE_ASYNC_ROUTES', auth).then(info => {
        let add = store.getters.addedRouters
        if (add) {
          router.addRoutes(add) // 动态添加 可访问的路由表
          // console.log('router add routes')
        }
      })
      // console.log('3. go to:', to.path)
      if (to.path === '/login') {
        next('/')
      } else {
        next()
      }
    }).catch(error => {
      if (to.path !== '/login') {
        next({
          path: '/login',
          query: { redirect: to.fullPath }
        })
      } else {
        next()
      }
      console.log(error)
    })
  } else {
    next() // 有 token 有menus
  }
})

router.afterEach(() => {

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
