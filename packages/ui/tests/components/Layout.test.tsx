import { cleanup, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { afterEach, describe, expect, it } from 'vitest'
import { Layout } from '../../src/components/Layout'

afterEach(() => {
  cleanup()
})

describe('Layout', () => {
  it('renders children inside a div by default', () => {
    const { container } = render(<Layout>conteudo</Layout>)
    expect(container.firstElementChild?.tagName).toBe('DIV')
    expect(screen.getByText('conteudo')).toBeTruthy()
  })

  it('renders the requested landmark element', () => {
    render(<Layout as="main">pagina</Layout>)
    expect(screen.getByRole('main')).toBeTruthy()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Layout as="main">conteudo</Layout>)
    expect((await axe(container)).violations).toEqual([])
  })
})
