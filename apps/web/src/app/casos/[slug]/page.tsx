import { Text } from '@veidjz/ui'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageFrame } from '../../../components/PageFrame'
import { cases, getCaseBySlug } from '../../../content/cases'

interface CasePageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return cases.map((item) => ({ slug: item.slug }))
}

export async function generateMetadata({
  params,
}: CasePageProps): Promise<Metadata> {
  const { slug } = await params
  const item = getCaseBySlug(slug)
  if (!item) {
    return { title: 'Caso' }
  }
  return { title: item.title }
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params
  const item = getCaseBySlug(slug)
  if (!item) {
    notFound()
  }

  return (
    <PageFrame title={item.title}>
      <Text tone="muted">{item.company}</Text>
      <Text>{item.summary}</Text>
    </PageFrame>
  )
}
