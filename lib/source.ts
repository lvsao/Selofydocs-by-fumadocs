import { loader } from 'fumadocs-core/source'
import { maxAiDocs, comingSoonDocs } from '@/.source'

// 定义所有 app 的源
export const sources = {
  'max-ai-alt-text': loader({
    baseUrl: '/docs/max-ai-alt-text',
    source: maxAiDocs.toFumadocsSource(),
  }),
  'coming-soon': loader({
    baseUrl: '/docs/coming-soon',
    source: comingSoonDocs.toFumadocsSource(),
  }),
}

// 默认源（兼容性）
export const source = sources['max-ai-alt-text']

// 根据 slug 获取源的辅助函数
export function getSource(slug: string) {
  return sources[slug as keyof typeof sources] || sources['max-ai-alt-text']
}
