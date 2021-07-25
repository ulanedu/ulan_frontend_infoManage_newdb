/**
 * 用户模块
 * ---
 * 以下均为 demo 应用实现，具体请根据自己需求编写代码
 */

import { toast } from 'amis'

import { app } from '@core/app'
import { setAppLimits } from '@core/routes/limit/exports'
import { clearStore, getStore } from '@core/utils/store'

import { apis } from './common/apis'
import { storeKeys } from './constants'

let userInfo: any = {}

/**
 * 系统登录的鉴权方法。返回值 true: 用户通过登陆认证。 false：不通过登陆认证，需要重新登录。
 * ---
 * 此处只是demo举例，其他逻辑可以自行添加
 */
export async function onAuth() {
  try {
    const isVaild = await fetchUserInfo()
    // 检查用户接口权限字符串
    if (isVaild) {
      setAppLimits('*')
      // location.href = 'http://localhost:7050/'
      return true
    }
    return false

  } catch (err) {
    return false
  }
}

// 验证token是否合法
export async function fetchUserInfo() {
  const verifyTokenIsVaild = {
    url: `GET api/backendManage/admin/isVaildToken/${getStore(storeKeys.token)}`,
    actionDesc: '验证Token是否合法',
  }
  return app.request(verifyTokenIsVaild).then((source) => {
    const { isVaild } = source.data
    return isVaild
  })
}

// 获取缓存的用户信息
export function getUserInfo(callback?: (info: any) => void) {
  if (callback) {
    fetchUserInfo().then(callback)
  }
  return userInfo
}

// 退出登录
export function logout(option?: { tip?: string; useApi?: boolean }) {
  const { tip = '您已经成功退出登录', useApi = false } = option || {}

  app.routerHistory.push('/login')
  toast.info(tip, '系统提示')
  clearStore(storeKeys.token)
  if (useApi) {
    app.request(apis.selfLogout)
  }
}

// 判断用户是否是登陆状态
export function isLogin() {
  return !!getStore(storeKeys.token)
}
