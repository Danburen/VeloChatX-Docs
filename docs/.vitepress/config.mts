import { defineConfig } from 'vitepress'
import {zhThemeConfig} from "./theme/zh";
import {enThemeConfig} from "./theme/en";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VeloChatX",
  description: "A powerful cross server chat plugin for Velocity",
  base: '/VeloChatX-Docs/',
  head: [
    ['link', { rel: 'icon', href: '/VeloChatX-Docs/favicon.svg' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/guide/markdown-examples' }
    ],
    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/guide/markdown-examples' },
          { text: 'Runtime API Examples', link: '/guide/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Danburen/VeloChatX' }
    ],
    logo: '/logo.svg'
  },
  locales:{
    root: {
      label: '简体中文',
      lang: 'zh',
      themeConfig: zhThemeConfig
    },
    en: {
      label: 'english',
      lang: 'zh',
      themeConfig: enThemeConfig
    }
  },
  search: {
    provider: 'local'
  }
})
