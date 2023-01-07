// docs/vite.config.js
import { defineConfig } from 'vite'
import { SimpleSearch } from 'vitepress-plugin-simple-search'
import { SearchPlugin } from 'vitepress-plugin-search'

const options = {
  previewLength: 62,
  buttonLabel: 'Search',
  placeholder: 'Search docs',
}

export default defineConfig({
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: [],
  },
  plugins: [SimpleSearch(), SearchPlugin(options)],
})
