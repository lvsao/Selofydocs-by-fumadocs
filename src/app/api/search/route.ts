import { source } from '@/lib/source'
import { createFromSource } from 'fumadocs-core/search/server'

// 使用默认源（max-ai-alt-text）进行搜索
// TODO: 未来可以扩展为多源搜索
export const { GET } = createFromSource(source)
