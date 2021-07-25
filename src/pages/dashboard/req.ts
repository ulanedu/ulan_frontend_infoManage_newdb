/**
 * 图表展示请求的回调
 */
//  import { last, maxBy } from 'lodash'
//  import { times } from 'lodash'
export const onKpiChartSuc = (source) => {
  const { code, msg, data } = source
  if (code === 0) {
    source.msg = '获取成功'
    source.data = {
      userCount: {
        num: data.userCount || 0,
      },
      teacherCount: {
        num: data.teacherCount || 0,
      },
      totalRevenue: {
        num: data.totalRevenue || 0,
      },
      totalExpenses: {
        num: data.totalExpenses || 0,
      },
      assignedCourses: {
        num: data.assignedCourses || 0,
      },
      reserveCourses: {
        num: data.reserveCourses || 0,
      },
      ongoingCourses: {
        num: data.ongoingCourses || 0,
      },
      dismissCourses: {
        num: data.dismissCourses || 0,
      },
    }
  } else {
    source.msg = msg || '获取异常'
  }
  return source
}
