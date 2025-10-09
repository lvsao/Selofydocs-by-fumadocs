import { defineConfig, defineDocs } from 'fumadocs-mdx/config'

export default defineConfig({
  lastModifiedTime: 'none',
})

export const docs = defineDocs({
  dir: 'content/docs',
})
