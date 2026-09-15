import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

export default withMermaid(defineConfig({
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
      { text: 'HPC (Gadi)', link: '/gadi' },
      { text: 'Safety', link: '/risks' },
      { text: 'Stories', link: '/stories/' },
    ],

    outline: { level: [2, 3], label: 'On this page' },
    search: { provider: 'local' },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/briochemc/academic-llm-guide' },
    ],
    footer: {
      message: 'Made by Benoît Pasquier and contributors; not an official UNSW or CCRC resource. <a href="/academic-llm-guide/contribute">How to contribute</a>.',
      copyright: 'Public domain (<a href="https://github.com/briochemc/academic-llm-guide/blob/main/LICENSE">Unlicense</a>). Free to use, share, and adapt, with no warranty.',
    },
  },

  mermaid: {},

  // mermaid 11.17 imports fastdom, a CommonJS package that vite must
  // pre-bundle in dev or the import fails ("does not provide an export named
  // 'default'") and the diagram shows mermaid's "Syntax error in text" bomb.
  // vitepress-plugin-mermaid pre-bundles mermaid's older CommonJS
  // dependencies but not this one; withMermaid merges this list with its own.
  // Only affects `docs:dev`; the production build was never affected.
  vite: {
    optimizeDeps: {
      include: ['fastdom', 'fastdom/extensions/fastdom-promised.js'],
    },
  },
}))
