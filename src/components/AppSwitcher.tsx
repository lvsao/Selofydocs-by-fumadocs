'use client'

import { useRouter, usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

interface App {
  name: string
  slug: string
  icon?: string
}

const apps: App[] = [
  {
    name: 'Max AI: Alt Text',
    slug: 'max-ai-alt-text',
    icon: '🤖',
  },
  {
    name: 'Coming Soon',
    slug: 'coming-soon',
    icon: '🚀',
  },
]

export function AppSwitcher() {
  const router = useRouter()
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  // 从路径推断当前 app
  const getCurrentApp = () => {
    if (pathname.startsWith('/docs/max-ai-alt-text')) return 'max-ai-alt-text'
    if (pathname.startsWith('/docs/coming-soon')) return 'coming-soon'
    return 'max-ai-alt-text' // 默认
  }

  const currentSlug = getCurrentApp()
  const currentApp = apps.find(app => app.slug === currentSlug) || apps[0]

  const handleSwitch = (slug: string) => {
    router.push(`/docs/${slug}`)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-accent transition-colors"
        aria-label="Switch app"
      >
        <span className="text-lg">{currentApp.icon}</span>
        <span className="font-medium">{currentApp.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute top-full left-0 mt-2 w-56 bg-popover border rounded-md shadow-lg z-50">
            <div className="p-1">
              {apps.map(app => (
                <button
                  key={app.slug}
                  onClick={() => handleSwitch(app.slug)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-accent transition-colors text-left ${
                    app.slug === currentSlug ? 'bg-accent' : ''
                  }`}
                >
                  <span className="text-lg">{app.icon}</span>
                  <span className="font-medium">{app.name}</span>
                  {app.slug === currentSlug && (
                    <span className="ml-auto text-primary">✓</span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
