import { Layout } from '../index'

const User = () => import(/* webpackChunkName: "users" */ '@/views/admin/user')
// r => require.ensure([], () => r(require('../../views/admin/user')), 'user')

const routes = {
  path: '/sys', component: Layout, header: 'menu.system', name: "menu.system_manage", icon: "mdi-widgets" , redirect: "/user",
  children: [
    { path: '/user', component: User, name: 'menu.users', authority: 'user:list'},
    { path: '/menu', component: User, name: 'menu.menus', authority: 'menu:list'},
    { path: '/role', component: User, name: 'menu.roles', authority: 'role:list'}
  ]
}

export default routes
