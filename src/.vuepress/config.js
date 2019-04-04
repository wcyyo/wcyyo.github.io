module.exports = {
  title: "Wcy's Blog",
  description: 'This is my blog',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  port: 5000,
  serviceWorker: false,
  ga: 'UA-137691426-1',
  theme: 'meteorlxy',
  themeConfig: {
    lang: require('vuepress-theme-meteorlxy/lib/langs/zh-CN'),
    personalInfo: {
      nickname: 'wcy',
      description: 'cool as a cucumber',
      email: 'wcyqiqi@gmail.com',
      location: 'Beijing , China',
      organization: '群众',
      avatar: '/img/avatar.png',
      sns: {
        github: {
          account: 'meteorlxy',
          link: 'https://github.com/wcyyo',
        }
      }
    },

    header: {
      // header 的背景，可以使用图片，或者随机变化的图案（geopattern）
      background: {
        // url: '/assets/img/bg.jpg',
        useGeo: true,
      },
      showTitle: true,
    },
    lastUpdated: true,
    nav: [
      { text: '首页', link: '/', exact: true },
      { text: '文章', link: '/posts/', exact: false },
    ],
    // 评论配置，参考下方 [页面评论] 章节
    comments: {
      owner: 'wcyyo',
      repo: 'vssue-blog',
      clientId: '71d7454ceb301758d1af',
      clientSecret: '407e62bd2b784eac6d4fbfe1a1475c1f529f0f35'
    },
  },
}