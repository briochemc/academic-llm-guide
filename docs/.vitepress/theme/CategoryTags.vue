<script setup>
import { computed } from 'vue'
import { withBase } from 'vitepress'
import { categories as all } from '../categories.js'

// Renders a story's categories as pills linking back to the category page.
// Used on story cards and at the top of each story page. Unknown ids are
// skipped so a typo in frontmatter never breaks the build.
const props = defineProps({
  categories: { type: Array, default: () => [] },
})

const items = computed(() =>
  props.categories
    .filter((id) => id in all)
    .map((id) => ({ id, ...all[id] })),
)
</script>

<template>
  <p v-if="items.length" class="category-tags">
    <a v-for="c in items" :key="c.id" class="category-tag" :href="withBase(c.link)">{{ c.label }}</a>
  </p>
</template>

<style scoped>
.category-tags {
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}
.category-tag {
  position: relative;
  z-index: 1;
  font-size: 12px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 999px;
  background: var(--vp-c-brand-soft);
  color: var(--vp-c-brand-1);
  text-decoration: none;
  transition: background-color 0.2s;
}
.category-tag:hover {
  background: var(--vp-c-brand-1);
  color: var(--vp-c-white);
}
</style>
