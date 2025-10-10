import { defineConfig, defineDocs } from 'fumadocs-mdx/config'

export default defineConfig({
  lastModifiedTime: 'none',
})

// 定义多个 app 的文档源
export const maxAiDocs = defineDocs({
  dir: 'content/docs/max-ai-alt-text',
})

export const comingSoonDocs = defineDocs({
  dir: 'content/docs/coming-soon',
})

// 保留默认导出以兼容
export const docs = maxAiDocs
