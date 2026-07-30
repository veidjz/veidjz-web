import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google'
import type { ReactNode } from 'react'
import '@veidjz/ui/tokens.css'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
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
  title: {
    default: 'veidjz — João Victor Veidz',
    template: '%s · veidjz',
  },
  description:
    'Software Engineer | Full Stack & Mobile. João Victor Veidz — React Native, React, Node.js e C#/.NET.',
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
        <SiteHeader />
        <div className={styles.shell}>{children}</div>
        <SiteFooter />
      </body>
    </html>
  )
}
