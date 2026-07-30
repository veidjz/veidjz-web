import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Heading.module.css'

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children?: ReactNode
}

export function Heading({
  as: Tag = 'h2',
  size = 'md',
  className,
  ...props
}: HeadingProps) {
  return (
    <Tag
      {...props}
      className={[styles.root, styles[size], className]
        .filter(Boolean)
        .join(' ')}
    />
  )
}
