import Vue from 'vue';
import VueRouter from 'vue-router';

export const Layout = () => import(/* webpackChunkName: "layout" */'@/views/layout')

const Login = () => import(/* webpackChunkName: "login" */ '@/views/auth/Login')
const DashBoard = () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard')
const Profile = () => import(/* webpackChunkName: "profile" */ '@/views/profile')
const Error404 = () => import(/* webpackChunkName: "404" */ '@/views/error/404')


Vue.use(VueRouter)


export const constRouters = [
  { path: '/login', name: 'Login', component: Login, hidden: true },
  { path: '/', component: Layout, header: 'menu.home', redirect: "/dashboard",
    children: [
      { path: "/dashboard", name: "menu.dashboard", component: DashBoard, title: "Home", icon: "mdi-view-dashboard" }
    ]
  },
  { path: '/', component: Layout,
    children: [
      { path: "/profile", name: "menu.profile", component: Profile, title: "Profile", icon: "mdi-face-profile" }
    ]
  },
  { path: '/403', component: Login, hidden: true },
  { path: '/404', component: Error404,  hidden: true }
]

export default new VueRouter({
  // mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: constRouters
})

