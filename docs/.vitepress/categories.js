// The guide's categories, keyed by the short id used in story frontmatter
// (`categories: [coding, hpc]`). Each maps to the page it links back to.
// Keep in sync with the nav in config.mjs and the feature cards in index.md.
export const categories = {
  unsw: { label: 'UNSW', link: '/guidance' },
  coding: { label: 'Coding', link: '/coding' },
  papers: { label: 'Reading & writing', link: '/papers' },
  hpc: { label: 'HPC (Gadi)', link: '/gadi' },
  safety: { label: 'Safety', link: '/risks' },
}
