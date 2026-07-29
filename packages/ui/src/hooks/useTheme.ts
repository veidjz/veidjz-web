'use client'

import { useCallback, useSyncExternalStore } from 'react'
import {
  applyTheme,
  getSystemTheme,
  persistTheme,
  readStoredTheme,
  resolveTheme,
  type Theme,
} from '../theme'

export type { Theme }

const THEME_EVENT = 'veidjz-theme'

function subscribe(onStoreChange: () => void) {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  const onMediaChange = () => {
    if (!readStoredTheme()) {
      applyTheme(getSystemTheme())
    }
    onStoreChange()
  }

  media.addEventListener('change', onMediaChange)
  window.addEventListener(THEME_EVENT, onStoreChange)
  return () => {
    media.removeEventListener('change', onMediaChange)
    window.removeEventListener(THEME_EVENT, onStoreChange)
  }
}

function getServerSnapshot(): Theme {
  return 'light'
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, resolveTheme, getServerSnapshot)

  const setTheme = useCallback((next: Theme) => {
    persistTheme(next)
    window.dispatchEvent(new Event(THEME_EVENT))
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }, [setTheme, theme])

  return { theme, setTheme, toggleTheme }
}
