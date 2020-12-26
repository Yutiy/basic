const sidebar = require('./sidebar')

module.exports = {
  // 要部署的仓库名字
  base: '/',
  repo: 'https://github.com/Yutiy/basic',
  navbar: true,
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页",
  lastUpdated: '更新于',
  noFoundPageByTencent: false,

  sidebar,
  subSidebar: 'auto',

  // blogConfig: {
  //   category: {
  //     location: 6,
  //     text: '分类',
  //   },
  //   tag: {
  //     location: 7,
  //     text: '标签',
  //   }
  // },

  nav: [
    {
      text: '网络基础',
      items: [
        { text: 'TCP协议', link: '/tcp/' },
        { text: 'HTTP协议', link: '/http/' },
        { text: '前端安全', link: '/secure/xss/' },
      ]
    },
    { text: '排序算法', link: '/sort/bubble/' },
    { text: '数据结构', link: '/data-structure/queue/' },
    { text: '设计模式', link: '/design_pattern/' },
    { text: '正则表达式', link: '/regexp/group/' },
    { text: '其他', link: '/other/vim_shortcuts/' },
  ]
}
