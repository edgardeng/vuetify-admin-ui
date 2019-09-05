import widgets from './modules/widgets'
import admin from './modules/admin'

export const asyncRouters = [
  widgets,
  admin,
  { path: '*', redirect: '/404', hidden: true }
]
