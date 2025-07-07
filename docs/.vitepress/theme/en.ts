import {defineConfig} from "vitepress";

export const enThemeConfig = {
    nav: [
        { text: 'Home', link: '/en/' },
        { text: 'Guide', link: '/en/guide/intro/whats-this' },
        { text: 'Reference', link: '/en/reference/cmdsAndPerms' },
    ],
    sidebar: {
        '/en/guide/': [
            {
                text: 'Introduction',
                collapsed: false,
                items: [
                    { text: 'What is VeloChatX', link: '/en/guide/intro/whats-this' },
                    { text: 'Getting Started', link: '/en/guide/intro/get-start' },
                ],
            },
            {
                text: 'Configuration',
                collapsed: false,
                items: [
                    { text: 'Main Configuration', link: '/en/guide/config/main' },
                    { text: 'Cross-Server Configuration', link: '/en/guide/config/cross-server-chat' },
                    { text: 'Passive Broadcast', link: '/en/guide/config/passive-broadcast' },
                    { text: 'Scheduled Broadcast', link: '/en/guide/config/active-broadcast' },
                ]
            },
            {
                text: 'Permissions & Commands',
                link: '/en/reference/cmdsAndPerms'
            },
            {
                text: 'Placeholders', link: '/en/reference/placeholder'
            },
        ],
        '/en/reference/': [
            {
                text: 'Reference',
                items: [
                    {
                        text: 'Permissions & Commands',
                        link: '/en/reference/cmdsAndPerms'
                    },
                    {
                        text: 'Placeholders', link: '/en/reference/placeholder'
                    }
                ]
            }
        ]
    },
    footer: {
        copyright: 'Copyright © 2024-2025 Suzhou Congzhihui Intelligent Technology Co., Ltd. China. All Rights Reserved'
    },
    lastUpdated: {
        text: 'Last updated',
        formatOptions: {
            dateStyle: 'full',
            timeStyle: 'medium'
        }
    }
}