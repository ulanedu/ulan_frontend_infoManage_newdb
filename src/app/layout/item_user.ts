/**
 * 顶部栏，用户头像扩展
 */

import { css, DefaultTheme } from 'styled-components'
import { getStore } from '@core/utils/store'
import { storeKeys } from '../constants'
import { ellipsis } from '@core/styled/utils'

import { apis } from '../common/apis'
import { logout } from '../user'

export const itemUserSchema = {
  type: 'lib-css',
  align: 'right',
  body: {
    type: 'service',
    name: 'headItemUserInfo',
    api: apis.getSelfInfo,
    body: {
      type: 'lib-dropdown',
      className: 'clickable',
      body: {
        type: 'html',
        className: 'item-user-content',
        html: `
        <img
          className="w-2x m-r-xs"
          src="$avatar"
          alt="avatar"
        />
        <div>$name</div>
      `,
      },
      items: [
        {
          type: 'button',
          level: 'link',
          icon: 'fa fa-edit',
          label: '编辑信息',
          actionType: 'dialog',
          dialog: {
            title: '您的个人信息',
            body: {
              type: 'form',
              api: `POST api/backendManage/admin/updateAdminInfo/${getStore(storeKeys.token)}`,
              messages: {
                fetchSuccess: '个人信息修改成功',
              },
              reload: 'headItemUserInfo',
              controls: [
                {
                  type: 'file',
                  label: '头像',
                  name: 'file',
                  reciever: {
                    method: 'POST',
                    url: 'http://localhost:5000/api/backendManage/admin/uploadImg'
                  }
                  // autoUpload: true,
                  // maxLength: 1,
                  // maxSize: 1024 * 300,
                  // width: 200,
                  // height: 200,
                  // crop: {
                  //   aspectRatio: 1,
                  // },
                },
                {
                  type: 'button',
                  actionType: 'dialog',
                  label: '上传图片',
                  dialog: {
                    type: 'page',
                    body: {
                      type: 'html',
                      html: `
                        <form method="post" action="http://localhost:5000/api/backendManage/admin/uploadImg" enctype="multipart/form-data">
                        <input type="file" size="30" name="file"/>
                        <input type="submit" value="提交信息" class="button-new" style="margin-top:15px;"/>
                        </form>
                        `
                    }
                  }
                },
                {
                  type: 'static',
                  name: 'name',
                  label: '姓名',
                  value: '$name',
                  quickEdit: true,
                },
                {
                  type: 'static',
                  name: 'sex',
                  label: '性别',
                  value: '$sex',
                  quickEdit: true,
                },
                {
                  type: 'static',
                  name: 'phonenumber',
                  label: '电话',
                  value: '$phonenumber',
                  quickEdit: true,
                },
                {
                  type: 'static',
                  name: 'email',
                  label: '邮箱',
                  value: '$email',
                  quickEdit: true,
                },
                {
                  type: 'static',
                  name: 'academy',
                  label: '学院',
                  value: '$academy',
                  quickEdit: true,
                }
              ],
            },
          },
        },
        {
          type: 'button',
          level: 'link',
          icon: 'fa fa-key',
          label: '修改密码',
          actionType: 'dialog',
          dialog: {
            title: '修改登录密码',
            size: 'sm',
            body: {
              type: 'form',
              api: `POST api/backendManage/admin/updateAdminPassword/${getStore(storeKeys.token)}`,
              messages: {
                saveSuccess: '[密码修改成功] 请使用新密码重新登录',
                saveFailed: '密码修改失败',
              },
              redirect: '/login',
              mode: 'horizontal',
              horizontal: {
                left: 'col-sm-3',
                right: 'col-sm-9',
              },
              controls: [
                {
                  type: 'password',
                  required: true,
                  name: 'oldPassword',
                  label: '旧密码',
                },
                {
                  type: 'password',
                  name: 'password',
                  required: true,
                  label: '新密码',
                },
                {
                  type: 'password',
                  name: 'confirmPassword',
                  required: true,
                  label: '重复密码',
                  validationErrors: {
                    equalsField: '两次密码输入不一致',
                  },
                  validations: {
                    equalsField: 'password',
                  },
                },
              ],
            },
          },
        },
        {
          type: 'button',
          level: 'link',
          icon: 'fa fa-reply',
          label: '退出登录',
          onClick: () => logout({ useApi: true }),
        },
      ],
    },
  },
  css: (theme: DefaultTheme) => css`
    .${theme.ns}Spinner {
      width: 25px !important;
      height: 25px !important;
    }
    .item-user-content {
      display: inline-block;
      min-width: 80px;
      img {
        width: 28px;
        height: 28px;
      }
      div {
        ${ellipsis('100px')};
        vertical-align: middle;
      }
    }
  `,
}
