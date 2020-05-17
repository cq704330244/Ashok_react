const menulist = [
  {
    title: '首页',
    icon: 'home',
    key: '/admin/home',
  },
  {
    title: '基本组件',
    icon: 'laptop',
    key: '/admin/home/general',
    subs: [
      { key: '/admin/home/general/button', title: '按钮', icon: '' },
      { key: '/admin/home/general/icon', title: '图标', icon: '' },
    ],
  },
  {
    title: '导航组件',
    icon: 'bars',
    key: '/admin/home/navigation',
    subs: [
      { key: '/admin/home/navigation/dropdown', title: '下拉菜单', icon: '' },
      { key: '/admin/home/navigation/menu', title: '导航菜单', icon: '' },
      { key: '/admin/home/navigation/steps', title: '步骤条', icon: '' },
    ],
  },
  {
    title: '输入组件',
    icon: 'edit',
    key: '/admin/home/entry',
    subs: [
      {
        key: '/admin/home/entry/form',
        title: '表单',
        icon: '',
        subs: [
          {
            key: '/admin/home/entry/form/basic-form',
            title: '基础表单',
            icon: '',
          },
          {
            key: '/admin/home/entry/form/step-form',
            title: '分步表单',
            icon: '',
          },
        ],
      },
      { key: '/admin/home/entry/picselect', title: '图片选择', icon: '' },
      { key: '/admin/home/entry/upload', title: '上传', icon: '' },
    ],
  },
  {
    title: '显示组件',
    icon: 'desktop',
    key: '/admin/home/display',
    subs: [
      { key: '/admin/home/display/carousel', title: '轮播图', icon: '' },
      { key: '/admin/home/display/collapse', title: '折叠面板', icon: '' },
      { key: '/admin/home/display/list', title: '列表', icon: '' },
      { key: '/admin/home/display/table', title: '表格', icon: '' },
      { key: '/admin/home/display/tabs', title: '标签页', icon: '' },
    ],
  },
  {
    title: '反馈组件',
    icon: 'message',
    key: '/admin/home/feedback',
    subs: [
      { key: '/admin/home/feedback/modal', title: '对话框', icon: '' },
      {
        key: '/admin/home/feedback/notification',
        title: '通知提醒框',
        icon: '',
      },
      { key: '/admin/home/feedback/spin', title: '加载中', icon: '' },
    ],
  },
  {
    title: '其它',
    icon: 'other',
    key: '/admin/home/other',
    subs: [
      { key: '/admin/home/other/animation', title: '动画', icon: '' },
      { key: '/admin/home/other/gallery', title: '画廊', icon: '' },
      { key: '/admin/home/other/draft', title: '富文本', icon: '' },
      { key: '/admin/home/other/chart', title: '图表', icon: '' },
      { key: '/admin/home/other/loading', title: '加载动画', icon: '' },
      { key: '/home/other/404', title: '404', icon: '' },
      { key: '/admin/home/other/springText', title: '弹性文字', icon: '' },
    ],
  },
  {
    title: '版权',
    key: '/admin/home/scropt',
    icon: 'copy',
  },
];
export default menulist;
