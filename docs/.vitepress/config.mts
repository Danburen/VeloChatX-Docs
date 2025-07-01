import { defineConfig } from 'vitepress'
import {zhThemeConfig} from "./theme/zh";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "VeloChatX",
  description: "A powerful cross server chat plugin for Velocity",
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
      label: 'English',
      lang: 'en',
      link: '/en/'
    }
  },
  search: {
    provider: 'local'
  }
})
