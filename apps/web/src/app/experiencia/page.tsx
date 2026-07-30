import { Heading, Link, Text } from '@veidjz/ui'
import type { Metadata } from 'next'
import { PageFrame } from '../../components/PageFrame'
import { experienceCopy } from '../../content/experience'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Experiência',
  description:
    'Linha do tempo profissional de João Victor Veidz: BlisAI, Shipeezi, WeFit/Porto e Luz Soluções Financeiras.',
}

export default function ExperienciaPage() {
  return (
    <PageFrame title="Experiência">
      <Text>{experienceCopy.intro}</Text>
      <ol className={styles.list}>
        {experienceCopy.roles.map((role) => (
          <li key={role.company} className={styles.item}>
            <div className={styles.head}>
              <Heading as="h2" size="md" className={styles.company}>
                {role.company}
              </Heading>
              <Text tone="muted" size="sm" as="span" className={styles.period}>
                {role.period}
              </Text>
            </div>
            <Text tone="muted" size="sm">
              {role.title}
            </Text>
            <Text>{role.context}</Text>
            <ul className={styles.contributions}>
              {role.contributions.map((item) => (
                <li key={item}>
                  <Text as="span">{item}</Text>
                </li>
              ))}
            </ul>
            <p className={styles.techs}>
              <span className={styles.techLabel}>Tecnologias</span>
              {role.techs.join(' · ')}
            </p>
            {role.links ? (
              <ul className={styles.links}>
                {role.links.map((link) => (
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
          </li>
        ))}
      </ol>
    </PageFrame>
  )
}
