import { cleanup, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { afterEach, describe, expect, it } from 'vitest'
import { SiteFooter } from '../../src/components/SiteFooter'

afterEach(() => {
  cleanup()
})

describe('SiteFooter', () => {
  it('renders public contact links', () => {
    render(<SiteFooter />)
    expect(
      screen.getByRole('link', { name: 'joaovictorveidz@gmail.com' }),
    ).toBeTruthy()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'GitHub' })).toBeTruthy()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<SiteFooter />)
    expect((await axe(container)).violations).toEqual([])
  })
})
