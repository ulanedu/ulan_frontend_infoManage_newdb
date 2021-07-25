import { getStore } from '@core/utils/store'
import { storeKeys } from '../../../app/constants'
export const schema = {
  type: 'page',
  title: '工资报销',
  toolbar: [
    {
      'type': 'button',
      'actionType': 'dialog',
      'label': '新增支出',
      'icon': 'fa fa-plus pull-left',
      'primary': true,
      'dialog': {
        'title': '新增支出',
        'body': {
          'type': 'form',
          'name': 'sample-edit-form',
          'api': `POST /api/backendManage/financial/payroll/payroll/${getStore(storeKeys.token)}/0`,
          'data': {
            'reamrk': '无'
          },
          'controls': [
            {
              'type': 'group',
              'controls': [
                {
                  'type': 'input-group',
                  'label': '管理员',
                  'required': true,
                  'controls': [
                    {
                      'type': 'text',
                      'name': 'adminName',
                    },
                    {
                      "type": "button",
                      "label": "查询",
                      "actionType": "ajax",
                      "api": "GET /api/backendManage/financial/payroll/getAdminInfo/$adminName",
                      "feedback": {
                        "title": "管理员信息",
                        "actions": [],
                        'body': {
                          'type': 'page',
                          'body': [
                            {
                              'type': 'grid',
                              'columns': [
                                {
                                  'type': 'plain',
                                  'text': '姓名'
                                },
                                {
                                  'type': 'plain',
                                  'text': '$name'
                                },
                                {
                                  'type': 'plain',
                                  'text': '性别'
                                },
                                {
                                  'type': 'plain',
                                  'text': '$sex'
                                }
                              ]
                            },
                            {
                              'type': 'divider'
                            },
                            {
                              'type': 'grid',
                              'columns': [
                                {
                                  'type': 'plain',
                                  'text': '联系方式',
                                  'md': 3
                                },
                                {
                                  'type': 'plain',
                                  'text': '$phoneNumber',
                                  'md': 9
                                }
                              ]
                            },
                            {
                              'type': 'divider'
                            },
                            {
                              'type': 'grid',
                              'columns': [
                                {
                                  'type': 'plain',
                                  'text': '邮箱号',
                                  'md': 3
                                },
                                {
                                  'type': 'plain',
                                  'text': '$email',
                                  'md': 9
                                }
                              ]
                            },
                            {
                              'type': 'divider'
                            },
                            {
                              'type': 'grid',
                              'columns': [
                                {
                                  'type': 'plain',
                                  'text': '学院',
                                  'md': 3
                                },
                                {
                                  'type': 'plain',
                                  'text': '$academy',
                                  'md': 9
                                }
                              ]
                            }
                          ]
                        }
                      }
                    }
                  ]
                }
              ]
            },
            {
              'type': 'group',
              'controls': [
                {
                  'type': 'number',
                  'name': 'amount',
                  'label': '金额',
                  'required': true
                }
              ]
            },
            {
              'type': 'group',
              'controls': [
                {
                  'type': 'textarea',
                  'name': 'remark',
                  'label': '备注'
                },
              ]
            }
          ]
        }
      }
    }
  ],
  body: {
    type: 'tabs',
    tabs: [
      {
        title: '教员工资',
        reload: true,
        tab: {
          type: 'crud',
          syncLocation: false,
          api: 'GET /api/backendManage/financial/payroll/getPayrolls',
          headerToolbar: [
          ],
          columns: [
            {
              name: 'sid',
              label: '教员Id',
              sortable: true
            },
            {
              name: 'name',
              label: '姓名',
            },
            {
              name: 'school',
              label: '学校'
            },
            {
              name: 'major',
              label: '专业'
            },
            {
              name: 'grade',
              label: '年级'
            },
            {
              name: 'phoneNumber',
              label: '联系方式',
            },
            {
              name: 'amount',
              label: '金额'
            },
            {
              type: 'operation',
              label: '操作',
              width: '1.5cm',
              buttons: [
                {
                  type: 'button',
                  icon: 'fa fa-eye',
                  actionType: 'dialog',
                  tooltip: '查看明细',
                  dialog: {
                    'title': '工资明细',
                    "size": "lg",
                    "actions": [],
                    'body': {
                      'type': 'crud',
                      'syncLocation': false,
                      'api': 'GET /api/backendManage/financial/payroll/getBeforePayrollDetail/$sid',
                      'headerToolbar': [
                        'pagination',
                        'statistics'
                      ],
                      'columns': [
                        {
                          'name': 'daid',
                          'label': '消课Id',
                          'sortable': true
                        },
                        {
                          'name': 'title',
                          'label': '课程标题'
                        },
                        {
                          'name': 'dismissedHour',
                          'label': '消课课时',
                        },
                        {
                          'name': 'teacherFee',
                          'label': '课时费'
                        },
                        {
                          'name': 'amount',
                          'label': '金额'
                        },
                        {
                          'name': 'adminName',
                          'label': '审核人'
                        },
                        {
                          'name': 'adminReviewTime',
                          'label': '审核时间'
                        }
                      ]
                    }
                  }
                },
                {
                  type: 'button',
                  icon: 'fa fa-credit-card',
                  actionType: 'ajax',
                  tooltip: '工资结算',
                  confirmText: '您确认要结算该教员的工资吗?',
                  api: `POST /api/backendManage/financial/payroll/payroll/${getStore(storeKeys.token)}/1`
                }
              ],
              toggled: true
            }
          ]
        }
      },
      {
        title: '已完成',
        reload: true,
        tab: {
          type: 'crud',
          name: 'tab-successed',
          syncLocation: false,
          api: 'GET /api/backendManage/financial/payroll/getPayrollRecords',
          headerToolbar: [
            'export-excel',
            {
              type: 'form',
              title: '过滤条件',
              className: 'tab-filter',
              wrapWithPanel: false,
              mode: 'inline',
              target: 'tab-successed',
              controls: [
                {
                  type: 'date-range',
                  label: '时间范围',
                  name: 'dateRange',
                  format: 'YYYY-MM-DD',
                  joinValues: false,
                },
                {
                  type: 'submit',
                  label: '搜索'
                },
              ],
            }
          ],
          columns: [
            {
              name: 'prid',
              label: '记录Id',
              sortable: true
            },
            {
              name: 'subjectClass',
              label: '发放对象',
              type: 'mapping',
              map: {
                0: '员工',
                1: '教员'
              }
            },
            {
              name: 'subjectClass',
              label: '姓名',
              type: 'mapping',
              map: {
                0: '$adminName',
                1: '$teacherName'
              }
            },
            {
              name: 'subjectClass',
              label: '联系方式',
              type: 'mapping',
              map: {
                0: '$adminPhoneNumber',
                1: '$teacherPhoneNumber'
              }
            },
            {
              name: 'amount',
              label: '金额'
            },
            {
              name: 'aName',
              label: '发放人'
            },
            {
              name: 'time',
              label: '发放时间'
            },
            {
              name: 'remark',
              label: '备注',
              quickEdit: {
                "saveImmediately": {
                  "api": "POST /api/backendManage/financial/payroll/updateRemark"
                }
              }
            },
            {
              type: 'operation',
              label: '操作',
              width: '1.5cm',
              buttons: [
                {
                  type: 'button',
                  icon: 'fa fa-eye',
                  actionType: 'dialog',
                  tooltip: '查看明细',
                  dialog: {
                    'title': '工资明细',
                    "actions": [],
                    'body': {
                      'type': 'crud',
                      'syncLocation': false,
                      'api': 'GET /api/backendManage/financial/payroll/getPayrollDetail/$prid',
                      'headerToolbar': [
                        'pagination',
                        'statistics'
                      ],
                      'columns': [
                        {
                          'name': 'daid',
                          'label': '消课Id',
                          'sortable': true
                        },
                        {
                          'name': 'title',
                          'label': '课程标题'
                        },
                        {
                          'name': 'dismissedHour',
                          'label': '消课课时',
                        },
                        {
                          'name': 'teacherFee',
                          'label': '课时费'
                        },
                        {
                          'name': 'amount',
                          'label': '金额'
                        },
                        {
                          'name': 'adminName',
                          'label': '审核人'
                        },
                        {
                          'name': 'adminReviewTime',
                          'label': '审核时间'
                        }
                      ]
                    }
                  }
                },
                {
                  type: 'button',
                  icon: 'fa fa-times text-danger',
                  actionType: 'ajax',
                  tooltip: '删除',
                  confirmText: '您确认要删除?',
                  api: '/api/v2/billsdelete/$bills_status'
                }
              ],
              toggled: true
            }
          ]
        }
      }
    ]
  }
}

