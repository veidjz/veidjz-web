import { cleanup, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { afterEach, describe, expect, it } from 'vitest'
import { PageFrame } from '../../src/components/PageFrame'

afterEach(() => {
  cleanup()
})

describe('PageFrame', () => {
  it('renders title and back link', () => {
    render(
      <PageFrame title="Sobre">
        <p>resumo</p>
      </PageFrame>,
    )
    expect(screen.getByRole('heading', { name: 'Sobre' })).toBeTruthy()
    expect(screen.getByRole('link', { name: 'Voltar ao início' })).toBeTruthy()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(
      <PageFrame title="Sobre">
        <p>resumo</p>
      </PageFrame>,
    )
    expect((await axe(container)).violations).toEqual([])
  })
})
