import {defineConfig} from "vitepress";

export const zhThemeConfig = {
    nav: [
        { text: '首页', link: '/' },
        { text: '指南', link: '/guide/intro/whats-this' },
        { text: '参考', link: '/reference/cmdsAndPerms' },
    ],
    sidebar: {
        '/guide/':[
            {
                text: '介绍',
                collapsed: false,
                items: [
                    { text: '什么是VeloChatX',link: '/guide/intro/whats-this' },
                    { text: '开始使用',link: '/guide/intro/get-start' },
                ],
            },
            {
                text: '配置',
                collapsed: false,
                items:[
                    { text: '主配置',link: '/guide/config/main' },
                    { text: '跨服配置',link: '/guide/config/cross-server-chat' },
                    { text: '被动广播配置',link: '/guide/config/passive-broadcast' },
                    { text: '定时广播配置',link: '/guide/config/active-broadcast' },
                ]
            },
            {
                text: '权限和指令',
                link: '/reference/cmdsAndPerms'
            },
            {
                text: '占位符',link: '/reference/placeholder'
            },
        ],
        '/reference/':[
            {
                text: '参考',
                items:[
                    {
                        text: '权限和指令',
                        link: '/reference/cmdsAndPerms'
                    },
                    {
                        text: '占位符',link: '/reference/placeholder'
                    }
                ]
            }
        ]
    },
    footer:{
        copyright: 'Copyright © 2024-2025 苏州聪智汇智能科技有限公司版权所有'
    },
    lastUpdated: {
        text: '最后更新于',
        formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
        }
    }
}