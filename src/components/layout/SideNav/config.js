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
      { key: '/admin/home/general/picselect', title: '图片选择', icon: '' },
      { key: '/admin/home/general/listscroll', title: '滚动列表', icon: '' },
    ],
  },
  {
    title: '展示组件',
    icon: 'desktop',
    key: '/admin/home/display',
    subs: [
      { key: '/admin/home/display/base', title: '轮播图', icon: '' },
      {
        key: '/admin/home/display/icon',
        title: '图标',
        icon: '',
        subs: [
          { key: '/admin/home/display/icon/demo', title: '文字图标', icon: '' },
        ],
      },
    ],
  },
  {
    title: '版权',
    key: '/admin/home/scropt',
    icon: 'copy',
  },
];
export default menulist;
