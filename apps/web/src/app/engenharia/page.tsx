import { Heading, Link, Text } from '@veidjz/ui'
import type { Metadata } from 'next'
import { PageFrame } from '../../components/PageFrame'
import { engineeringCopy } from '../../content/engineering'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Engenharia',
  description:
    'Como este site foi construído: stack, design system, qualidade e limites de conteúdo.',
}

export default function EngenhariaPage() {
  return (
    <PageFrame title="Engenharia">
      <Text>{engineeringCopy.intro}</Text>
      {engineeringCopy.sections.map((section) => (
        <section
          key={section.id}
          className={styles.section}
          aria-labelledby={`eng-${section.id}`}
        >
          <Heading as="h2" size="md" id={`eng-${section.id}`}>
            {section.heading}
          </Heading>
          <Text>{section.body}</Text>
        </section>
      ))}
      <section className={styles.section} aria-labelledby="eng-links">
        <Heading as="h2" size="md" id="eng-links">
          Links
        </Heading>
        <ul className={styles.links}>
          {engineeringCopy.links.map((link) => (
            <li key={link.href}>
              <Link href={link.href} rel="noopener noreferrer" target="_blank">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageFrame>
  )
}
