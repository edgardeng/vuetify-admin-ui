import Cookies from 'js-cookie'

export function getObject(obj) {
  return Cookies.get(obj)
}

export function setObject(obj, key) {
  if (!key) {
    return Cookies.remove(obj)
  }
  let a = { expires: 3 } // 所有的cookie 3 天
  return Cookies.set(obj, key, a)
}
