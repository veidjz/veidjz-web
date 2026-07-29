import { ThemeToggle } from '@veidjz/ui'
import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google'
import type { ReactNode } from 'react'
import '@veidjz/ui/tokens.css'
import styles from './layout.module.css'

const sans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const serif = IBM_Plex_Serif({
  subsets: ['latin'],
  weight: ['600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'veidjz',
  description: 'João Victor Veidz',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${sans.variable} ${serif.variable}`}
    >
      <head>
        <script src="/theme-boot.js" />
      </head>
      <body className={styles.body}>
        <header className={styles.header}>
          <span className={styles.wordmark}>veidjz</span>
          <ThemeToggle />
        </header>
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  )
}
