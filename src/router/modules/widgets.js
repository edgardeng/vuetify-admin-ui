import { Layout } from '../index'

const Icon = () => import(/* webpackChunkName: "icons" */ '@/views/widgets/icon')
const Alert = () => import(/* webpackChunkName: "alerts" */ '@/views/widgets/alert')
const Avatar = () => import(/* webpackChunkName: "avatars" */ '@/views/widgets/avatar')

const routes = {
  path: '/widgets', component: Layout, header: 'menu.widget', name: 'menu.widget', redirect: "/widget/icon", icon: "mdi-widgets",
  children: [
    { path: "/widget/icon", name: "menu.icon", component: Icon },
    { path: "/widget/alert", name: "menu.alert", component: Alert },
    { path: "/widget/avatar", name: "menu.avatar", component: Avatar }
  ]
}

export default routes
