import { defineConfig, defineDocs } from 'fumadocs-mdx/config'
import { z } from 'zod'

export default defineConfig({
  lastModifiedTime: 'none',
})

// 定义多个 app 的文档源，添加 icon 字段支持
export const maxAiDocs = defineDocs({
  dir: 'content/docs/max-ai-alt-text',
  docs: {
    schema: frontmatter => {
      return frontmatter.extend({
        icon: z.string().optional(),
      })
    },
  },
})

export const comingSoonDocs = defineDocs({
  dir: 'content/docs/coming-soon',
})

// 保留默认导出以兼容
export const docs = maxAiDocs
