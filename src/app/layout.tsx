import './global.css'
import { RootProvider } from 'fumadocs-ui/provider'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Selofy Docs',
    template: '%s | Selofy Docs',
  },
  description: 'Official documentation for Selofy Shopify apps',
  keywords: ['Shopify', 'Alt Text', 'SEO', 'AI', 'Documentation'],
  icons: {
    icon: 'https://image.selofy.com/cdn-cgi/image/format=auto,quality=85/selofy/alttext/selofy-favi.png',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  )
}
