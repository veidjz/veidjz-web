import { cleanup, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { afterEach, describe, expect, it } from 'vitest'
import { Heading } from '../../src/components/Heading'

afterEach(() => {
  cleanup()
})

describe('Heading', () => {
  it('renders an h2 by default', () => {
    render(<Heading>Experiencia</Heading>)
    expect(
      screen.getByRole('heading', { level: 2, name: 'Experiencia' }),
    ).toBeTruthy()
  })

  it('renders the requested heading level', () => {
    render(
      <Heading as="h1" size="xl">
        veidjz
      </Heading>,
    )
    expect(
      screen.getByRole('heading', { level: 1, name: 'veidjz' }),
    ).toBeTruthy()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Heading>Experiencia</Heading>)
    expect((await axe(container)).violations).toEqual([])
  })
})
