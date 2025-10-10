import type { MDXComponents } from 'mdx/types'
import defaultComponents from 'fumadocs-ui/mdx'
import {
  Sparkles,
  Rocket,
  BookOpen,
  DollarSign,
  FileText,
  HelpCircle,
  Shield
} from 'lucide-react'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...defaultComponents,
    ...components,
    Sparkles,
    Rocket,
    BookOpen,
    DollarSign,
    FileText,
    HelpCircle,
    Shield,
  }
}
