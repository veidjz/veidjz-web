export type Theme = 'light' | 'dark'

export const THEME_STORAGE_KEY = 'veidjz-theme'

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') {
    return 'light'
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

export function readStoredTheme(): Theme | null {
  if (typeof window === 'undefined') {
    return null
  }

  const value = window.localStorage.getItem(THEME_STORAGE_KEY)
  return value === 'light' || value === 'dark' ? value : null
}

export function resolveTheme(): Theme {
  return readStoredTheme() ?? getSystemTheme()
}

export function applyTheme(theme: Theme): void {
  document.documentElement.setAttribute('data-theme', theme)
}

export function persistTheme(theme: Theme): void {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  applyTheme(theme)
}
