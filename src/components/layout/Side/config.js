const menulist = [
  {
    title: "Option 1",
    key: "/admin/home",
    icon: "icon1"
  },
  {
    title: "Option 2",
    key: "/admin/h",
    icon: "icon2"
  },
  {
    title: "Option 3",
    key: "/admin/hom",
    icon: "icon3"
  },
  {
    title: "产品中心",
    key: "/admin/pro",
    icon: "icon4",
    children: [
      {
        title: "Option 5",
        key: "/admin/laser"
      },
      {
        title: "Option 6",
        key: "/admin/masha"
      },
      {
        title: "Option 7",
        key: "/admin/lanbo"
      }
    ]
  },
  {
    title: "联系我们",
    key: "/admin/contact",
    icon: "icon5",
    children: [
      {
        title: "邮箱",
        key: "/admin/email"
      },
      {
        title: "电话",
        key: "/admin/tel",
        children: [
          {
            title: "手机",
            key: "/admin/tel/PHONE"
          },
          {
            title: "座机",
            key: "/admin/tel/NUM"
          }
        ]
      }
    ]
  },
  {
    title: "最新资讯",
    key: "/admin/news"
  },
  {
    title: "图标",
    key: "/admin/icon"
  },
  {
    title: "版权",
    key: "/admin/scropt"
  }
];

export default menulist;
