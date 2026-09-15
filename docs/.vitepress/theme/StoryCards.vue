<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { data as stories } from '../stories.data.js'
import CategoryTags from './CategoryTags.vue'

// Lists stories as cards. With no props it lists every story (Stories index);
// with `category="coding"` it lists only stories tagged with that category
// id in their frontmatter (category pages).
const props = defineProps({
  category: { type: String, default: '' },
})

const shown = computed(() =>
  props.category
    ? stories.filter((s) => s.categories.includes(props.category))
    : stories,
)
</script>

<template>
  <div v-if="shown.length" class="story-cards">
    <article v-for="s in shown" :key="s.url" class="story-card">
      <h3 class="story-title">
        <a class="story-link" :href="withBase(s.url)">{{ s.title }}</a>
      </h3>
      <p class="story-desc">{{ s.description }}</p>
      <p class="story-meta">
        <span v-if="s.author">{{ s.author }}</span>
        <span v-if="s.author && s.date"> · </span>
        <span v-if="s.date">{{ s.date }}</span>
      </p>
      <p v-if="s.tools.length" class="story-tools">
        <span v-for="t in s.tools" :key="t" class="story-tool">{{ t }}</span>
      </p>
      <CategoryTags :categories="s.categories" class="story-categories" />
    </article>
  </div>
  <p v-else class="story-empty">No stories in this category yet.</p>
</template>

<style scoped>
.story-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  margin: 24px 0;
}
.story-card {
  position: relative;
  display: block;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  transition: border-color 0.2s;
}
.story-card:hover {
  border-color: var(--vp-c-brand-1);
}
.story-title {
  margin: 0 0 8px;
  padding: 0;
  border: 0;
  font-size: 16px;
  line-height: 1.4;
}
/* The title link is stretched over the whole card so the card stays
   clickable; category tags sit above it (z-index) so they remain their own
   links without nesting <a> elements. */
.story-link {
  color: inherit;
  text-decoration: none;
  font-weight: inherit;
}
.story-link::after {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 12px;
}
.story-desc {
  margin: 0 0 12px;
  font-size: 14px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}
.story-meta {
  margin: 0 0 8px;
  font-size: 13px;
  color: var(--vp-c-text-3);
}
.story-tools {
  margin: 0 0 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.story-tool {
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--vp-c-default-soft);
  color: var(--vp-c-text-2);
}
.story-empty {
  color: var(--vp-c-text-2);
}
</style>
