/**
 * 登录页面
 */

import { apis } from '~/app/common/apis'

import loginCss from './styled'

export const schema = {
  type: 'page',
  css: loginCss,
  body: {
    type: 'wrapper',
    className: 'login-wrapper b r-2x',
    body: [
      {
        type: 'html',
        html: `
          <h1 class="login-title">
            <img src="/static/images/logo_grey.png" />
            <p>优兰教育™ 管理后台系统</p>
          </h1>
        `,
      },
      {
        $preset: 'forms.loginForm',
      },
    ],
  },
  preset: {
    forms: {
      loginForm: {
        type: 'form',
        className: 'login-form',
        title: '',
        mode: 'horizontal',
        horizontal: {
          left: 'col-sm-2',
          right: 'col-sm-9',
        },
        wrapWithPanel: false,
        autoFocus: false,
        api: apis.selfLogin,
        redirect: '/',
        controls: [
          {
            type: 'text',
            name: 'username',
            required: true,
            placeholder: '请输入用户名',
            label: '用户名',
            size: 'full',
          },
          {
            type: 'password',
            name: 'password',
            label: '密码',
            required: true,
            placeholder: '请输入密码',
            size: 'full',
          },
          {
            type: 'submit',
            level: 'primary',
            label: '登录',
            inputClassName: 'w-full',
            horizontal: {
              left: 'col-sm-2',
              right: 'col-sm-9',
            },
          },
        ],
      },
    },
  },
}
