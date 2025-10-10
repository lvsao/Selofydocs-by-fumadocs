import { DocsLayout } from 'fumadocs-ui/layouts/docs'
import type { ReactNode } from 'react'
import { source } from '@/lib/source'
import Image from 'next/image'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      tree={source.pageTree}
      nav={{
        title: (
          <div className="flex items-center gap-2">
            <Image
              src="https://image.selofy.com/cdn-cgi/image/format=auto,quality=85,width=32,height=32/selofy/SELOFY-256.svg"
              alt="Selofy"
              width={32}
              height={32}
              className="rounded"
            />
            <span>Selofy Docs</span>
          </div>
        ),
        url: '/docs',
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
      sidebar={{
        defaultOpenLevel: 0,
      }}
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
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#95BF47] hover:bg-[#7FA63D] text-white text-sm font-medium transition-colors shadow-sm"
                  aria-label="Shopify Partner"
                >
                  <svg className="w-4 h-4" viewBox="0 0 32 32" fill="currentColor">
                    <path d="M24.337 9.043c-.034-.192-.163-.288-.257-.288-.087 0-2.054-.048-2.054-.048s-1.306-1.287-1.44-1.431c-.134-.143-.394-.105-.498-.077 0 0-.25.077-.662.202-.02-.058-.048-.125-.076-.192-.26-.76-.64-1.161-1.124-1.161h-.067c-.163-.202-.355-.288-.566-.288-.73 0-1.086.74-1.23 1.111-.403.125-.902.287-1.412.432-.48.144-.48.154-.537.576-.038.288-.527 4.074-.527 4.074l3.776.903s-1.152-7.647-1.162-7.725c-.077-.298.086-.442.23-.413.192.029.412.365.488.73.048.24.787 5.995.787 5.995l1.441-.345c0 0-.73-4.899-.778-5.177-.058-.317.106-.461.24-.442.125.019.336.298.442.643.048.173.74 4.785.74 4.785l1.22-.298c-.173-1.22-.278-1.958-.278-1.958zm-4.842-5.466c.23.019.432.23.509.518.163.615.307 2.332.307 2.332-.585.173-1.18.355-1.775.537.173-.979.49-2.458.96-3.387zm.355 5.438c-.048 0-.374-.105-.854-.259-.48-.144-1.16-.346-1.64-.48.24-1.21.48-2.352.729-3.407.365.24.643.518.816.835.067.125.125.25.163.384.125.48.24 1.22.403 2.927zm-2.246-4.985c0 .03-.019.058-.019.077-.23.778-.538 2.025-.74 3.21-.461-.154-.909-.298-1.152-.384.326-1.632.816-3.37 1.41-3.37.23 0 .442.192.537.48zm3.1 8.423c-.115-.03-.23-.067-.346-.096l-.355-.096c-1.45-.413-2.812-.826-3.776-1.075l.24-1.699c.73.192 1.93.528 3.398.94.585.163 1.143.326 1.584.442l-.74 1.584zM20 15.634c-.23.566-.74 1.268-1.584 1.738-.835.47-1.746.595-2.323.595-.23 0-.442-.03-.642-.087v-2.438c.211.077.453.115.653.115.48 0 .768-.154.979-.346.23-.221.432-.576.48-.979l2.438-.596zm-4.548-8.576c-.077 0-.163.01-.24.01-.23 0-.48.03-.73.077v2.322c.23-.048.48-.077.73-.077h.24c0 0 .25-2.322.25-2.332zm-.24 8.384v-2.39c-.24-.057-.48-.105-.73-.154l-.24-.048v2.332l.24.048c.24.048.48.096.73.154z"/>
                  </svg>
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
