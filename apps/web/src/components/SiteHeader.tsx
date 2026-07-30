import { ThemeToggle } from '@veidjz/ui'
import { navItems } from '../content/nav'
import styles from './SiteHeader.module.css'

export function SiteHeader() {
  return (
    <header className={styles.root}>
      <div className={styles.bar}>
        <a href="/" className={styles.wordmark}>
          veidjz
        </a>
        <nav className={styles.nav} aria-label="Principal">
          <ul className={styles.list}>
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} className={styles.navLink}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <ThemeToggle />
      </div>
    </header>
  )
}
