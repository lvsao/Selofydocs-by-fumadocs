import { getSource, sources } from '@/lib/source'
import { DocsPage, DocsBody } from 'fumadocs-ui/page'
import { notFound } from 'next/navigation'

export default async function Page(props: {
  params: Promise<{ app: string; slug?: string[] }>
}) {
  const params = await props.params
  const currentSource = getSource(params.app)
  const page = currentSource.getPage(params.slug)
  if (!page) notFound()

  const MDX = page.data.body

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsBody>
        <h1>{page.data.title}</h1>
        <MDX />
      </DocsBody>
    </DocsPage>
  )
}

export async function generateStaticParams() {
  // 为所有app生成静态路径
  const params: Array<{ app: string; slug?: string[] }> = []

  for (const [appSlug, appSource] of Object.entries(sources)) {
    const appParams = appSource.generateParams()
    params.push(...appParams.map(p => ({ app: appSlug, ...p })))
  }

  return params
}

export async function generateMetadata(props: {
  params: Promise<{ app: string; slug?: string[] }>
}) {
  const params = await props.params
  const currentSource = getSource(params.app)
  const page = currentSource.getPage(params.slug)
  if (!page) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  }
}
