import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: 'My Blog',
  description: '技术记录',
  base: '/blogs/',
  srcExclude: ['说明.md'],

  themeConfig: {
    // 顶部导航
    nav: [
      { text: '首页', link: '/' },
    ],

    // 侧边栏：定义目录树
    sidebar: {
      '/java-interview/': [
        {
          text: 'Java 面试题',
          items: [
            { text: 'Java 基础面试题', link: '/java-interview/java-basics' },
          ]
        }
      ],
    },

    outline: { level: [2, 3], label: '本文目录' },
    docFooter: { prev: '上一篇', next: '下一篇' },
    search: { provider: 'local' },
  },

  markdown: {
    lineNumbers: true,
  },
})
