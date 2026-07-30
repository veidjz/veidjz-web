import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Text.module.css'

export interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: 'p' | 'span'
  tone?: 'default' | 'muted'
  size?: 'sm' | 'md' | 'lg'
  children?: ReactNode
}

export function Text({
  as: Tag = 'p',
  tone = 'default',
  size = 'md',
  className,
  ...props
}: TextProps) {
  return (
    <Tag
      {...props}
      className={[styles.root, styles[tone], styles[size], className]
        .filter(Boolean)
        .join(' ')}
    />
  )
}
