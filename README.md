# Selofy Documentation

Official documentation site for Selofy Shopify apps, built with [Fumadocs](https://fumadocs.vercel.app) and Next.js 15.

## 🚀 Quick Start

### Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000/docs](http://localhost:3000/docs) to view the documentation.

### Production Build

```bash
npm run build
npm start
```

## 📁 Project Structure

```
selofy-docs/
├── content/
│   └── docs/                          # Documentation content (MDX)
│       ├── index.mdx                  # Home page
│       ├── max-ai-alt-text-optimizer/ # Max AI Alt Text Optimizer docs
│       │   ├── index.mdx              # App overview
│       │   ├── getting-started.mdx    # Installation guide
│       │   ├── features/              # Feature documentation
│       │   │   └── ai-optimization.mdx
│       │   ├── guides/                # How-to guides
│       │   │   ├── dashboard.mdx
│       │   │   ├── templates.mdx
│       │   │   └── automation.mdx
│       │   └── pricing/               # Pricing info
│       │       └── plans.mdx
│       └── support/                   # Support resources
│           ├── index.mdx
│           └── faq.mdx
├── src/
│   └── app/                           # Next.js App Router
│       ├── layout.tsx                 # Root layout
│       ├── page.tsx                   # Redirects to /docs
│       ├── global.css                 # Global styles
│       └── docs/                      # Docs routes
│           ├── layout.tsx             # Docs layout with sidebar
│           └── [[...slug]]/page.tsx   # Dynamic doc pages
├── lib/
│   └── source.ts                      # Fumadocs source config
├── source.config.ts                   # Fumadocs MDX config
├── next.config.ts                     # Next.js config
├── tailwind.config.ts                 # Tailwind CSS config
└── tsconfig.json                      # TypeScript config
```

## ✨ Features

- **Fumadocs UI**: Beautiful documentation UI with sidebar navigation
- **MDX Support**: Write docs in MDX with full component support
- **Dark Mode**: Built-in dark mode support
- **SEO Optimized**: Metadata and sitemap generation
- **Type-Safe**: Full TypeScript support
- **Fast**: Static site generation with Next.js 15

## 📝 Adding Documentation

1. Create a new `.mdx` file in `content/docs/`
2. Add frontmatter:
   ```mdx
   ---
   title: Page Title
   description: Page description
   ---
   ```
3. Write your content in MDX
4. The page will automatically appear in navigation

## 🎨 Styling

- **Tailwind CSS**: Utility-first CSS framework
- **Fumadocs UI Styles**: Imported in `src/app/layout.tsx` before global.css
- **Global Styles**: Tailwind directives in `src/app/global.css`
- **Dark Mode**: Automatic with `class` strategy

### Important: CSS Configuration

**Tailwind CSS Version**: Must use v3.x (v4 is not compatible with Next.js/Fumadocs yet)

**Global CSS Setup** (`src/app/global.css`):
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer fumadocs {
  @import 'fumadocs-ui/style.css';
}
```

The `@layer fumadocs` wrapper is CRITICAL - it ensures Fumadocs' CSS is processed in the same context as Tailwind directives, preventing `@layer base` errors.

**Tailwind Config** (`tailwind.config.ts`):
- Do NOT use `createPreset` from `fumadocs-ui/tailwind-plugin` (not exported)
- Include `./node_modules/fumadocs-ui/dist/**/*.js` in content paths

## 🚢 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms

Build the static site:

```bash
npm run build
```

Deploy the `.next` folder to your hosting provider.

## 📚 Documentation Content

Current documentation covers:

- **Max AI Alt Text Optimizer**
  - Getting Started
  - AI Optimization
  - Dashboard Guide
  - Template Configuration
  - Automation Setup
  - Pricing Plans
- **Support**
  - FAQ
  - Contact Info

## 🔧 Tech Stack

- **Framework**: Next.js 15.5.4
- **UI Library**: Fumadocs UI 15.8.5
- **Styling**: Tailwind CSS 3.4.1
- **Language**: TypeScript 5
- **Package Manager**: npm

## 📄 License

Proprietary - Selofy © 2025
