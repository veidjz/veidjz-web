import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Layout.module.css'

export interface LayoutProps extends HTMLAttributes<HTMLElement> {
  as?: 'div' | 'main' | 'section'
  children?: ReactNode
}

export function Layout({ as: Tag = 'div', className, ...props }: LayoutProps) {
  return (
    <Tag
      {...props}
      className={[styles.root, className].filter(Boolean).join(' ')}
    />
  )
}
