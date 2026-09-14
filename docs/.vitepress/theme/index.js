import DefaultTheme from 'vitepress/theme'
import StoryCards from './StoryCards.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('StoryCards', StoryCards)
  },
}
