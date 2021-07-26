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
          'initApi': 'GET /api/backendManage/financial/payroll/getOptions',
          'data': {
            'reamrk': '无'
          },
          'controls': [
            {
              'type': 'group',
              'controls': [
                {
                  "label": "选择对象",
                  "type": "select",
                  "name": "adminId",
                  "searchable": true,
                  'required': true,
                  "source": "${Admins}"
                },
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
                  'label': '备注',
                  'required': true
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
            'export-excel',
            'pagination',
            "statistics"
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
              width: '2cm',
              buttons: [
                {
                  type: 'button-group',
                  buttons: [
                    {
                      type: 'button',
                      label: '明细',
                      actionType: 'dialog',
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
                      label: '结算',
                      level: 'success',
                      actionType: 'dialog',
                      dialog: {
                        'data': {
                          'remark': '无',
                          'sid': '${sid}',
                          'amount': '${amount}'
                        },
                        'title': '工资结算',
                        'body': {
                          'type': 'form',
                          'name': 'sample-edit-form',
                          'api': `POST /api/backendManage/financial/payroll/payroll/${getStore(storeKeys.token)}/1`,
                          'controls': [
                            {
                              'type': 'group',
                              'controls': [
                                {
                                  'type': 'plain',
                                  'name': 'sid',
                                  'label': '教员Id'
                                },
                                {
                                  'type': 'plain',
                                  'name': 'amount',
                                  'label': '金额'
                                }
                              ]
                            },
                            {
                              'type': 'group',
                              'controls': [
                                {
                                  'type': 'textarea',
                                  'name': 'remark',
                                  'label': '备注',
                                  'required': true
                                }
                              ]
                            }
                          ]
                        },
                        'confirmText': '您确认要结算该教员的工资吗?',
                      }
                    }
                  ]
                }
              ]
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
            },
            'pagination',
            "statistics"
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
              width: '2cm',
              buttons: [
                {
                  type: 'button-group',
                  buttons: [
                    {
                      type: 'button',
                      label: '明细',
                      actionType: 'dialog',
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
                      label: '删除',
                      level: 'danger',
                      actionType: 'ajax',
                      confirmText: '您确认要删除?',
                      api: '/api/v2/billsdelete/$bills_status'
                    }
                  ]
                }
              ]
            }
          ]
        }
      }
    ]
  }
}

