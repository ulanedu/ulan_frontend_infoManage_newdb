import { getStore } from '@core/utils/store'
import { storeKeys } from '../../../app/constants'
export const schema = {
  'type': 'page',
  'title': '师资管理',
  'body': {
    'type': 'tabs',
    'tabs': [
      {
        'title': '现有师资',
        'reload': true,
        'tab': {
          'type': 'crud',
          'syncLocation': false,
          'api': 'GET /api/backendManage/personnel/teacher/getTeachers/1',
          'headerToolbar': [
            'export-excel',
            'pagination',
            "statistics"
          ],
          'affixHeader': true,
          'columnsTogglable': 'auto',
          'placeholder': '暂无数据',
          'columns': [
            {
              'name': 'tid',
              'label': '教员Id',
              'sortable': true
            },
            {
              'name': 'name',
              'label': '姓名',
              'searchable': true
            },
            {
              'name': 'school',
              'label': '学校',
            },
            {
              'name': 'major',
              'label': '专业',
            },
            {
              'name': 'grade',
              'label': '年级',
            },
            {
              'name': 'phoneNumber',
              'label': '联系方式',
              'searchable': true
            },
            {
              'type': 'operation',
              'label': '操作',
              'width': '2cm',
              'buttons': [
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-id-card-o',
                  'actionType': 'dialog',
                  'actions': '',
                  'tooltip': '查看简历',
                  'dialog': {
                    'title': '$name的简历',
                    'actions': '',
                    'body': {
                      'type': 'page',
                      'initApi': 'GET /api/backendManage/personnel/getTeacherResume/$tid',
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
                            },
                            {
                              'type': 'plain',
                              'text': '民族'
                            },
                            {
                              'type': 'plain',
                              'text': '$nation'
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
                              'text': '邮箱',
                              'md': 2,
                            },
                            {
                              'type': 'plain',
                              'text': '$email',
                              'md': 5,
                            },
                            {
                              'type': 'plain',
                              'text': '电话',
                              'md': 2,
                            },
                            {
                              'type': 'plain',
                              'text': '$phoneNumber',
                              'md': 3,
                            },
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
                              'text': '擅长科目',
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$goodSubjects',
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
                              'text': '兴趣爱好',
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$hobby',
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
                              'text': '学校',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$school',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '专业',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$major',
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
                              'md': 3
                            }
                          ]
                        },
                        {
                          'type': 'divider'
                        },
                        {
                          'type': 'plain',
                          'text': '所获荣誉'
                        },
                        '<p />',
                        {
                          'type': 'plain',
                          'text': '$honours'
                        },
                        {
                          'type': 'divider'
                        },
                        {
                          'type': 'plain',
                          'text': '教学经历'
                        },
                        '<p />',
                        {
                          'type': 'plain',
                          'text': '$teachExperience'
                        },
                        {
                          'type': 'divider'
                        },
                        {
                          'type': 'plain',
                          'text': '自我评价'
                        },
                        '<p />',
                        {
                          'type': 'plain',
                          'text': '$selfEvaluation'
                        },
                        {
                          'type': 'divider'
                        },
                        {
                          'type': 'plain',
                          'text': '空闲时间'
                        },
                        '<p />',
                        {
                          'type': 'plain',
                          'text': '$freeTime'
                        }
                      ]
                    }
                  }
                },
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-commenting-o',
                  'actionType': 'drawer',
                  'tooltip': '教员评价',
                  'drawer': {
                    'size': 'md',
                    'position': 'right',
                    'title': '教员评价',
                    'actions': '',
                    'body': [
                      {
                        'type': 'crud',
                        'api': 'GET /api/backendManage/personnel/getTeacherEvaluation/$tid',
                        'headerToolbar': [
                          {
                            'type': 'button',
                            'actionType': 'dialog',
                            'label': '新增',
                            'icon': 'fa fa-plus pull-left',
                            'primary': true,
                            'dialog': {
                              'title': '新增评价',
                              'body': {
                                'type': 'form',
                                'name': 'sample-edit-form',
                                'api': `POST /api/backendManage/personnel/evaluateTeacher/$tid/${getStore(storeKeys.token)}`,
                                'controls': [
                                  {
                                    'type': 'textarea',
                                    'name': 'content',
                                    'label': '评价内容',
                                    'required': true
                                  }
                                ]
                              }
                            }
                          }
                        ],
                        'loadDataOnce': true,
                        'columns': [
                          {
                            'name': 'teid',
                            'label': 'id',
                            'sortable': true
                          },
                          {
                            'name': 'content',
                            'label': '评价内容',
                          },
                          {
                            'name': 'adminName',
                            'label': '评价人',
                          },
                          {
                            'name': 'time',
                            'label': '评价时间',
                          },
                          {
                            'type': 'operation',
                            'label': '操作',
                            'width': '',
                            'buttons': [
                              {
                                'type': 'button',
                                'label': '',
                                'icon': 'fa fa-close text-danger',
                                'tooltip': '删除',
                                'actionType': 'ajax',
                                'confirmText': '确定要删除该条评价?',
                                'api': 'POST /api/backendManage/personnel/deleteTeacherEvaluation/$teid'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  'type': 'button',
                  'label': '',
                  'tooltip': '解除合约',
                  'icon': 'fa fa-user-times text-danger',
                  'actionType': 'ajax',
                  'confirmText': '确定要和$name解除合约吗?',
                  'api': 'POST /api/backendManage/personnel/updateContractStatus/$tid'
                }
              ],
              'placeholder': '-',
              'fixed': 'right'
            }
          ]
        }
      },
      {
        'title': '待审师资',
        'reload': true,
        'tab': {
          'type': 'crud',
          'syncLocation': false,
          'api': 'GET /api/backendManage/personnel/teacher/getTeachers/0',
          'headerToolbar': [
            'export-excel',
            'pagination',
            "statistics"
          ],
          'affixHeader': true,
          'columnsTogglable': 'auto',
          'placeholder': '暂无数据',

          'columns': [
            {
              'name': 'tid',
              'label': '教员Id',
              'sortable': true
            },
            {
              'name': 'name',
              'label': '姓名',
              'searchable': true
            },
            {
              'name': 'school',
              'label': '学校',
            },
            {
              'name': 'major',
              'label': '专业',
            },
            {
              'name': 'grade',
              'label': '年级',
            },
            {
              'name': 'phoneNumber',
              'label': '联系方式',
              'searchable': true
            },
            {
              'type': 'operation',
              'label': '操作',
              'width': '2cm',
              'buttons': [
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-id-card-o',
                  'actionType': 'dialog',
                  'actions': '',
                  'tooltip': '查看简历',
                  'dialog': {
                    'size': 'md',
                    'position': 'right',
                    'title': '$name的简历',
                    'actions': '',
                    'body': {
                      'type': 'page',
                      'initApi': 'GET /api/backendManage/personnel/getTeacherResume/$tid',
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
                            },
                            {
                              'type': 'plain',
                              'text': '民族'
                            },
                            {
                              'type': 'plain',
                              'text': '$nation'
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
                              'text': '邮箱',
                              'md': 2,
                            },
                            {
                              'type': 'plain',
                              'text': '$email',
                              'md': 5,
                            },
                            {
                              'type': 'plain',
                              'text': '电话',
                              'md': 2,
                            },
                            {
                              'type': 'plain',
                              'text': '$phoneNumber',
                              'md': 3,
                            },
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
                              'text': '擅长科目',
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$goodSubjects',
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
                              'text': '兴趣爱好',
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$hobby',
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
                              'text': '学校',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$school',
                              'md': 4
                            },
                            {
                              'type': 'plain',
                              'text': '专业',
                              'md': 2
                            },
                            {
                              'type': 'plain',
                              'text': '$major',
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
                              'md': 3
                            }
                          ]
                        },
                        {
                          'type': 'divider'
                        },
                        {
                          'type': 'plain',
                          'text': '所获荣誉'
                        },
                        '<p />',
                        {
                          'type': 'plain',
                          'text': '$honours'
                        },
                        {
                          'type': 'divider'
                        },
                        {
                          'type': 'plain',
                          'text': '教学经历'
                        },
                        '<p />',
                        {
                          'type': 'plain',
                          'text': '$teachExperience'
                        },
                        {
                          'type': 'divider'
                        },
                        {
                          'type': 'plain',
                          'text': '自我评价'
                        },
                        '<p />',
                        {
                          'type': 'plain',
                          'text': '$selfEvaluation'
                        },
                        {
                          'type': 'divider'
                        },
                        {
                          'type': 'plain',
                          'text': '空闲时间'
                        },
                        '<p />',
                        {
                          'type': 'plain',
                          'text': '$freeTime'
                        }
                      ]
                    }
                  }
                },
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-commenting-o',
                  'actionType': 'drawer',
                  'tooltip': '教员评价',
                  'drawer': {
                    'size': 'md',
                    'position': 'right',
                    'title': '教员评价',
                    'actions': '',
                    'body': [
                      {
                        'type': 'crud',
                        'api': 'GET /api/backendManage/personnel/getTeacherEvaluation/$tid',
                        'headerToolbar': [
                          {
                            'type': 'button',
                            'actionType': 'dialog',
                            'label': '新增',
                            'icon': 'fa fa-plus pull-left',
                            'primary': true,
                            'dialog': {
                              'title': '新增评价',
                              'body': {
                                'type': 'form',
                                'name': 'sample-edit-form',
                                'api': `POST /api/backendManage/personnel/evaluateTeacher/$tid/${getStore(storeKeys.token)}`,
                                'controls': [
                                  {
                                    'type': 'textarea',
                                    'name': 'content',
                                    'label': '评价内容',
                                    'required': true
                                  }
                                ]
                              }
                            }
                          }
                        ],
                        'loadDataOnce': true,
                        'columns': [
                          {
                            'name': 'teid',
                            'label': 'id',
                            'sortable': true
                          },
                          {
                            'name': 'content',
                            'label': '评价内容',
                          },
                          {
                            'name': 'adminName',
                            'label': '评价人',
                          },
                          {
                            'name': 'time',
                            'label': '评价时间',
                          },
                          {
                            'type': 'operation',
                            'label': '操作',
                            'width': '',
                            'buttons': [
                              {
                                'type': 'button',
                                'label': '',
                                'icon': 'fa fa-close text-danger',
                                'actionType': 'ajax',
                                'tooltip': '删除',
                                'confirmText': '确定要删除该条评价?',
                                'api': 'POST /api/backendManage/personnel/deleteTeacherEvaluation/$teid'
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-user-plus text-success',
                  'actionType': 'ajax',
                  'tooltip': '签约',
                  'confirmText': '确定要将$name纳为师资吗?',
                  'api': 'POST /api/backendManage/personnel/updateContractStatus/$tid'
                }
              ],
              'placeholder': '-',
              'fixed': 'right'
            }
          ]
        }
      }
    ]
  }
}
