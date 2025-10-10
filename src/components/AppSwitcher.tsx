'use client'

import { useRouter, usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'
import Image from 'next/image'

interface App {
  name: string
  slug: string
  iconUrl?: string
  iconEmoji?: string
}

const apps: App[] = [
  {
    name: 'Max AI: Alt Text',
    slug: 'max-ai-alt-text',
    iconUrl: 'https://image.selofy.com/cdn-cgi/image/format=webp,quality=60,width=40/selofy/alttext/Shopify%20app.svg',
  },
  {
    name: 'Coming Soon',
    slug: 'coming-soon',
    iconEmoji: '🚀',
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
        className="flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-accent transition-all duration-200 text-sm"
        aria-label="Switch app"
      >
        {currentApp.iconUrl ? (
          <Image
            src={currentApp.iconUrl}
            alt={currentApp.name}
            width={16}
            height={16}
            className="w-4 h-4"
          />
        ) : (
          <span className="text-base">{currentApp.iconEmoji}</span>
        )}
        <span className="font-medium">{currentApp.name}</span>
        <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ease-in-out ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 mt-2 min-w-[240px] bg-fd-background dark:bg-fd-background border border-fd-border rounded-md shadow-xl z-50 transition-all duration-200 ease-in-out origin-top ${
          isOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-95 pointer-events-none'
        }`}
      >
        <div className="p-1">
          {apps.map(app => (
            <button
              key={app.slug}
              onClick={() => handleSwitch(app.slug)}
              className={`w-full flex items-center gap-2 px-3 py-2 rounded-sm hover:bg-fd-accent transition-colors text-left text-sm ${
                app.slug === currentSlug ? 'bg-fd-accent' : ''
              }`}
            >
              {app.iconUrl ? (
                <Image
                  src={app.iconUrl}
                  alt={app.name}
                  width={16}
                  height={16}
                  className="w-4 h-4"
                />
              ) : (
                <span className="text-base">{app.iconEmoji}</span>
              )}
              <span className="font-medium flex-1">{app.name}</span>
              {app.slug === currentSlug && (
                <span className="ml-auto text-fd-primary">✓</span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
