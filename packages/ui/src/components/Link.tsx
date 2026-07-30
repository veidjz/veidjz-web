import type { AnchorHTMLAttributes, ReactNode } from 'react'
import styles from './Link.module.css'

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode
}

export function Link({ className, children, ...props }: LinkProps) {
  return (
    <a
      {...props}
      className={[styles.root, className].filter(Boolean).join(' ')}
    >
      {children}
    </a>
  )
}
