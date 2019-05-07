const navmenu = (req, res) => {
  // console.log(req.body);
  return res.json({
    resultCode: '200',
    resultMsg: '操作成功。',
    restLog: null,
    resultData: [
      {
        funcId: 'guide',
        menuLabel: '向导',
        menuRouter: 'guide',
        menuIcon: 'daohang',
        menuIndex: 1,
        hide: 1,
        childMenus: [],
      },
      {
        funcId: 'dashboard',
        menuLabel: '主页',
        menuRouter: 'dashboard',
        menuIcon: 'gailan',
        menuIndex: 2,
        hide: 1,
        childMenus: [],
      },
      {
        funcId: 'basic',
        menuLabel: '基础',
        menuRouter: 'basic',
        menuIcon: 'fold',
        menuIndex: 3,
        hide: 1,
        childMenus: [
          {
            funcId: 'gridLayout',
            menuLabel: '栅格布局',
            menuRouter: 'gridLayout',
            menuIcon: null,
            menuIndex: 1,
            hide: 1,
          },
          {
            funcId: 'icon-svg',
            menuLabel: 'svg 图标',
            menuRouter: 'icon-svg',
            menuIcon: null,
            menuIndex: 2,
            hide: 1,
          },
          {
            funcId: 'icon-class',
            menuLabel: 'class 图标',
            menuRouter: 'icon-class',
            menuIcon: null,
            menuIndex: 3,
            hide: 1,
          },
          {
            funcId: 'button',
            menuLabel: '按钮',
            menuRouter: 'button',
            menuIcon: null,
            menuIndex: 4,
            hide: 1,
          },

        ],
      },
      {
        funcId: 'layout',
        menuLabel: '布局',
        menuRouter: 'layout',
        menuIcon: 'renwu',
        menuIndex: 4,
        hide: 1,
        childMenus: [
          {
            funcId: 'layout',
            menuLabel: '整体布局',
            menuRouter: 'layout',
            menuIcon: null,
            menuIndex: 1,
            hide: 1,
          },
          {
            funcId: 'head',
            menuLabel: '头部布局',
            menuRouter: 'head',
            menuIcon: null,
            menuIndex: 2,
            hide: 1,
          },
          {
            funcId: 'sidebar',
            menuLabel: '侧边栏',
            menuRouter: 'sidebar',
            menuIcon: null,
            menuIndex: 3,
            hide: 1,
          },
        ],
      },
      {
        funcId: 'form',
        menuLabel: '表单',
        menuRouter: 'form',
        menuIcon: 'bianji-',
        menuIndex: 5,
        hide: 1,
        childMenus: [
          {
            funcId: 'input',
            menuLabel: '输入框',
            menuRouter: 'input',
            menuIcon: null,
            menuIndex: 1,
            hide: 1,
          },
          {
            funcId: 'datepicker',
            menuLabel: '日期控件',
            menuRouter: 'datepicker',
            menuIcon: null,
            menuIndex: 2,
            hide: 1,
          },
          {
            funcId: 'timepicker',
            menuLabel: '时间控件',
            menuRouter: 'timepicker',
            menuIcon: null,
            menuIndex: 3,
            hide: 1,
          },
          {
            funcId: 'only-mmdd-picker',
            menuLabel: 'MMDD日期控件',
            menuRouter: 'only-mmdd-picker',
            menuIcon: null,
            menuIndex: 4,
            hide: 1,
          },
          {
            funcId: 'time-interval',
            menuLabel: '时间频率控件',
            menuRouter: 'time-interval',
            menuIcon: null,
            menuIndex: 5,
            hide: 1,
          },
          {
            funcId: 'select',
            menuLabel: 'select选择器',
            menuRouter: 'select',
            menuIcon: null,
            menuIndex: 6,
            hide: 1,
          },
          {
            funcId: 'cascader',
            menuLabel: 'cascader级联选择器',
            menuRouter: 'cascader',
            menuIcon: null,
            menuIndex: 7,
            hide: 1,
          },
          {
            funcId: 'avatar',
            menuLabel: 'avatar头像',
            menuRouter: 'avatar',
            menuIcon: null,
            menuIndex: 8,
            hide: 1
          },
          {
            funcId: 'checkbox',
            menuLabel: 'checkbox 多选框',
            menuRouter: 'checkbox',
            menuIcon: null,
            menuIndex: 9,
            hide: 1
          },
          {
            funcId: 'radio',
            menuLabel: 'radio 单选框',
            menuRouter: 'radio',
            menuIcon: null,
            menuIndex: 10,
            hide: 1
          },
          {
            funcId: 'switch',
            menuLabel: 'switch 开关',
            menuRouter: 'switch',
            menuIcon: null,
            menuIndex: 11,
            hide: 1
          },
          {
            funcId: 'slider',
            menuLabel: 'slider 滑块',
            menuRouter: 'slider',
            menuIcon: null,
            menuIndex: 12,
            hide: 1
          },
          {
            funcId: 'upload',
            menuLabel: 'upload 上传',
            menuRouter: 'upload',
            menuIcon: null,
            menuIndex: 13,
            hide: 1
          },
        ],
      },
      {
        funcId: 'data',
        menuLabel: '数据',
        menuRouter: 'data',
        menuIcon: 'shujugongxiang',
        menuIndex: 6,
        hide: 1,
        childMenus: [
          {
            funcId: 'badge',
            menuLabel: '标记',
            menuRouter: 'badge',
            menuIcon: null,
            menuIndex: 1,
            hide: 1,
          },
          {
            funcId: 'progress',
            menuLabel: '进度条',
            menuRouter: 'progress',
            menuIcon: null,
            menuIndex: 2,
            hide: 1,
          },
        ],
      },
      {
        funcId: 'other',
        menuLabel: '其他',
        menuRouter: 'other',
        menuIcon: 'down-square',
        menuIndex: 7,
        hide: 1,
        childMenus: [
          {
            funcId: 'dialog',
            menuLabel: '对话框',
            menuRouter: 'dialog',
            menuIcon: null,
            menuIndex: 1,
            hide: 1,
          },
          {
            funcId: 'fullscreen-dialog',
            menuLabel: '全屏对话框',
            menuRouter: 'fullscreen-dialog',
            menuIcon: null,
            menuIndex: 2,
            hide: 1,
          },
          {
            funcId: 'slip-dialog',
            menuLabel: '滑动对话框',
            menuRouter: 'slip-dialog',
            menuIcon: null,
            menuIndex: 3,
            hide: 1,
          },
        ],
      },
      {
        funcId: 'navigation',
        menuLabel: '导航',
        menuRouter: 'navigation',
        menuIcon: 'fold',
        menuIndex: 8,
        hide: 1,
        childMenus: [
          {
            funcId: 'steps',
            menuLabel: 'steps 步骤条',
            menuRouter: 'steps',
            menuIcon: null,
            menuIndex: 1,
            hide: 1,
          },
          {
            funcId: 'tabs',
            menuLabel: 'tabs 标签页',
            menuRouter: 'tabs',
            menuIcon: null,
            menuIndex: 2,
            hide: 1,
          },


        ],
      },
      {
        funcId: 'notice',
        menuLabel: '消息提醒',
        menuRouter: 'notice',
        menuIcon: 'fold',
        menuIndex: 9,
        hide: 1,
        childMenus: [
          {
            funcId: 'alert',
            menuLabel: 'Alert 警告',
            menuRouter: 'alert',
            menuIcon: null,
            menuIndex: 1,
            hide: 1,
          },
        ],
      },
      {
        funcId: 'charts',
        menuLabel: '图表',
        menuRouter: 'charts',
        menuIcon: 'fold',
        menuIndex: 10,
        hide: 1,
        childMenus: [
          {
            funcId: 'pieChart',
            menuLabel: '环形图',
            menuRouter: 'pieChart',
            menuIcon: null,
            menuIndex: 1,
            hide: 1,
          },
          {
            funcId: 'simplePieChart',
            menuLabel: '简单环形图',
            menuRouter: 'simplePieChart',
            menuIcon: null,
            menuIndex: 2,
            hide: 1,
          },
          {
            funcId: 'labelLinePieChart',
            menuLabel: '引导线环形图',
            menuRouter: 'labelLinePieChart',
            menuIcon: null,
            menuIndex: 3,
            hide: 1,
          },
          {
            funcId: 'columnChart',
            menuLabel: '柱状图',
            menuRouter: 'columnChart',
            menuIcon: null,
            menuIndex: 4,
            hide: 1,
          },
          {
            funcId: 'stackedBarChart',
            menuLabel: '堆叠柱状图',
            menuRouter: 'stackedBarChart',
            menuIcon: null,
            menuIndex: 5,
            hide: 1,
          },
          {
            funcId: 'barChart',
            menuLabel: '条形图',
            menuRouter: 'barChart',
            menuIcon: null,
            menuIndex: 6,
            hide: 1,
          },
          {
            funcId: 'ganttChart',
            menuLabel: '甘特图',
            menuRouter: 'ganttChart',
            menuIcon: null,
            menuIndex: 7,
            hide: 1,
          },
          {
            funcId: 'lineChart',
            menuLabel: '折线图',
            menuRouter: 'lineChart',
            menuIcon: null,
            menuIndex: 8,
            hide: 1,
          },
          {
            funcId: 'barLineChart',
            menuLabel: '柱状单折线图',
            menuRouter: 'barLineChart',
            menuIcon: null,
            menuIndex: 9,
            hide: 1,
          },
          {
            funcId: 'barDoubleLineChart',
            menuLabel: '柱状双折线图',
            menuRouter: 'barDoubleLineChart',
            menuIcon: null,
            menuIndex: 10,
            hide: 1,
          }
        ],
      }
    ],
  });
};

module.exports = {
  'POST /system/permission/list-menu': navmenu,
};
