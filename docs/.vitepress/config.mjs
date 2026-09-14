import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'GenAI tools guide',
  description: 'A lightweight, sourced guide to choosing and using generative AI tools (large language models) in research workflows.',
  base: '/academic-llm-guide/',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'UNSW', link: '/guidance' },
      { text: 'Coding', link: '/coding' },
      { text: 'Reading & writing', link: '/papers' },
      { text: 'Gadi', link: '/gadi' },
      { text: 'Safety', link: '/risks' },
    ],

    sidebar: [
      { text: 'GenAI at UNSW', link: '/guidance' },
      { text: 'GenAI for coding', link: '/coding' },
      { text: 'Reading & writing papers', link: '/papers' },
      { text: 'GenAI on Gadi / HPC', link: '/gadi' },
      { text: 'Risks & practices', link: '/risks' },
      { text: 'Sandboxing agentic tools', link: '/sandboxing' },
      { text: 'Build the site locally', link: '/build-locally' },
    ],

    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/briochemc/academic-llm-guide' },
    ],
    footer: {
      message: 'Made by Benoît Pasquier and contributors; not an official UNSW or CCRC resource.',
      copyright: 'Public domain (<a href="https://github.com/briochemc/academic-llm-guide/blob/main/LICENSE">Unlicense</a>). Free to use, share, and adapt, with no warranty.',
    },
  },
})
