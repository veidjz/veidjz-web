import { cleanup, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { afterEach, describe, expect, it } from 'vitest'
import { Link } from '../../src/components/Link'

afterEach(() => {
  cleanup()
})

describe('Link', () => {
  it('renders an accessible link', () => {
    render(<Link href="https://veidjz.com">veidjz.com</Link>)
    expect(
      screen.getByRole('link', { name: 'veidjz.com' }).getAttribute('href'),
    ).toBe('https://veidjz.com')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <Link href="https://veidjz.com">veidjz.com</Link>,
    )
    expect((await axe(container)).violations).toEqual([])
  })
})
