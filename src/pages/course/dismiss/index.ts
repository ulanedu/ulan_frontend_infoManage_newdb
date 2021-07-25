import { getStore } from '@core/utils/store'
import { storeKeys } from '../../../app/constants'

export const schema = {
  'type': 'page',
  'title': '消课审核',
  'toolbar': [],
  'body': {
    'type': 'tabs',
    'tabs': [
      {
        'title': '待审核',
        'reload': true,
        'tab': {
          'type': 'crud',
          'syncLocation': false,
          'api': 'GET /api/backendManage/course/dismissal/getDismissalCourses/0',
          'loadDataOnce': false,
          'placeholder': '暂无数据',
          'headerToolbar': [
            'export-excel',
            'pagination',
            "statistics"
          ],
          'columns': [
            {
              'name': 'daid',
              'label': '消课Id',
              'sortable': true
            },
            {
              'name': 'title',
              'label': '课程主题'
            },
            {
              'name': 'teacherName',
              'label': '教员姓名',
              'searchable': true
            },
            {
              'name': 'teacherPhoneNumber',
              'label': '联系方式',
              'searchable': true
            },
            {
              'name': 'dismissedHour',
              'label': '消课课时'
            },
            {
              'name': 'userReviewStatus',
              'label': '用户审核状态',
              'type': 'mapping',
              'map': {
                0: '未通过',
                1: '已通过'
              },
            },
            {
              'name': 'applicationTime',
              'label': '申请时间'
            },
            {
              'type': 'operation',
              'label': '操作',
              'width': '2cm',
              'buttons': [
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-eye',
                  'actionType': 'dialog',
                  'tooltip': '查看详情',
                  'dialog': {
                    'title': '申请详情($title: $dismissedHour小时)',
                    'actions': '',
                    'body': {
                      'type': 'page',
                      'initApi': 'GET /api/backendManage/course/dismissal/getDismissalCourse/$daid',
                      'loadDataOnce': true,
                      'body': [
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '教师',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$teacherName',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '电话',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$teacherPhoneNumber',
                              'md': 4
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
                              'text': '学生',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$studentName',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '电话',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$studentPhoneNumber',
                              'md': 4
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
                              'text': '科目',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$subject',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '年级',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$grade',
                              'md': 4
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
                              'text': '总课时',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$hours',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '已消课时',
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$completedHours',
                              'md': 3
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                        },
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '课时费',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$userFee',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '课时薪酬',
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$teacherFee',
                              'md': 3
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                        },
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '补习时间',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '$courseTime',
                              'md': 8
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                        },
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '补习地点',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '$coursePlace',
                              'md': 8
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                          'lineStyle': 'solid'
                        },
                        {
                          'type': 'plain',
                          'text': '课程内容'
                        },
                        '<p/>'
                        ,
                        {
                          'type': 'plain',
                          'text': '$courseContent'
                        },
                        {
                          'type': 'divider',
                        },
                        {
                          'type': 'plain',
                          'text': '用户评价'
                        },
                        '<p/>'
                        ,
                        {
                          'type': 'plain',
                          'text': '$userEvaluation'
                        },
                      ]
                    }
                  }
                },
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-check text-success',
                  'tooltip': '通过申请',
                  'actionType': 'ajax',
                  'confirmText': '确定要通过教员 【 $teacherName 】 的消课申请吗 ？',
                  'api': `POST /api/backendManage/course/dismissal/passApplication/$daid/${getStore(storeKeys.token)}`
                },
                {
                  'type': 'button',
                  'label': '',
                  'tooltip': '拒绝申请',
                  'icon': 'fa fa-times text-danger',
                  'actionType': 'ajax',
                  'confirmText': '确定要拒绝教员 【 $teacherName 】 的消课申请吗 ？',
                  'api': `POST /api/backendManage/course/dismissal/refuseApplication/$daid/${getStore(storeKeys.token)}`
                }
              ],
              'placeholder': '-',
              'fixed': 'right'
            }
          ]
        },
      },
      {
        'title': '已通过',
        'reload': true,
        'tab': {
          'type': 'crud',
          'syncLocation': false,
          'api': 'GET /api/backendManage/course/dismissal/getDismissalCourses/1',
          'placeholder': '暂无数据',
          'headerToolbar': [
            'export-excel',
            'pagination',
            "statistics"
          ],
          'columns': [
            {
              'name': 'daid',
              'label': '消课Id',
              'sortable': true
            },
            {
              'name': 'title',
              'label': '课程主题'
            },
            {
              'name': 'teacherName',
              'label': '教员姓名',
              'searchable': true
            },
            {
              'name': 'teacherPhoneNumber',
              'label': '联系方式',
              'searchable': true
            },
            {
              'name': 'dismissedHour',
              'label': '消课课时'
            },
            {
              'name': 'userReviewStatus',
              'label': '用户审核状态',
              'type': 'mapping',
              'map': {
                0: '未通过',
                1: '已通过'
              },
            },
            {
              'name': 'adminName',
              'label': '审核人'
            },
            {
              'name': 'adminReviewTime',
              'label': '审核时间'
            },
            {
              'name': 'payrollRecordId',
              'label': '是否结算',
              'type': 'mapping',
              'map': {
                '-1': '未结算',
                '*': '已结算'
              },
            },
            {
              'type': 'operation',
              'label': '操作',
              'width': '',
              'buttons': [
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-eye',
                  'actionType': 'dialog',
                  'tooltip': '查看详情',
                  'dialog': {
                    'title': '申请详情($title: $dismissedHour小时)',
                    'actions': '',
                    'body': {
                      'type': 'page',
                      'initApi': 'GET /api/backendManage/course/dismissal/getDismissalCourse/$daid',
                      'loadDataOnce': true,
                      'body': [
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '教师',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$teacherName',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '电话',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$teacherPhoneNumber',
                              'md': 4
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
                              'text': '学生',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$studentName',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '电话',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$studentPhoneNumber',
                              'md': 4
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
                              'text': '科目',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$subject',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '年级',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$grade',
                              'md': 4
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
                              'text': '总课时',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$hours',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '已消课时',
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$completedHours',
                              'md': 3
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                        },
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '课时费',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$userFee',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '课时薪酬',
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$teacherFee',
                              'md': 3
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                        },
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '补习时间',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '$courseTime',
                              'md': 8
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                        },
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '补习地点',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '$coursePlace',
                              'md': 8
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                          'lineStyle': 'solid'
                        },
                        {
                          'type': 'plain',
                          'text': '课程内容'
                        },
                        '<p/>'
                        ,
                        {
                          'type': 'plain',
                          'text': '$courseContent'
                        },
                        {
                          'type': 'divider',
                        },
                        {
                          'type': 'plain',
                          'text': '用户评价'
                        },
                        '<p/>'
                        ,
                        {
                          'type': 'plain',
                          'text': '$userEvaluation'
                        },
                      ]
                    }
                  }
                }
              ],
              'placeholder': '-',
              'fixed': 'right'
            }
          ]
        },
      },
      {
        'title': '已拒绝',
        'reload': true,
        'tab': {
          'type': 'crud',
          'syncLocation': false,
          'api': 'GET /api/backendManage/course/dismissal/getDismissalCourses/2',
          'loadDataOnce': false,
          'placeholder': '暂无数据',
          'headerToolbar': [
            'export-excel',
            'pagination',
            "statistics"
          ],
          'columns': [
            {
              'name': 'daid',
              'label': '消课Id',
              'sortable': true
            },
            {
              'name': 'title',
              'label': '课程主题'
            },
            {
              'name': 'teacherName',
              'label': '教员姓名',
              'searchable': true
            },
            {
              'name': 'teacherPhoneNumber',
              'label': '联系方式',
              'searchable': true
            },
            {
              'name': 'dismissedHour',
              'label': '消课课时'
            },
            {
              'name': 'userReviewStatus',
              'label': '用户审核状态',
              'type': 'mapping',
              'map': {
                0: '未通过',
                1: '已通过'
              },
            },
            {
              'name': 'adminName',
              'label': '审核人'
            },
            {
              'name': 'adminReviewTime',
              'label': '审核时间'
            },
            {
              'type': 'operation',
              'label': '操作',
              'width': '',
              'buttons': [
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-eye',
                  'actionType': 'dialog',
                  'tooltip': '查看详情',
                  'dialog': {
                    'title': '申请详情($title: $dismissedHour小时)',
                    'actions': '',
                    'body': {
                      'type': 'page',
                      'initApi': 'GET /api/backendManage/course/dismissal/getDismissalCourse/$daid',
                      'loadDataOnce': true,
                      'body': [
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '教师',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$teacherName',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '电话',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$teacherPhoneNumber',
                              'md': 4
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
                              'text': '学生',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$studentName',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '电话',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$studentPhoneNumber',
                              'md': 4
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
                              'text': '科目',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$subject',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '年级',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$grade',
                              'md': 4
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
                              'text': '总课时',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$hours',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '已消课时',
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$completedHours',
                              'md': 3
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                        },
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '课时费',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$userFee',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '课时薪酬',
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$teacherFee',
                              'md': 3
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                        },
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '补习时间',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '$courseTime',
                              'md': 8
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                        },
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '补习地点',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '$coursePlace',
                              'md': 8
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                          'lineStyle': 'solid'
                        },
                        {
                          'type': 'plain',
                          'text': '课程内容'
                        },
                        '<p/>'
                        ,
                        {
                          'type': 'plain',
                          'text': '$courseContent'
                        },
                        {
                          'type': 'divider',
                        },
                        {
                          'type': 'plain',
                          'text': '用户评价'
                        },
                        '<p/>'
                        ,
                        {
                          'type': 'plain',
                          'text': '$userEvaluation'
                        },
                      ]
                    }
                  }
                }
              ],
              'placeholder': '-',
              'fixed': 'right'
            }
          ]
        },
      }
    ]
  }
}
