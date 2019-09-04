import widgets from './modules/widgets'

export const asyncRouters = [
  widgets,
  { path: '*', redirect: '/404', hidden: true }
]
