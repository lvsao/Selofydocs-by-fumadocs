import { getSource } from '@/lib/source'
import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import type { ReactNode } from 'react'
import Image from 'next/image'
import { AppSwitcher } from '@/components/AppSwitcher'

export default async function AppLayout({
  children,
  params,
}: {
  children: ReactNode
  params: Promise<{ app: string }>
}) {
  const { app } = await params
  const currentSource = getSource(app)

  return (
    <DocsLayout
      tree={currentSource.pageTree}
      nav={{
        title: (
          <Image
            src="https://image.selofy.com/cdn-cgi/image/format=auto,quality=85,height=32/selofy/alttext/selofy_logo.svg"
            alt="Selofy"
            width={120}
            height={32}
            className="h-8 w-auto"
          />
        ),
        url: `/docs/${app}`,
        children: <AppSwitcher />,
      }}
      sidebar={{
        defaultOpenLevel: 0,
      }}
      links={[
        {
          text: '🌐 Website',
          url: 'https://selofy.com',
          external: true,
        },
        {
          text: '📱 Get App',
          url: 'https://www.selofy.com/apps/maxai-alttext',
          external: true,
        },
      ]}
    >
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">{children}</div>

        {/* Social Media Footer */}
        <footer className="border-t mt-auto py-6">
          <div className="container max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <p className="text-sm text-muted-foreground">
                  © 2025 Selofy. All rights reserved.
                </p>

                {/* Shopify Partner Badge */}
                <a
                  href="https://www.shopify.com/partners/directory/partner/metabrandl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-black hover:bg-gray-800 text-white text-sm font-medium transition-colors shadow-sm"
                  aria-label="Shopify Partner"
                >
                  <img
                    src="https://cdn.jsdelivr.net/npm/simple-icons@v15/icons/shopify.svg"
                    alt="Shopify"
                    className="w-4 h-4 invert"
                  />
                  Shopify Partner
                </a>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Follow us:</span>
                <a
                  href="https://www.linkedin.com/in/lvsao/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>

                <a
                  href="https://x.com/shawn_lvsao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>

                <a
                  href="https://www.youtube.com/@Shawn_lvsao"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  aria-label="YouTube"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </DocsLayout>
  )
}
