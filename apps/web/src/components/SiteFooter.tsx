import { Link, Text } from '@veidjz/ui'
import { contactLinks, navItems } from '../content/nav'
import styles from './SiteFooter.module.css'

export function SiteFooter() {
  return (
    <footer className={styles.root}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <p className={styles.wordmark}>veidjz</p>
          <Text tone="muted" size="sm">
            João Victor Veidz · {contactLinks.location}
          </Text>
        </div>
        <nav aria-label="Rodapé">
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className={styles.list}>
          <li>
            <Link href={`mailto:${contactLinks.email}`}>
              {contactLinks.email}
            </Link>
          </li>
          <li>
            <Link
              href={contactLinks.linkedin}
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </Link>
          </li>
          <li>
            <Link
              href={contactLinks.github}
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </Link>
          </li>
          <li>
            <Link
              href={contactLinks.whatsapp}
              rel="noopener noreferrer"
              target="_blank"
            >
              WhatsApp {contactLinks.whatsappDisplay}
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
