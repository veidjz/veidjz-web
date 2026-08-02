import { Heading, Link, Text } from '@veidjz/ui'
import type { Metadata } from 'next'
import { PageFrame } from '../../components/PageFrame'
import { cases } from '../../content/cases'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Casos',
  description:
    'Estudos de caso públicos: Autopilot na BlisAI, OTA mobile na Shipeezi e arquitetura dos BFFs na Porto.',
}

export default function CasosPage() {
  return (
    <PageFrame title="Casos">
      <Text>
        Três estudos de caso do MVP, com o que pode ser divulgado publicamente.
        Cada página detalha contexto, responsabilidade, ações e resultado.
      </Text>
      <ul className={styles.list}>
        {cases.map((item) => (
          <li key={item.slug} className={styles.item}>
            <div className={styles.head}>
              <Heading as="h2" size="md" className={styles.title}>
                <Link href={`/casos/${item.slug}`}>{item.title}</Link>
              </Heading>
              <Text tone="muted" size="sm" as="span" className={styles.company}>
                {item.company}
              </Text>
            </div>
            <Text>{item.summary}</Text>
          </li>
        ))}
      </ul>
    </PageFrame>
  )
}
