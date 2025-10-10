import Link from 'next/link'
import { ArrowRight, Sparkles, Zap, Globe } from 'lucide-react'

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <main className="flex-1">
        <section className="container max-w-6xl mx-auto px-4 py-20 md:py-32">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Powered by GLM-4.5V SOTA AI</span>
            </div>

            {/* Title */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl md:text-7xl">
              Max AI: Alt Text
              <br />
              <span className="text-blue-600 dark:text-blue-400">Optimizer</span>
            </h1>

            {/* Description */}
            <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Automatically generate SEO-optimized alt text for all your Shopify store images using cutting-edge AI technology. Boost accessibility and search rankings effortlessly.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Link
                href="/docs"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
              >
                Read Documentation
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="https://www.selofy.com/apps/maxai-alttext"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 dark:border-gray-700 px-8 py-3 text-sm font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Get App
              </Link>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="container max-w-6xl mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border">
              <div className="rounded-full bg-blue-100 dark:bg-blue-900/30 p-3">
                <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold text-lg">SOTA AI Technology</h3>
              <p className="text-sm text-muted-foreground">
                Powered by GLM-4.5V, achieving top performance on 23 out of 28 benchmark tasks
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border">
              <div className="rounded-full bg-green-100 dark:bg-green-900/30 p-3">
                <Globe className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold text-lg">18 Languages</h3>
              <p className="text-sm text-muted-foreground">
                Automatically detects and generates alt text in your store's language
              </p>
            </div>

            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border">
              <div className="rounded-full bg-purple-100 dark:bg-purple-900/30 p-3">
                <Zap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold text-lg">Bulk Processing</h3>
              <p className="text-sm text-muted-foreground">
                Optimize hundreds of images in minutes with smart batch operations
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="container max-w-6xl mx-auto px-4 py-16">
          <div className="rounded-2xl border bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-8 md:p-12">
            <div className="grid gap-8 md:grid-cols-3 text-center">
              <div>
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">15K+</div>
                <div className="mt-2 text-sm text-muted-foreground">Images Optimized</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-600 dark:text-green-400">98%</div>
                <div className="mt-2 text-sm text-muted-foreground">Customer Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">2min</div>
                <div className="mt-2 text-sm text-muted-foreground">Average Processing Time</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-8">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2025 Selofy. All rights reserved.
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="https://selofy.com"
                target="_blank"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Website
              </Link>
              <Link
                href="https://www.selofy.com/apps/maxai-alttext"
                target="_blank"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Get App
              </Link>
              <Link
                href="/docs"
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Documentation
              </Link>
            </div>

            <div className="flex items-center gap-4">
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
  )
}
