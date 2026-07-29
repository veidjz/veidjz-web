import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { ThemeToggle } from '../../src/components/ThemeToggle'
import { THEME_STORAGE_KEY } from '../../src/theme'

beforeEach(() => {
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches: false,
      media: query,
      onchange: null,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  })
})

afterEach(() => {
  cleanup()
  window.localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
})

describe('ThemeToggle', () => {
  it('toggles data-theme on the document element', () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, 'light')
    document.documentElement.setAttribute('data-theme', 'light')
    render(<ThemeToggle />)

    const button = screen.getByRole('button', { name: 'Ativar tema escuro' })
    expect(button.querySelector('svg')).toBeTruthy()
    expect(button.textContent).toBe('')
    fireEvent.click(button)

    expect(document.documentElement.getAttribute('data-theme')).toBe('dark')
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe('dark')
    expect(
      screen.getByRole('button', { name: 'Ativar tema claro' }),
    ).toBeTruthy()
  })
})
