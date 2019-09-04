import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '@/views/auth/Login.vue';
import Layout from '@/views/layout';
import DashBoard from '@/views/dashboard';
import Profile from '@/views/profile';
import Error404 from '@/views/error/App404.vue';

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

