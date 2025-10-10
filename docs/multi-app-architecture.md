# 多 App 文档架构设计

## 需求理解

**正确理解**：
- 多个 Shopify App，每个 App 有**完全独立**的文档
- 每个 App 有自己的：
  - Getting Started
  - Features
  - Guides
  - Pricing
  - FAQ
  - Changelog
  - Privacy Policy
- 通过左上角下拉菜单切换 App（如 Fumadocs 示例截图）

**错误理解**（之前的实现）：
- ❌ 只在 changelog 页面用 Tab 切换
- ❌ 其他页面共享

---

## 推荐架构：路由分组

### 方案一：扁平路由结构（推荐）

```
content/docs/
├── max-ai-alt-text/        # Max AI App 文档
│   ├── index.mdx
│   ├── getting-started.mdx
│   ├── features.mdx
│   ├── changelog.mdx
│   ├── privacy-policy.mdx
│   ├── guides/
│   │   ├── automation.mdx
│   │   └── templates.mdx
│   └── meta.json
│
├── app-b/                  # App B 文档
│   ├── index.mdx
│   ├── getting-started.mdx
│   └── meta.json
│
└── app-c/                  # App C 文档
    ├── index.mdx
    └── meta.json
```

**URL 结构**：
- `/docs/max-ai-alt-text` - Max AI 首页
- `/docs/max-ai-alt-text/getting-started`
- `/docs/max-ai-alt-text/changelog`
- `/docs/app-b` - App B 首页
- `/docs/app-b/getting-started`

**优点**：
- ✅ 完全独立的文档树
- ✅ URL 清晰易懂
- ✅ SEO 友好
- ✅ 易于维护

---

## Fumadocs 实现

### 1. 配置多个文档源

```typescript
// source.config.ts
import { defineConfig, defineDocs } from 'fumadocs-mdx/config'

export default defineConfig({
  lastModifiedTime: 'none',
})

// 定义多个文档集合
export const maxAiDocs = defineDocs({
  dir: 'content/docs/max-ai-alt-text',
})

export const appBDocs = defineDocs({
  dir: 'content/docs/app-b',
})

export const appCDocs = defineDocs({
  dir: 'content/docs/app-c',
})
```

### 2. 创建统一 Source

```typescript
// lib/source.ts
import { loader } from 'fumadocs-core/source'
import { maxAiDocs, appBDocs, appCDocs } from '@/.source'

// 合并所有文档源
export const sources = {
  'max-ai-alt-text': loader({
    baseUrl: '/docs/max-ai-alt-text',
    source: maxAiDocs.toFumadocsSource(),
  }),
  'app-b': loader({
    baseUrl: '/docs/app-b',
    source: appBDocs.toFumadocsSource(),
  }),
  'app-c': loader({
    baseUrl: '/docs/app-c',
    source: appCDocs.toFumadocsSource(),
  }),
}

// 默认源
export const source = sources['max-ai-alt-text']
```

### 3. App 切换下拉菜单

```typescript
// src/app/docs/layout.tsx
import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import { sources } from '@/lib/source'

const apps = [
  {
    name: 'Max AI: Alt Text',
    value: 'max-ai-alt-text',
    icon: '🤖',
  },
  {
    name: 'App B',
    value: 'app-b',
    icon: '🔧',
  },
  {
    name: 'App C',
    value: 'app-c',
    icon: '⚡',
  },
]

export default function Layout({ children }: { children: ReactNode }) {
  // 根据 URL 路径确定当前 App
  const currentApp = getCurrentApp() // 从 URL 推断

  return (
    <DocsLayout
      tree={sources[currentApp].pageTree}
      nav={{
        title: (
          <AppSwitcher apps={apps} current={currentApp} />
        ),
      }}
    >
      {children}
    </DocsLayout>
  )
}
```

### 4. AppSwitcher 组件

```typescript
// components/AppSwitcher.tsx
'use client'

import { useRouter, usePathname } from 'next/navigation'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

interface App {
  name: string
  value: string
  icon: string
}

export function AppSwitcher({ apps, current }: { apps: App[], current: string }) {
  const router = useRouter()
  const pathname = usePathname()

  const handleChange = (value: string) => {
    // 切换到新 App 的首页
    router.push(`/docs/${value}`)
  }

  const currentAppData = apps.find(app => app.value === current)

  return (
    <Select value={current} onValueChange={handleChange}>
      <SelectTrigger className="w-[200px]">
        <SelectValue>
          <div className="flex items-center gap-2">
            <span>{currentAppData?.icon}</span>
            <span>{currentAppData?.name}</span>
          </div>
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        {apps.map(app => (
          <SelectItem key={app.value} value={app.value}>
            <div className="flex items-center gap-2">
              <span>{app.icon}</span>
              <span>{app.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
```

---

## Changelog 自动化调整

### Workflow 修改

```yaml
- name: Update changelog
  env:
    PROJECT_NAME: "max-ai-alt-text"  # 使用文件夹名
  run: |
    CHANGELOG_FILE="content/docs/${PROJECT_NAME}/changelog.mdx"

    # 直接更新对应 App 的 changelog
    # 不再使用 Tab 结构
```

### 文件结构

每个 App 有独立的 changelog：
- `content/docs/max-ai-alt-text/changelog.mdx`
- `content/docs/app-b/changelog.mdx`
- `content/docs/app-c/changelog.mdx`

---

## 迁移步骤

### Phase 1: 重构现有内容

```bash
# 创建 Max AI 文档文件夹
mkdir -p content/docs/max-ai-alt-text

# 移动现有文档
mv content/docs/index.mdx content/docs/max-ai-alt-text/
mv content/docs/features.mdx content/docs/max-ai-alt-text/
mv content/docs/getting-started.mdx content/docs/max-ai-alt-text/
mv content/docs/guides content/docs/max-ai-alt-text/
mv content/docs/pricing.mdx content/docs/max-ai-alt-text/
mv content/docs/faq.mdx content/docs/max-ai-alt-text/
mv content/docs/changelog.mdx content/docs/max-ai-alt-text/
mv content/docs/privacy-policy.mdx content/docs/max-ai-alt-text/
mv content/docs/meta.json content/docs/max-ai-alt-text/
```

### Phase 2: 创建占位 App

```bash
# 创建 Coming Soon App
mkdir -p content/docs/coming-soon
```

```mdx
---
title: Coming Soon
description: More apps on the way
---

# 🚀 Coming Soon

We're working on additional Shopify apps to help you grow your business.

Stay tuned for updates!
```

### Phase 3: 更新配置

修改 `source.config.ts` 和 `lib/source.ts` 支持多源。

### Phase 4: 实现 AppSwitcher

添加下拉菜单组件和切换逻辑。

---

## URL 重定向

为了兼容旧 URL：

```typescript
// middleware.ts
export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()

  // 重定向旧 URL 到新结构
  if (url.pathname === '/docs') {
    url.pathname = '/docs/max-ai-alt-text'
    return NextResponse.redirect(url)
  }

  if (url.pathname.startsWith('/docs/') && !url.pathname.includes('max-ai-alt-text')) {
    // 如果是旧的文档路径，重定向到 max-ai-alt-text
    const segments = url.pathname.split('/')
    if (segments.length === 3) { // /docs/page-name
      url.pathname = `/docs/max-ai-alt-text/${segments[2]}`
      return NextResponse.redirect(url)
    }
  }
}
```

---

## 最终效果

### 左上角导航
```
[Selofy Logo] [Max AI: Alt Text ▼] [Website] [Get App]
                     ↓
            ┌─────────────────────┐
            │ 🤖 Max AI: Alt Text │ ✓
            │ 🚀 Coming Soon      │
            └─────────────────────┘
```

### 侧边栏（每个 App 独立）

**Max AI Alt Text**:
- Overview
- Features
- Getting Started
- Guides
  - Automation
  - Templates
- Pricing
- Changelog
- FAQ
- Privacy Policy

**Coming Soon**:
- Overview

---

## 优势

1. **完全隔离**：每个 App 独立管理，互不影响
2. **易于扩展**：添加新 App 只需创建新文件夹
3. **URL 清晰**：`/docs/app-name/page`
4. **SEO 优化**：每个 App 独立索引
5. **维护简单**：结构清晰，易于理解

---

## 下一步

1. 创建新的文件结构
2. 实现 AppSwitcher 组件
3. 更新 workflow 路径
4. 测试切换功能
