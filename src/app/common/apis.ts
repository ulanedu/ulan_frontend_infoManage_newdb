/**
 * 定义需要的 api
 */

import { getStore, setStore, clearStore } from '@core/utils/store'
import { setAppLimits } from '@ovine/core/lib/routes/limit/exports'
import { publish } from '@ovine/core/lib/utils/message'

import { storeKeys, msgKeys } from '../constants'
import mockSource from './mock'

export const apis = {
  selfLogin: {
    url: 'POST api/backendManage/admin/login',
    onError: () => {
      publish(msgKeys.updateAuthLoginCode, '')
    },
    onSuccess: (source) => {
      const { code, msg, data } = source
      if (code === 0) {
        setStore(storeKeys.token, data.token)
        setAppLimits('*')
        // 为了更新页面获取到的token
        window.location.reload()
        source.msg = '您已登录登录本系统'
      } else {
        clearStore(storeKeys.token)
        source.msg = msg || '登录异常'
      }
      return source
    },
  },
  selfRegister: {
    url: 'POST ovapi/user/demo_register',
    actionDesc: '测试用户注册',
  },
  selfLogout: {
    url: `GET api/backendManage/admin/logout/${getStore(storeKeys.token)}`,
    actionDesc: '退出登录',
    onError: () => {
      publish(msgKeys.updateAuthLoginCode, '')
    },
    onSuccess: async (source) => {
      const { code, msg } = source
      if (code === 0) {
        source.msg = msg
      } else {
        source.msg = msg || '操作异常'
      }
      return source
    },
  },
  getSelfInfo: {
    url: `GET api/backendManage/admin/getAdminInfo/${getStore(storeKeys.token)}`,
    actionDesc: '获取个人信息',
    onError: () => {
      publish(msgKeys.updateAuthLoginCode, '')
    },
    onSuccess: async (source) => {
      const { code, msg } = source
      if (code === 0) {
        source.msg = msg
      } else {
        source.msg = msg || '获取异常'
        window.location.reload()
      }
      return source
    },
  },
  editSelfInfo: {
    url: 'PUT ovapi/user/info',
    actionDesc: '编辑个人信息',
    mockSource,
  },
  changeSelfPwd: {
    url: 'PUT ovapi/user/password',
    actionDesc: '修改个人密码',
    mockSource,
  },
  uploadImg: {
    url: 'POST api/backendManage/admin/uploadImg',
    actionDesc: '上传照片',
    onError: () => {
      publish(msgKeys.updateAuthLoginCode, '')
    },
    onSuccess: async (source) => {
      const { code, msg } = source
      if (code === 0) {
        source.msg = msg
      } else {
        source.msg = msg || '上传异常'
      }
      return source
    },
  },
  pageStat: {
    url: 'POST ovapi/stat/data',
    actionDesc: '页面数据统计',
    mockSource,
  },
  sysRoleId: {
    url: 'GET ovapi/system/role/filter',
    actionDesc: '查看系统角色',
    mockSource,
    onSuccess: (source) => {
      const options = source.data.items.map((i) => {
        return {
          label: `${i.name} (${i.id})`,
          value: i.id,
        }
      })
      source.data = { options }
      return source
    },
  },
  sysUserInfo: {
    url: 'GET ovapi/system/user/item/$id',
    actionDesc: '查看操作人信息',
    mockSource,
  },
}
