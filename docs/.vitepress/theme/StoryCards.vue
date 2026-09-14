<script setup>
import { withBase } from 'vitepress'
import { data as stories } from '../stories.data.js'
</script>

<template>
  <div class="story-cards">
    <a v-for="s in stories" :key="s.url" class="story-card" :href="withBase(s.url)">
      <h3 class="story-title">{{ s.title }}</h3>
      <p class="story-desc">{{ s.description }}</p>
      <p class="story-meta">
        <span v-if="s.author">{{ s.author }}</span>
        <span v-if="s.author && s.date"> · </span>
        <span v-if="s.date">{{ s.date }}</span>
      </p>
      <p v-if="s.tools.length" class="story-tools">
        <span v-for="t in s.tools" :key="t" class="story-tool">{{ t }}</span>
      </p>
    </a>
  </div>
</template>

<style scoped>
.story-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 16px;
  margin: 24px 0;
}
.story-card {
  display: block;
  padding: 20px;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  background: var(--vp-c-bg-soft);
  color: inherit;
  text-decoration: none;
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
  margin: 0;
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
</style>
