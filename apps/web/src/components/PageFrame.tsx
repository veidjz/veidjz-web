import { Heading, Layout, Link, Text } from '@veidjz/ui'
import type { ReactNode } from 'react'
import styles from './PageFrame.module.css'

interface PageFrameProps {
  title: string
  children: ReactNode
}

export function PageFrame({ title, children }: PageFrameProps) {
  return (
    <Layout as="main" className={styles.root}>
      <Heading as="h1" size="xl">
        {title}
      </Heading>
      <div className={styles.body}>{children}</div>
      <Text size="sm">
        <Link href="/">Voltar ao início</Link>
      </Text>
    </Layout>
  )
}
