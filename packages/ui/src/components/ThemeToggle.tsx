'use client'

import { useTheme } from '../hooks/useTheme'
import styles from './ThemeToggle.module.css'

export interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme()
  const label = theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'

  return (
    <button
      type="button"
      className={[styles.root, className].filter(Boolean).join(' ')}
      onClick={toggleTheme}
      aria-label={label}
    >
      {theme === 'dark' ? 'Claro' : 'Escuro'}
    </button>
  )
}
