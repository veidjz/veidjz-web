import type { Metadata } from 'next'
import { IBM_Plex_Sans, IBM_Plex_Serif } from 'next/font/google'
import type { ReactNode } from 'react'
import '@veidjz/ui/tokens.css'
import { SiteFooter } from '../components/SiteFooter'
import { SiteHeader } from '../components/SiteHeader'
import { siteCopy, siteUrl } from '../content/site'
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
  metadataBase: new URL(siteUrl),
  title: {
    default: siteCopy.title,
    template: '%s · veidjz',
  },
  description: siteCopy.description,
  applicationName: siteCopy.name,
  authors: [{ name: 'João Victor Veidz', url: siteUrl }],
  creator: 'João Victor Veidz',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: siteUrl,
    siteName: siteCopy.name,
    title: siteCopy.title,
    description: siteCopy.description,
    images: [
      {
        url: siteCopy.ogImage,
        width: 675,
        height: 900,
        alt: siteCopy.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: siteCopy.title,
    description: siteCopy.description,
    images: [siteCopy.ogImage],
  },
  robots: {
    index: true,
    follow: true,
  },
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
