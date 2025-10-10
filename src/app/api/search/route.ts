import { sources } from '@/lib/source'
import { createFromSource } from 'fumadocs-core/search/server'

// 合并所有app的源进行搜索
const allSources = Object.values(sources)
export const { GET } = createFromSource(allSources)
