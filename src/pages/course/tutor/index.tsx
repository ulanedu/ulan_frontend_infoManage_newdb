export const schema = {
  type: 'page',
  title: '家教课管理',
  toolbar: [
    {
      'type': 'button',
      'actionType': 'dialog',
      'label': '新增课程',
      'icon': 'fa fa-plus pull-left',
      'primary': true,
      'dialog': {
        'title': '新增课程',
        'body': {
          'type': 'form',
          'name': 'sample-edit-form',
          'api': 'POST /api/backendManage/course/tutor/createCourse',
          'data': {
            'teacherPhoneNumb': 0,
            'showStatus': 0,
            'remark': '无'
          },
          'controls': [
            {
              "name": "class",
              "type": "radios",
              "label": "课程类型",
              'required': true,
              'inline': true,
              "options": [
                {
                  "label": "订单课(需要教员投递)",
                  "value": "订单课"
                },
                {
                  "label": "预约课(手动分配教员)",
                  "value": "预约课"
                }
              ]
            },
            {
              'type': 'group',
              'controls': [
                {
                  'type': 'input-group',
                  'label': '用户手机',
                  'required': true,
                  'controls': [
                    {
                      'type': 'text',
                      'name': 'userPhoneNumb',
                    },
                    {
                      "type": "button",
                      "label": "查询",
                      "actionType": "ajax",
                      "api": "GET /api/backendManage/course/tutor/getUserInfo/$userPhoneNumb",
                      "feedback": {
                        "title": "用户信息(ID: $uid)",
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
                                  'text': '$studentName'
                                },
                                {
                                  'type': 'plain',
                                  'text': '性别'
                                },
                                {
                                  'type': 'plain',
                                  'text': '$studentSex'
                                },
                                {
                                  'type': 'plain',
                                  'text': '家长'
                                },
                                {
                                  'type': 'plain',
                                  'text': '$parentName'
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
                                  'md': 2,
                                },
                                {
                                  'type': 'plain',
                                  'text': '$studentSchool',
                                  'md': 4,
                                },
                                {
                                  'type': 'plain',
                                  'text': '年级',
                                  'md': 2,
                                },
                                {
                                  'type': 'plain',
                                  'text': '$studentGrade',
                                  'md': 4,
                                },
                              ]
                            }
                          ]
                        }
                      }
                    }
                  ]
                },
                {
                  'type': 'input-group',
                  'label': '教员手机',
                  'required': false,
                  'hiddenOn': 'this.class == \'订单课\'',
                  'controls': [
                    {
                      'type': 'text',
                      'name': 'teacherPhoneNumb',
                    },
                    {
                      "type": "button",
                      "label": "查询",
                      "actionType": "ajax",
                      "api": "GET /api/backendManage/course/tutor/getTeacherInfo/$teacherPhoneNumb",
                      "feedback": {
                        "title": "教员信息(ID: $tid)",
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
                                  'text': '$tname'
                                },
                                {
                                  'type': 'plain',
                                  'text': '性别'
                                },
                                {
                                  'type': 'plain',
                                  'text': '$tsex'
                                },
                                {
                                  'type': 'plain',
                                  'text': '民族'
                                },
                                {
                                  'type': 'plain',
                                  'text': '$tnation'
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
                                  'text': '$temail',
                                  'md': 5,
                                },
                                {
                                  'type': 'plain',
                                  'text': '电话',
                                  'md': 2,
                                },
                                {
                                  'type': 'plain',
                                  'text': '$tphoneNumber',
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
                                  'text': '$tgoodSubjects',
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
                                  'text': '$thobby',
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
                                  'text': '$tschool',
                                  'md': 4
                                },
                                {
                                  'type': 'plain',
                                  'text': '专业',
                                  'md': 2
                                },
                                {
                                  'type': 'plain',
                                  'text': '$tmajor',
                                  'md': 4
                                },
                                {
                                  'type': 'plain',
                                  'text': '年级',
                                  'md': 2
                                },
                                {
                                  'type': 'plain',
                                  'text': '$tgrade',
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
                    }
                  ]
                }
              ]
            },
            {
              'type': 'group',
              'controls': [
                {
                  'type': 'text',
                  'name': 'title',
                  'label': '课程标题',
                  'required': true
                },
                {
                  'type': 'number',
                  'name': 'hours',
                  'label': '课时数',
                  'required': true
                },
              ]
            },
            {
              'type': 'group',
              'controls': [
                {
                  'type': 'number',
                  'name': 'userFee',
                  'label': '课时费',
                  'required': true
                },
                {
                  'type': 'number',
                  'name': 'teacherFee',
                  'label': '课时薪酬',
                  'required': true
                },
              ]
            },
            {
              'type': 'group',
              'controls': [
                {
                  'type': 'select',
                  'name': 'subject',
                  'label': '补习科目',
                  'required': true,
                  "multiple": true,
                  'options': [
                    {
                      'label': '语文',
                      'value': '语文'
                    },
                    {
                      'label': '数学',
                      'value': '数学'
                    },
                    {
                      'label': '英语',
                      'value': '英语'
                    },
                    {
                      'label': '物理',
                      'value': '物理'
                    },
                    {
                      'label': '化学',
                      'value': '化学'
                    },
                    {
                      'label': '生物',
                      'value': '生物'
                    },
                    {
                      'label': '政治',
                      'value': '政治'
                    },
                    {
                      'label': '历史',
                      'value': '历史'
                    },
                    {
                      'label': '地理',
                      'value': '地理'
                    }
                  ]
                }
              ]
            },
            {
              'type': 'group',
              'controls': [
                {
                  'type': 'text',
                  'name': 'grade',
                  'label': '补习年级',
                  'required': true,
                  'clearable': true
                }
              ]
            },
            {
              'type': 'group',
              'controls': [
                {
                  'type': 'text',
                  'name': 'courseTime',
                  'label': '补习时间',
                  'required': true,
                  'clearable': true
                },
              ]
            },
            {
              'type': 'group',
              'controls': [
                {
                  'type': 'text',
                  'name': 'coursePlace',
                  'label': '补习地点',
                  'required': true,
                  'clearable': true
                },
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
            },
            {
              'type': 'checkbox',
              'name': 'showStatus',
              'hiddenOn': 'this.class == \'预约课\'',
              'label': '展示状态(是否在教师端可投递课程中展示)',
              'trueValue': 1,
              'falseValue': 0
            },
          ]
        }
      }
    }
  ],
  body: {
    type: 'tabs',
    tabs: [
      {
        title: '待分配',
        reload: true,
        tab: {
          type: 'crud',
          name: 'crud1',
          syncLocation: false,
          api: 'GET /api/backendManage/course/tutor/getCourses/0',
          headerToolbar: [
            'export-excel',
            'pagination',
            'statistics'
          ],
          columns: [
            {
              'name': 'cid',
              'label': '课程Id',
              'sortable': true
            },
            {
              'name': 'class',
              'label': '课程类型',
            },
            {
              'name': 'studentName',
              'label': '学生姓名',
              'searchable': true
            },
            {
              'name': 'userPhoneNumber',
              'label': '联系方式',
              'searchable': true
            },
            {
              'name': 'title',
              'label': '标题',
              'sortable': false
            },
            {
              'name': 'grade',
              'label': '年级',
            },
            {
              'name': 'hours',
              'label': '课时数',
            },
            {
              'name': 'teacherCount',
              'label': '投递人数',
            },
            {
              'name': 'createTime',
              'label': '创建时间',
            },
            {
              "name": "showStatus",
              "label": '展示状态',
              "quickEdit": {
                "mode": "inline",
                "saveImmediately": {
                  "api": "POST /api/backendManage/course/tutor/updateCourseShowStatus/$cid"
                },
                "type": "switch",
                'trueValue': 1,
                'falseValue': 0
              }
            },
            {
              'type': 'operation',
              'label': '操作',
              'width': '2.5cm',
              'buttons': [
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-eye',
                  'actionType': 'dialog',
                  'tooltip': '课程详情',
                  'dialog': {
                    'title': '课程详情-$title',
                    'actions': '',
                    'body': {
                      'type': 'page',
                      'initApi': 'GET /api/backendManage/course/tutor/getCourse/$cid',
                      'loadDataOnce': true,
                      'body': [
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '补习科目：$subject'
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
                              'text': '年级：$grade'
                            },
                            {
                              'type': 'plain',
                              'text': '课时费：$userFee'
                            },
                            {
                              'type': 'plain',
                              'text': '课时薪酬：$teacherFee'
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
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$courseTime',
                              'md': 9
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
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$coursePlace',
                              'md': 9
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                          'lineStyle': 'solid'
                        },
                        {
                          'type': 'plain',
                          'text': '备注'
                        },
                        '<p/>'
                        ,
                        {
                          'type': 'plain',
                          'text': '$remark'
                        },
                      ]
                    }
                  }
                },
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-user-plus',
                  'actionType': 'dialog',
                  'tooltip': '投递列表',
                  'dialog': {
                    'title': '投递列表',
                    'actions': '',
                    'name': 'dialog1',
                    'body': [
                      {
                        'type': 'crud',
                        'api': 'GET /api/backendManage/course/tutor/getCoursTeacher/$cid',
                        'loadDataOnce': true,
                        'columns': [
                          {
                            'name': 'tid',
                            'label': '教师Id',
                          },
                          {
                            'name': 'name',
                            'label': '姓名',
                          },
                          {
                            'name': 'phoneNumber',
                            'label': '手机号码',
                          },
                          {
                            'type': 'operation',
                            'label': '操作',
                            'width': '',
                            'buttons': [
                              {
                                'type': 'button',
                                'label': '',
                                'icon': 'fa fa-id-card-o',
                                'actionType': 'dialog',
                                'tooltip': '查看简历',
                                'dialog': {
                                  'actions': '',
                                  'title': '$name的简历',
                                  'body': {
                                    'type': 'page',
                                    'initApi': 'GET /api/backendManage/course/tutor/getTeacherResume/$tid',
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
                                            'text': '学校：$school',
                                            'md': 4
                                          },
                                          {
                                            'type': 'plain',
                                            'text': '专业：$major',
                                            'md': 5
                                          },
                                          {
                                            'type': 'plain',
                                            'text': '年级：$grade',
                                            'md': 3
                                          },
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
                                'tooltip': '选中',
                                'icon': 'fa fa-check text-success',
                                'actionType': 'ajax',
                                'confirmText': '确定选择教员 【 $name 】 试讲课程 【 $title 】 ？',
                                'api': '/api/backendManage/course/tutor/assignTeacher/$cid/$tid',
                                'reload': 'crud1',
                                'close': 'dialog1'
                              }
                            ],
                            'placeholder': '-',
                            'fixed': 'right'
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  'type': 'button',
                  'actionType': 'dialog',
                  'label': '',
                  'icon': 'fa fa-pencil',
                  'tooltip': '修改课程',
                  'dialog': {
                    'title': '修改课程',
                    'body': {
                      'type': 'form',
                      'name': 'sample-edit-form',
                      'initApi': 'GET /api/backendManage/course/tutor/getCourse/$cid',
                      'api': 'POST /api/backendManage/course/tutor/updateCourse/$cid',
                      'controls': [
                        {
                          'type': 'group',
                          'controls': [
                            {
                              'type': 'text',
                              'name': 'title',
                              'label': '课程标题',
                              'required': true
                            },
                            {
                              'type': 'number',
                              'name': 'hours',
                              'label': '课时数',
                              'required': true
                            },
                          ]
                        },
                        {
                          'type': 'group',
                          'controls': [
                            {
                              'type': 'number',
                              'name': 'userFee',
                              'label': '课时费',
                              'required': true
                            },
                            {
                              'type': 'number',
                              'name': 'teacherFee',
                              'label': '课时薪酬',
                              'required': true
                            },
                          ]
                        },
                        {
                          'type': 'group',
                          'controls': [
                            {
                              'type': 'select',
                              'name': 'subject',
                              'label': '补习科目',
                              'required': true,
                              "multiple": true,
                              'options': [
                                {
                                  'label': '语文',
                                  'value': '语文'
                                },
                                {
                                  'label': '数学',
                                  'value': '数学'
                                },
                                {
                                  'label': '英语',
                                  'value': '英语'
                                },
                                {
                                  'label': '物理',
                                  'value': '物理'
                                },
                                {
                                  'label': '化学',
                                  'value': '化学'
                                },
                                {
                                  'label': '生物',
                                  'value': '生物'
                                },
                                {
                                  'label': '政治',
                                  'value': '政治'
                                },
                                {
                                  'label': '历史',
                                  'value': '历史'
                                },
                                {
                                  'label': '地理',
                                  'value': '地理'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          'type': 'group',
                          'controls': [
                            {
                              'type': 'text',
                              'name': 'grade',
                              'label': '补习年级',
                              'required': true,
                              'clearable': true
                            }
                          ]
                        },
                        {
                          'type': 'group',
                          'controls': [
                            {
                              'type': 'text',
                              'name': 'courseTime',
                              'label': '补习时间',
                              'required': true,
                              'clearable': true
                            },
                          ]
                        },
                        {
                          'type': 'group',
                          'controls': [
                            {
                              'type': 'text',
                              'name': 'coursePlace',
                              'label': '补习地点',
                              'required': true,
                              'clearable': true
                            },
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
                },
                {
                  'type': 'button',
                  'label': '',
                  'tooltip': '删除',
                  'icon': 'fa fa-trash text-danger',
                  'actionType': 'ajax',
                  'confirmText': '确定要删除课程 【$title】？(删除后可从“已删除”恢复)',
                  'api': 'POST /api/backendManage/course/tutor/deleteCourse/$cid'
                }
              ],
              'placeholder': '-',
              'fixed': 'right'
            }
          ]

        }
      },
      {
        title: '试课中',
        reload: true,
        tab: {
          type: 'crud',
          name: 'crud2',
          syncLocation: false,
          api: 'GET /api/backendManage/course/tutor/getCourses/1',
          loadDataOnce: false,
          headerToolbar: [
            'export-excel',
            'pagination',
            "statistics"
          ],
          columns: [
            {
              'name': 'cid',
              'label': '课程Id',
              'sortable': true
            },
            {
              'name': 'class',
              'label': '课程类型'
            },
            {
              'name': 'studentName',
              'label': '学生姓名',
              'searchable': true
            },
            {
              'name': 'userPhoneNumber',
              'label': '学生电话',
              'searchable': true
            },
            {
              'name': 'teacherName',
              'label': '老师姓名',
              'searchable': true
            },
            {
              'name': 'teacherPhoneNumber',
              'label': '老师电话',
              'searchable': true
            },
            {
              'name': 'title',
              'label': '标题'
            },
            {
              'name': 'grade',
              'label': '年级'
            },
            {
              'name': 'hours',
              'label': '课时数'
            },
            {
              'name': 'createTime',
              'label': '创建时间'
            },
            {
              'type': 'operation',
              'label': '操作',
              'width': '2.5cm',
              'buttons': [
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-eye',
                  'actionType': 'dialog',
                  'tooltip': '课程详情',
                  'dialog': {
                    'title': '课程详情-$title',
                    'actions': '',
                    'body': {
                      'type': 'page',
                      'initApi': 'GET /api/backendManage/course/tutor/getCourse/$cid',
                      'loadDataOnce': true,
                      'body': [
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '补习科目：$subject'
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
                              'text': '年级：$grade'
                            },
                            {
                              'type': 'plain',
                              'text': '课时费：$userFee'
                            },
                            {
                              'type': 'plain',
                              'text': '课时薪酬：$teacherFee'
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
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$courseTime',
                              'md': 9
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
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$coursePlace',
                              'md': 9
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                          'lineStyle': 'solid'
                        },
                        {
                          'type': 'plain',
                          'text': '备注'
                        },
                        '<p/>'
                        ,
                        {
                          'type': 'plain',
                          'text': '$remark'
                        },
                      ]
                    }
                  }
                },
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-user-plus',
                  'actionType': 'dialog',
                  'tooltip': '投递列表',
                  'dialog': {
                    'title': '投递列表',
                    'actions': '',
                    'name': 'dialog2',
                    'body': [
                      {
                        'type': 'crud',
                        'api': 'GET /api/backendManage/course/tutor/getCoursTeacher/$cid',
                        'loadDataOnce': true,
                        'columns': [
                          {
                            'name': 'tid',
                            'label': '教师Id',
                          },
                          {
                            'name': 'name',
                            'label': '姓名',
                          },
                          {
                            'name': 'phoneNumber',
                            'label': '手机号码',
                          },
                          {
                            'type': 'operation',
                            'label': '操作',
                            'width': '',
                            'buttons': [
                              {
                                'type': 'button',
                                'label': '',
                                'icon': 'fa fa-id-card-o',
                                'actionType': 'dialog',
                                'tooltip': '查看简历',
                                'dialog': {
                                  'actions': '',
                                  'title': '$name的简历',
                                  'body': {
                                    'type': 'page',
                                    'initApi': 'GET /api/backendManage/course/tutor/getTeacherResume/$tid',
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
                                            'text': '学校：$school',
                                            'md': 4
                                          },
                                          {
                                            'type': 'plain',
                                            'text': '专业：$major',
                                            'md': 5
                                          },
                                          {
                                            'type': 'plain',
                                            'text': '年级：$grade',
                                            'md': 3
                                          },
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
                                'tooltip': '选中',
                                'icon': 'fa fa-check text-success',
                                'actionType': 'ajax',
                                'confirmText': '确定选择教员 【 $name 】 试讲课程 【 $title 】 ？',
                                'api': '/api/backendManage/course/tutor/assignTeacher/$cid/$tid',
                                'reload': 'crud2',
                                'close': 'dialog2'
                              }
                            ],
                            'placeholder': '-',
                            'fixed': 'right'
                          }
                        ]
                      }
                    ]
                  }
                },
                {
                  'type': 'button',
                  'actionType': 'dialog',
                  'label': '',
                  'icon': 'fa fa-pencil',
                  'tooltip': '修改课程',
                  'dialog': {
                    'title': '修改课程',
                    'body': {
                      'type': 'form',
                      'name': 'sample-edit-form',
                      'initApi': 'GET /api/backendManage/course/tutor/getCourse/$cid',
                      'api': 'POST /api/backendManage/course/tutor/updateCourse/$cid',
                      'controls': [
                        {
                          'type': 'group',
                          'controls': [
                            {
                              'type': 'text',
                              'name': 'title',
                              'label': '课程标题',
                              'required': true
                            },
                            {
                              'type': 'number',
                              'name': 'hours',
                              'label': '课时数',
                              'required': true
                            },
                          ]
                        },
                        {
                          'type': 'group',
                          'controls': [
                            {
                              'type': 'number',
                              'name': 'userFee',
                              'label': '课时费',
                              'required': true
                            },
                            {
                              'type': 'number',
                              'name': 'teacherFee',
                              'label': '课时薪酬',
                              'required': true
                            },
                          ]
                        },
                        {
                          'type': 'group',
                          'controls': [
                            {
                              'type': 'select',
                              'name': 'subject',
                              'label': '补习科目',
                              'required': true,
                              "multiple": true,
                              'options': [
                                {
                                  'label': '语文',
                                  'value': '语文'
                                },
                                {
                                  'label': '数学',
                                  'value': '数学'
                                },
                                {
                                  'label': '英语',
                                  'value': '英语'
                                },
                                {
                                  'label': '物理',
                                  'value': '物理'
                                },
                                {
                                  'label': '化学',
                                  'value': '化学'
                                },
                                {
                                  'label': '生物',
                                  'value': '生物'
                                },
                                {
                                  'label': '政治',
                                  'value': '政治'
                                },
                                {
                                  'label': '历史',
                                  'value': '历史'
                                },
                                {
                                  'label': '地理',
                                  'value': '地理'
                                }
                              ]
                            }
                          ]
                        },
                        {
                          'type': 'group',
                          'controls': [
                            {
                              'type': 'text',
                              'name': 'grade',
                              'label': '补习年级',
                              'required': true,
                              'clearable': true
                            }
                          ]
                        },
                        {
                          'type': 'group',
                          'controls': [
                            {
                              'type': 'text',
                              'name': 'courseTime',
                              'label': '补习时间',
                              'required': true,
                              'clearable': true
                            },
                          ]
                        },
                        {
                          'type': 'group',
                          'controls': [
                            {
                              'type': 'text',
                              'name': 'coursePlace',
                              'label': '补习地点',
                              'required': true,
                              'clearable': true
                            },
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
                },
                {
                  'type': 'button',
                  'label': '',
                  'tooltip': '删除',
                  'icon': 'fa fa-trash text-danger',
                  'actionType': 'ajax',
                  'confirmText': '确定要删除课程 【$title】？(删除后可从“已删除”恢复)',
                  'api': 'POST /api/backendManage/course/tutor/deleteCourse/$cid'
                }
              ],
              'placeholder': '-',
              'fixed': 'right'
            }
          ]

        }
      },
      {
        title: '进行中',
        reload: true,
        tab: {
          type: 'crud',
          syncLocation: false,
          api: 'GET /api/backendManage/course/tutor/getCourses/2',
          headerToolbar: [
            'export-excel',
            'pagination',
            "statistics"
          ],
          columns: [
            {
              'name': 'cid',
              'label': '课程Id',
              'sortable': true
            },
            {
              'name': 'class',
              'label': '课程类型'
            },
            {
              'name': 'studentName',
              'label': '学生姓名',
              'searchable': true
            },
            {
              'name': 'userPhoneNumber',
              'label': '学生电话',
              'searchable': true
            },
            {
              'name': 'teacherName',
              'label': '老师姓名',
              'searchable': true
            },
            {
              'name': 'teacherPhoneNumber',
              'label': '老师电话',
              'searchable': true
            },
            {
              'name': 'title',
              'label': '标题'
            },
            {
              'name': 'grade',
              'label': '年级'
            },
            {
              'name': 'hours',
              'label': '课时数'
            },
            {
              'name': 'completedHours',
              'label': '已完成课时'
            },
            {
              'name': 'createTime',
              'label': '创建时间',
              'sortable': false
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
                  'tooltip': '课程详情',
                  'dialog': {
                    'title': '课程详情-$title',
                    'actions': '',
                    'body': {
                      'type': 'page',
                      'initApi': 'GET /api/backendManage/course/tutor/getCourse/$cid',
                      'loadDataOnce': true,
                      'body': [
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '补习科目：$subject'
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
                              'text': '年级：$grade'
                            },
                            {
                              'type': 'plain',
                              'text': '课时费：$userFee'
                            },
                            {
                              'type': 'plain',
                              'text': '课时薪酬：$teacherFee'
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
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$courseTime',
                              'md': 9
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
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$coursePlace',
                              'md': 9
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                          'lineStyle': 'solid'
                        },
                        {
                          'type': 'plain',
                          'text': '备注'
                        },
                        '<p/>'
                        ,
                        {
                          'type': 'plain',
                          'text': '$remark'
                        },
                      ]
                    }
                  }
                },
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-check text-success',
                  'actionType': 'ajax',
                  'tooltip': '结课',
                  'confirmText': '确定将课程 【 $title 】 结课吗？',
                  'api': 'POST /api/backendManage/course/tutor/endCourse/$cid'
                },
                {
                  'type': 'button',
                  'label': '',
                  'tooltip': '删除',
                  'icon': 'fa fa-trash text-danger',
                  'actionType': 'ajax',
                  'confirmText': '确定要删除课程 【$title】？(删除后可从“已删除”恢复)',
                  'api': 'POST /api/backendManage/course/tutor/deleteCourse/$cid'
                }
              ],
              'placeholder': '-',
              'fixed': 'right'
            }
          ]

        }
      },
      {
        title: '已结课',
        reload: true,
        tab: {
          type: 'crud',
          syncLocation: false,
          api: 'GET /api/backendManage/course/tutor/getCourses/3',
          loadDataOnce: false,
          headerToolbar: [
            'export-excel',
            'pagination',
            "statistics"
          ],
          columns: [
            {
              'name': 'cid',
              'label': '课程Id',
              'sortable': true
            },
            {
              'name': 'class',
              'label': '课程类型'
            },
            {
              'name': 'studentName',
              'label': '学生姓名',
              'searchable': true
            },
            {
              'name': 'userPhoneNumber',
              'label': '学生电话',
              'searchable': true
            },
            {
              'name': 'teacherName',
              'label': '老师姓名',
              'searchable': true
            },
            {
              'name': 'teacherPhoneNumber',
              'label': '老师电话',
              'searchable': true
            },
            {
              'name': 'title',
              'label': '标题'
            },
            {
              'name': 'grade',
              'label': '年级'
            },
            {
              'name': 'hours',
              'label': '课时数'
            },
            {
              'name': 'completedHours',
              'label': '已完成课时'
            },
            {
              'name': 'createTime',
              'label': '创建时间'
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
                  'tooltip': '课程详情',
                  'dialog': {
                    'title': '课程详情-$title',
                    'actions': '',
                    'body': {
                      'type': 'page',
                      'initApi': 'GET /api/backendManage/course/tutor/getCourse/$cid',
                      'loadDataOnce': true,
                      'body': [
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '补习科目：$subject'
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
                              'text': '年级：$grade'
                            },
                            {
                              'type': 'plain',
                              'text': '课时费：$userFee'
                            },
                            {
                              'type': 'plain',
                              'text': '课时薪酬：$teacherFee'
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
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$courseTime',
                              'md': 9
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
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$coursePlace',
                              'md': 9
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                          'lineStyle': 'solid'
                        },
                        {
                          'type': 'plain',
                          'text': '备注'
                        },
                        '<p/>'
                        ,
                        {
                          'type': 'plain',
                          'text': '$remark'
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

        }
      },
      {
        title: '已删除',
        reload: true,
        tab: {
          type: 'crud',
          syncLocation: false,
          api: 'GET /api/backendManage/course/tutor/getDeletedCourses',
          loadDataOnce: false,
          headerToolbar: [
            'export-excel',
            'pagination',
            "statistics"
          ],
          columns: [
            {
              'name': 'cid',
              'label': '课程Id',
              'sortable': true
            },
            {
              'name': 'class',
              'label': '课程类型'
            },
            {
              'name': 'studentName',
              'label': '学生姓名',
              // 'searchable': true
            },
            {
              'name': 'phoneNumber',
              'label': '联系方式',
              // 'searchable': true
            },
            {
              'name': 'title',
              'label': '标题'
            },
            {
              'name': 'subject',
              'label': '年级'
            },
            {
              'name': 'hours',
              'label': '课时数'
            },
            {
              'name': 'createTime',
              'label': '创建时间'
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
                  'tooltip': '课程详情',
                  'dialog': {
                    'title': '课程详情-$title',
                    'actions': '',
                    'body': {
                      'type': 'page',
                      'initApi': 'GET /api/backendManage/course/tutor/getCourse/$cid',
                      'loadDataOnce': true,
                      'body': [
                        {
                          'type': 'grid',
                          'columns': [
                            {
                              'type': 'plain',
                              'text': '补习科目：$subject'
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
                              'text': '年级：$grade'
                            },
                            {
                              'type': 'plain',
                              'text': '课时费：$userFee'
                            },
                            {
                              'type': 'plain',
                              'text': '课时薪酬：$teacherFee'
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
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$courseTime',
                              'md': 9
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
                              'md': 3
                            },
                            {
                              'type': 'plain',
                              'text': '$coursePlace',
                              'md': 9
                            }
                          ]
                        },
                        {
                          'type': 'divider',
                          'lineStyle': 'solid'
                        },
                        {
                          'type': 'plain',
                          'text': '备注'
                        },
                        '<p/>'
                        ,
                        {
                          'type': 'plain',
                          'text': '$remark'
                        },
                      ]
                    }
                  }
                },
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-mail-reply text-success',
                  'actionType': 'ajax',
                  'tooltip': '恢复',
                  'confirmText': '确定要恢复课程$cid？',
                  'api': 'POST /api/backendManage/course/tutor/restoreCourse/$cid'
                },
                {
                  'type': 'button',
                  'label': '',
                  'icon': 'fa fa-remove text-danger',
                  'actionType': 'ajax',
                  'tooltip': '彻底删除',
                  'confirmText': '<h5>【数据无价，谨慎操作】</h5>' +
                    '<h6>确定永久删除课程$cid？</h6>' +
                    '<h6>* 删除后无法恢复</h6>',
                  'api': 'POST /api/backendManage/course/tutor/deleteCoursePermanent/$cid'
                }
              ],
              'placeholder': '-',
              'fixed': 'right'
            }
          ]
        }
      },
    ]
  }
}

