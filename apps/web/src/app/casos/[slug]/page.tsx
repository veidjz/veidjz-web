import { Heading, Link, Text } from '@veidjz/ui'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PageFrame } from '../../../components/PageFrame'
import { cases, getCaseBySlug } from '../../../content/cases'
import styles from './page.module.css'

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
  return {
    title: item.title,
    description: item.summary,
  }
}

export default async function CasePage({ params }: CasePageProps) {
  const { slug } = await params
  const item = getCaseBySlug(slug)
  if (!item) {
    notFound()
  }

  return (
    <PageFrame title={item.title}>
      <div className={styles.meta}>
        <Text tone="muted">{item.company}</Text>
        <Text size="sm">{item.competencies}</Text>
      </div>

      <section className={styles.section} aria-labelledby="case-context">
        <Heading as="h2" size="md" id="case-context" className={styles.heading}>
          Contexto
        </Heading>
        <Text>{item.context}</Text>
      </section>

      <section className={styles.section} aria-labelledby="case-role">
        <Heading as="h2" size="md" id="case-role" className={styles.heading}>
          Responsabilidade
        </Heading>
        <Text>{item.responsibility}</Text>
      </section>

      {item.sections.map((section) => {
        const headingId = `case-${item.slug}-${section.heading
          .toLowerCase()
          .replace(/\s+/g, '-')}`
        return (
          <section
            key={section.heading}
            className={styles.section}
            aria-labelledby={headingId}
          >
            <Heading
              as="h2"
              size="md"
              id={headingId}
              className={styles.heading}
            >
              {section.heading}
            </Heading>
            {section.paragraphs?.map((paragraph) => (
              <Text key={paragraph}>{paragraph}</Text>
            ))}
            {section.bullets ? (
              <ul className={styles.bullets}>
                {section.bullets.map((bullet) => (
                  <li key={bullet}>
                    <Text as="span">{bullet}</Text>
                  </li>
                ))}
              </ul>
            ) : null}
          </section>
        )
      })}

      <section className={styles.section} aria-labelledby="case-result">
        <Heading as="h2" size="md" id="case-result" className={styles.heading}>
          Resultado
        </Heading>
        <Text>{item.result}</Text>
        <p className={styles.techs}>
          <span className={styles.techLabel}>Tecnologias</span>
          {item.techs.join(' · ')}
        </p>
        {item.links ? (
          <ul className={styles.links}>
            {item.links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        ) : null}
        <Text size="sm" className={styles.back}>
          <Link href="/casos">Todos os casos</Link>
        </Text>
      </section>
    </PageFrame>
  )
}
