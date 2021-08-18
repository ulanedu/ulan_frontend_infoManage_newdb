export const schema = {
  'type': 'page',
  'title': '订单管理',
  'body': {
    'type': 'tabs',
    'tabs': [
      {
        'title': '未支付',
        'reload': true,
        'tab': {
          'type': 'crud',
          'syncLocation': false,
          'api': 'GET /api/backendManage/financial/order/getOrders/0',
          'headerToolbar': [
            'export-excel',
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
              'name': 'studentName',
              'label': '学生姓名',
              'searchable': true
            },
            {
              'name': 'parentName',
              'label': '家长姓名'
            },
            {
              'name': 'phoneNumber',
              'label': '联系方式',
              'searchable': true
            },
            {
              'name': 'amount',
              'label': '金额',
            },
            {
              'name': 'createTime',
              'label': '创建时间'
            },
            {
              'type': 'operation',
              'label': '操作',
              'width': '0.8cm',
              'buttons': [
                {
                  'type': 'button-group',
                  'buttons': [
                    {
                      'type': 'button',
                      'label': '详情',
                      'actionType': 'dialog',
                      'dialog': {
                        'position': 'right',
                        'title': '订单详情',
                        'actions': '',
                        'body': {
                          'type': 'page',
                          'initApi': 'GET /api/backendManage/financial/order/getCommodity/$oid',
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
                                  'md': 3
                                },
                                {
                                  'type': 'plain',
                                  'text': '$userFee',
                                  'md': 3
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
                                  'md': 3
                                },
                                {
                                  'type': 'plain',
                                  'text': '$hours',
                                  'md': 3
                                },
                                {
                                  'type': 'plain',
                                  'text': '已完成',
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
                              'type': 'divider'
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
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        'title': '已支付',
        'reload': true,
        'tab': {
          'type': 'crud',
          'syncLocation': false,
          'api': 'GET /api/backendManage/financial/order/getOrders/1',
          'headerToolbar': [
            'export-excel',
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
              'name': 'studentName',
              'label': '学生姓名',
              'searchable': true
            },
            {
              'name': 'parentName',
              'label': '家长姓名'
            },
            {
              'name': 'phoneNumber',
              'label': '联系方式',
              'searchable': true
            },
            {
              'name': 'amount',
              'label': '金额',
            },
            {
              'name': 'createTime',
              'label': '创建时间'
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
              'width': '0.8cm',
              'buttons': [
                {
                  'type': 'button-group',
                  'buttons': [
                    {
                      'type': 'button',
                      'label': '详情',
                      'actionType': 'dialog',
                      'dialog': {
                        'position': 'right',
                        'title': '订单详情',
                        'actions': '',
                        'body': {
                          'type': 'page',
                          'initApi': 'GET /api/backendManage/financial/order/getCommodity/$oid',
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
                                  'md': 3
                                },
                                {
                                  'type': 'plain',
                                  'text': '$userFee',
                                  'md': 3
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
                                  'md': 3
                                },
                                {
                                  'type': 'plain',
                                  'text': '$hours',
                                  'md': 3
                                },
                                {
                                  'type': 'plain',
                                  'text': '已完成',
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
                              'type': 'divider'
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
                  ]
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
