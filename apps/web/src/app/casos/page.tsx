import { Link, Text } from '@veidjz/ui'
import type { Metadata } from 'next'
import { PageFrame } from '../../components/PageFrame'
import { cases } from '../../content/cases'

export const metadata: Metadata = {
  title: 'Casos',
}

export default function CasosPage() {
  return (
    <PageFrame title="Casos">
      <Text>
        Três estudos de caso do MVP, com o que pode ser divulgado publicamente.
      </Text>
      <ul>
        {cases.map((item) => (
          <li key={item.slug}>
            <Link href={`/casos/${item.slug}`}>
              {item.title} · {item.company}
            </Link>
          </li>
        ))}
      </ul>
    </PageFrame>
  )
}
