export const schema = {
  'type': 'page',
  'title': '用户管理',
  'body': {
    'type': 'tabs',
    'tabs': [
      {
        'title': '现有用户',
        'reload': true,
        'tab': {
          'type': 'crud',
          'syncLocation': false,
          'api': 'GET /api/backendManage/personnel/user/getUsers/0',
          'headerToolbar': [
            'export-excel',
            'pagination',
            'statistics'
          ],
          'columns': [
            {
              'name': 'uid',
              'label': '用户Id',
              'sortable': true
            },
            {
              'name': 'studentName',
              'label': '学生姓名',
              'searchable': true
            },
            {
              'name': 'school',
              'label': '学校',
            },
            {
              'name': 'grade',
              'label': '年级'
            },
            {
              'name': 'parentName',
              'label': '家长'
            },
            {
              'name': 'phoneNumber',
              'label': '联系方式',
              'searchable': true
            },
            {
              'type': 'operation',
              'label': '操作',
              'width': '3cm',
              'buttons': [
                {
                  'type': 'button-group',
                  'buttons': [
                    {
                      'type': 'button',
                      'label': '详情',
                      'actionType': 'dialog',
                      'dialog': {
                        'title': '用户详情',
                        'actions': '',
                        'body': {
                          'type': 'page',
                          'initApi': '/api/backendManage/personnel/user/getUserInfo/$uid',
                          'body': [
                            {
                              'type': 'grid',
                              'columns': [
                                {
                                  'type': 'plain',
                                  'text': '姓名',
                                  'md': 2
                                },
                                {
                                  'type': 'plain',
                                  'text': '$studentName',
                                  'md': 4
                                },
                                {
                                  'type': 'plain',
                                  'text': '性别',
                                  'md': 2
                                },
                                {
                                  'type': 'plain',
                                  'text': '$studentSex',
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
                            },
                            {
                              'type': 'divider'
                            },
                            {
                              'type': 'grid',
                              'columns': [
                                {
                                  'type': 'plain',
                                  'text': '家长',
                                  'md': 2,
                                },
                                {
                                  'type': 'plain',
                                  'text': '$parentName',
                                  'md': 4,
                                },
                                {
                                  'type': 'plain',
                                  'text': '关系',
                                  'md': 2,
                                },
                                {
                                  'type': 'plain',
                                  'text': '$parentRelation',
                                  'md': 4,
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
                                  'text': '地址',
                                  'md': 3
                                },
                                {
                                  'type': 'plain',
                                  'text': '$coursePlace',
                                  'md': 9
                                }
                              ]
                            }
                          ]
                        }
                      }
                    },
                    {
                      'type': 'button',
                      'label': '订单',
                      'actionType': 'dialog',
                      'dialog': {
                        'title': '用户订单',
                        'size': 'lg',
                        'actions': [],
                        'body': {
                          'type': 'crud',
                          'syncLocation': false,
                          'api': 'GET /api/backendManage/personnel/user/getUserOrders/$uid',
                          'headerToolbar': [
                            'pagination',
                            'statistics'
                          ],
                          'columns': [
                            {
                              'name': 'oid',
                              'label': '订单Id',
                              'sortable': true
                            },
                            {
                              'name': 'type',
                              'label': '订单类型'
                            },
                            {
                              'name': 'amount',
                              'label': '金额',
                            },
                            {
                              'name': 'paymentStatus',
                              'label': '支付状态',
                              'type': 'mapping',
                              'map': {
                                '0': '未支付',
                                '1': '已支付'
                              }
                            },
                            {
                              'name': 'paymentGateway',
                              'label': '支付网关'
                            },
                            {
                              'name': 'paymentMethod',
                              'label': '支付方式'
                            },
                            {
                              'name': 'paymentTime',
                              'label': '支付时间'
                            },
                            {
                              'type': 'operation',
                              'label': '操作',
                              'width': '1cm',
                              'buttons': [
                                {
                                  'type': 'button',
                                  'label': '',
                                  'icon': 'fa fa-eye',
                                  'actionType': 'dialog',
                                  'tooltip': '查看详情',
                                  'dialog': {
                                    'position': 'right',
                                    'title': '订单详情(订单ID:$commodityId)',
                                    'actions': '',
                                    'body': {
                                      'type': 'page',
                                      'initApi': 'GET /api/backendManage/personnel/user/getOrderDetail/$commodityId',
                                      'loadDataOnce': true,
                                      'body': [
                                        {
                                          'type': 'grid',
                                          'columns': [
                                            {
                                              'type': 'plain',
                                              'text': '类型',
                                              'md': 2
                                            },
                                            {
                                              'type': 'plain',
                                              'text': '$class',
                                              'md': 2
                                            },
                                            {
                                              'type': 'plain',
                                              'text': '创建时间',
                                              'md': 3
                                            },
                                            {
                                              'type': 'plain',
                                              'text': '$createTime',
                                              'md': 5
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
                                              'text': '总时长',
                                              'md': 2
                                            },
                                            {
                                              'type': 'plain',
                                              'text': '$hours',
                                              'md': 4
                                            },
                                            {
                                              'type': 'plain',
                                              'text': '已完成',
                                              'md': 2
                                            },
                                            {
                                              'type': 'plain',
                                              'text': '$completedHours',
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
                      }
                    },
                    {
                      'type': 'button',
                      'label': '拉黑',
                      'level': 'danger',
                      'actionType': 'ajax',
                      'confirmText': '确定要将该用户拉黑?',
                      'api': 'POST /api/backendManage/personnel/user/updateDefriendStatus/$uid'
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        'title': '已拉黑',
        'reload': true,
        'tab': {
          'type': 'crud',
          'syncLocation': false,
          'api': 'GET /api/backendManage/personnel/user/getUsers/1',
          'headerToolbar': [
            'export-excel',
            'pagination',
            'statistics'
          ],
          'columns': [
            {
              'name': 'uid',
              'label': '用户Id',
              'sortable': true
            },
            {
              'name': 'studentName',
              'label': '学生姓名',
              'searchable': true
            },
            {
              'name': 'school',
              'label': '学校',
            },
            {
              'name': 'grade',
              'label': '年级'
            },
            {
              'name': 'parentName',
              'label': '家长'
            },
            {
              'name': 'phoneNumber',
              'label': '联系方式',
              'searchable': true
            },
            {
              'type': 'operation',
              'label': '操作',
              'width': '3cm',
              'buttons': [
                {
                  'type': 'button-group',
                  'buttons': [
                    {
                      'type': 'button',
                      'label': '详情',
                      'actionType': 'dialog',
                      'dialog': {
                        'title': '用户详情',
                        'actions': '',
                        'body': {
                          'type': 'page',
                          'initApi': '/api/backendManage/personnel/user/getUserInfo/$uid',
                          'body': [
                            {
                              'type': 'grid',
                              'columns': [
                                {
                                  'type': 'plain',
                                  'text': '姓名',
                                  'md': 2
                                },
                                {
                                  'type': 'plain',
                                  'text': '$studentName',
                                  'md': 4
                                },
                                {
                                  'type': 'plain',
                                  'text': '性别',
                                  'md': 2
                                },
                                {
                                  'type': 'plain',
                                  'text': '$studentSex',
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
                            },
                            {
                              'type': 'divider'
                            },
                            {
                              'type': 'grid',
                              'columns': [
                                {
                                  'type': 'plain',
                                  'text': '家长',
                                  'md': 2,
                                },
                                {
                                  'type': 'plain',
                                  'text': '$parentName',
                                  'md': 4,
                                },
                                {
                                  'type': 'plain',
                                  'text': '关系',
                                  'md': 2,
                                },
                                {
                                  'type': 'plain',
                                  'text': '$parentRelation',
                                  'md': 4,
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
                                  'text': '地址',
                                  'md': 3
                                },
                                {
                                  'type': 'plain',
                                  'text': '$coursePlace',
                                  'md': 9
                                }
                              ]
                            }
                          ]
                        }
                      }
                    },
                    {
                      'type': 'button',
                      'label': '订单',
                      'actionType': 'dialog',
                      'dialog': {
                        'title': '订单详情',
                        'size': 'lg',
                        'actions': [],
                        'body': {
                          'type': 'crud',
                          'syncLocation': false,
                          'api': 'GET /api/backendManage/personnel/user/getUserOrders/$uid',
                          'headerToolbar': [
                            'pagination',
                            'statistics'
                          ],
                          'columns': [
                            {
                              'name': 'oid',
                              'label': '',
                              'sortable': true
                            },
                            {
                              'name': 'type',
                              'label': '订单类型'
                            },
                            {
                              'name': 'amount',
                              'label': '金额',
                            },
                            {
                              'name': 'paymentStatus',
                              'label': '支付状态',
                              'type': 'mapping',
                              'map': {
                                '0': '未支付',
                                '1': '已支付'
                              }
                            },
                            {
                              'name': 'paymentGateway',
                              'label': '支付网关'
                            },
                            {
                              'name': 'paymentMethod',
                              'label': '支付方式'
                            },
                            {
                              'name': 'paymentTime',
                              'label': '支付时间'
                            },
                            {
                              'type': 'operation',
                              'label': '操作',
                              'width': '1cm',
                              'buttons': [
                                {
                                  'type': 'button',
                                  'label': '',
                                  'icon': 'fa fa-eye',
                                  'actionType': 'dialog',
                                  'tooltip': '查看详情',
                                  'dialog': {
                                    'position': 'right',
                                    'title': '订单详情(订单ID:$commodityId)',
                                    'actions': '',
                                    'body': {
                                      'type': 'page',
                                      'initApi': 'GET /api/backendManage/personnel/user/getOrderDetail/$commodityId',
                                      'loadDataOnce': true,
                                      'body': [
                                        {
                                          'type': 'grid',
                                          'columns': [
                                            {
                                              'type': 'plain',
                                              'text': '类型',
                                              'md': 2
                                            },
                                            {
                                              'type': 'plain',
                                              'text': '$class',
                                              'md': 2
                                            },
                                            {
                                              'type': 'plain',
                                              'text': '创建时间',
                                              'md': 3
                                            },
                                            {
                                              'type': 'plain',
                                              'text': '$createTime',
                                              'md': 5
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
                                              'text': '总时长',
                                              'md': 2
                                            },
                                            {
                                              'type': 'plain',
                                              'text': '$hours',
                                              'md': 4
                                            },
                                            {
                                              'type': 'plain',
                                              'text': '已完成',
                                              'md': 2
                                            },
                                            {
                                              'type': 'plain',
                                              'text': '$completedHours',
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
                      }
                    },
                    {
                      'type': 'button',
                      'label': '恢复',
                      'level': 'success',
                      'actionType': 'ajax',
                      'confirmText': '确定要将该用户恢复?',
                      'api': 'POST /api/backendManage/personnel/user/updateDefriendStatus/$uid'
                    }
                  ]
                }
              ]
            }
          ]
        }
      },
    ]
  }
}
