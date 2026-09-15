// Build-time loader: collects every story under docs/stories/ so the
// Stories index and the category pages can list them as cards. Add a story
// by dropping a markdown file in docs/stories/ with title, description,
// author, date, tools and categories in its frontmatter; nothing else needs
// editing. Category ids are the keys of categories.js.
import { createContentLoader } from 'vitepress'

export default createContentLoader('stories/*.md', {
  transform(raw) {
    return raw
      .filter(({ url }) => !url.endsWith('/stories/'))
      .map(({ url, frontmatter }) => ({
        url,
        title: frontmatter.title,
        description: frontmatter.description,
        author: frontmatter.author,
        date: frontmatter.date,
        tools: frontmatter.tools ?? [],
        categories: frontmatter.categories ?? [],
      }))
      .sort((a, b) => String(b.date ?? '').localeCompare(String(a.date ?? '')))
  },
})
