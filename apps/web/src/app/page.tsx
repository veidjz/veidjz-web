import { Hello } from '@veidjz/ui'
import styles from './page.module.css'

export default function HomePage() {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>veidjz</h1>
      <Hello />
      <p className={styles.lead}>Software Engineer</p>
    </div>
  )
}
