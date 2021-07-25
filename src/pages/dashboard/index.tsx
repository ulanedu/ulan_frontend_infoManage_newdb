import * as reqHooks from './req'
import dashboardCss from './styled'

const targetCards = [
  {
    title: '用户总数',
    intro: '微信用户总数',
    kpi: 'userCount',
  },
  {
    title: '教员总数',
    intro: '签约教员数量',
    kpi: 'teacherCount',
  },
  {
    title: '总收入',
    intro: '线上平台所有记录的总收入',
    kpi: 'totalRevenue',
  },
  {
    title: '总支出',
    intro: '线上平台所有记录的总支出',
    kpi: 'totalExpenses',
  },
  {
    title: '待分配课程',
    intro: '未分配教员的课程数量',
    kpi: 'assignedCourses',
  },
  {
    title: '预约课程',
    intro: '未开始的预约课数量',
    kpi: 'reserveCourses',
  },
  {
    title: '正在进行',
    intro: '正在进行的课程数量',
    kpi: 'ongoingCourses',
  },
  {
    title: '消课申请',
    intro: '未处理的消课申请数量',
    kpi: 'dismissCourses',
  },
]

export const schema = {
  type: 'page',
  css: dashboardCss,
  body: [
    {
      type: 'service',
      api: {
        $preset: 'apis.chart',
        onSuccess: reqHooks.onKpiChartSuc,
      },
      body: {
        type: 'grid',
        className: 'dash-grid',
        columns: renderTargetCards(targetCards),
      },
    },
    {
      type: 'tabs',
      mode: 'line',
      className: 'tabs-card',
      tabs: [
        {
          title: '收支明细',
          tab: {
            type: 'service',
            name: 'tab-rain',
            body: {
              type: 'grid',
              columns: [
                {
                  lg: 12,
                  $preset: 'forms.tabRainFilter',
                },
                {
                  type: "chart",
                  lg: 7,
                  trackExpression: "${dailyincome}",
                  height: "7cm",
                  width: "15cm",
                  config: {
                    title: {
                      text: '优兰收入概况',
                      subtext: '折线图',
                      left: '1%'
                    },
                    tooltip: {
                      trigger: 'axis'
                    },
                    xAxis: {
                      type: "category",
                      data: "${date}"
                    },
                    yAxis: {
                      type: "value",
                      axisLabel: {
                        formatter: "{value} W"
                      },
                      axisPointer: {
                        snap: true
                      }
                    },
                    series: [
                      {
                        name: "日收入",
                        type: "line",
                        smooth: true,
                        data: "${dailyincome}"
                      }
                    ]
                  }
                },
                {
                  type: 'crud',
                  lg: 5,
                  affixHeader: false,
                  columnsTogglable: false,
                  api: 'GET /api/backendManage/dashboard/getDetail',
                  // source: "items",
                  headerToolbar: [
                    'pagination',
                    "statistics",
                    'switch-per-page'
                  ],
                  columns: [
                    {
                      name: 'date',
                      label: '日期',
                    },
                    {
                      name: 'dailyincome',
                      label: '收入',
                    },
                    {
                      name: 'dailypay',
                      label: '支出',
                    },
                    {
                      name: 'dailyuser',
                      label: '新增用户',
                    },
                    {
                      name: 'dailyorder',
                      label: '新增订单',
                    },
                  ],
                },
              ],
            },
          },
        },
      ],
    },
  ],
  preset: {
    forms: {
      tabRainFilter: {
        type: 'form',
        title: '过滤条件',
        className: 'tab-filter',
        wrapWithPanel: false,
        mode: 'inline',
        target: 'tab-rain',
        controls: [
          {
            type: 'date-range',
            label: '时间范围',
            name: 'dateRange',
            format: 'YYYY-MM-DD',
            joinValues: false,
          },
          { type: 'submit', label: '搜索' },
        ],
      },
    },
  },
}

function renderTargetCards(cardInfos: any[]) {
  return cardInfos.map((info) => {
    const { title, intro, grid, kpi } = info
    const gridProps = {
      lg: 3,
      md: 6,
      sm: 6,
      xs: 12,
      ...grid,
    }
    return {
      type: 'wrapper',
      className: 'target-card',
      ...gridProps,
      body: [
        {
          type: 'wrapper',
          className: 'card-info no-bg',
          body: [
            {
              type: 'tpl',
              tpl: ` <div>${title}</div><p><%= data?.${kpi}?.num || "0"%></p>`,
            },
            {
              type: 'html',
              html: `<i class="tip-icon fa fa-question-circle clickable" data-tooltip="${intro}" data-position="left"></i>`,
            },
          ],
        },
        {
          type: 'chart',
          className: 'card-chart',
          source: `\${${kpi}.chart}`,
        },
      ],
    }
  })
}
