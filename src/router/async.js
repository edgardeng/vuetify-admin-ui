import widgets from './modules/widgets'
import components from './modules/components'
import { Layout } from './index'

import admin from './modules/admin'
const Notification = () => import(/* webpackChunkName: "noti" */ '@/views/notification')

export const asyncRouters = [
  widgets,
  components,
  admin,
  {
    path: '/manager', component: Layout,
    children: [
      { path: '/notification', component: Notification, name: 'menu.notification', icon: "mdi-bell" }
    ]
  },
  { path: '*', redirect: '/404', hidden: true }
]
