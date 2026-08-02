import { Heading, Link, Text } from '@veidjz/ui'
import type { Metadata } from 'next'
import { PageFrame } from '../../components/PageFrame'
import { contactCopy } from '../../content/contact'
import { contactLinks } from '../../content/nav'
import { resumeCopy } from '../../content/resume'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Contato',
  description:
    'E-mail, LinkedIn, GitHub, WhatsApp e CV de João Victor Veidz. São Paulo, SP · Remoto - Brasil.',
}

export default function ContatoPage() {
  return (
    <PageFrame title="Contato">
      <Text>{contactCopy.intro}</Text>
      <div className={styles.ctaRow}>
        <a href={`mailto:${contactLinks.email}`} className={styles.cta}>
          {contactCopy.ctaLabel}
        </a>
        <a href={resumeCopy.href} className={styles.ctaSecondary} download>
          {resumeCopy.label}
        </a>
      </div>
      <Text tone="muted" size="sm">
        {resumeCopy.note}
      </Text>
      <section className={styles.section} aria-labelledby="contact-channels">
        <Heading as="h2" size="md" id="contact-channels">
          {contactCopy.channelsHeading}
        </Heading>
        <ul className={styles.list}>
          <li>
            <Text tone="muted" size="sm" as="span" className={styles.label}>
              E-mail
            </Text>
            <Link href={`mailto:${contactLinks.email}`}>
              {contactLinks.email}
            </Link>
          </li>
          <li>
            <Text tone="muted" size="sm" as="span" className={styles.label}>
              LinkedIn
            </Text>
            <Link
              href={contactLinks.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              linkedin.com/in/veidz
            </Link>
          </li>
          <li>
            <Text tone="muted" size="sm" as="span" className={styles.label}>
              GitHub
            </Text>
            <Link
              href={contactLinks.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              github.com/veidjz
            </Link>
          </li>
          <li>
            <Text tone="muted" size="sm" as="span" className={styles.label}>
              WhatsApp
            </Text>
            <Link
              href={contactLinks.whatsapp}
              rel="noopener noreferrer"
              target="_blank"
            >
              {contactLinks.whatsappDisplay}
            </Link>
          </li>
        </ul>
      </section>
      <section className={styles.section} aria-labelledby="contact-location">
        <Heading as="h2" size="md" id="contact-location">
          {contactCopy.locationHeading}
        </Heading>
        <Text>{contactLinks.location}</Text>
      </section>
    </PageFrame>
  )
}
