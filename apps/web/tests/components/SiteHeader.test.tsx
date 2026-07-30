import { cleanup, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { SiteHeader } from '../../src/components/SiteHeader'

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

describe('SiteHeader', () => {
  it('renders brand and primary routes', () => {
    render(<SiteHeader />)
    expect(
      screen.getByRole('link', { name: 'veidjz' }).getAttribute('href'),
    ).toBe('/')
    expect(screen.queryByRole('link', { name: 'Início' })).toBeNull()
    expect(screen.getByRole('link', { name: 'Experiência' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Casos' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Contato' })).toBeTruthy()
  })

  it('exposes theme toggle', () => {
    render(<SiteHeader />)
    expect(screen.getByRole('button', { name: /tema/i })).toBeTruthy()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<SiteHeader />)
    expect((await axe(container)).violations).toEqual([])
  })
})
