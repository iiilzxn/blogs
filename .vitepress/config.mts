import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'My Blog',
  description: '技术记录',
  base: '/blogs/',

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
      // 每新增一个系列，在这里加一行
    ],

    // 侧边栏：定义目录树
    sidebar: {
      // 示例：每新增一个系列，复制这个 block
      // '/系列路径/': [
      //   { text: '系列名', items: [
      //     { text: '文章标题', link: '/系列路径/文件名' },
      //   ]}
      // ],
    },

    outline: { level: [2, 3], label: '本文目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    search: { provider: 'local' },
  },

  markdown: {
    lineNumbers: true,
  },
})
