import { cleanup, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { afterEach, describe, expect, it } from 'vitest'
import { Button } from '../../src/components/Button'

afterEach(() => {
  cleanup()
})

describe('Button', () => {
  it('renders a button with the given label', () => {
    render(<Button>Contato</Button>)
    expect(screen.getByRole('button', { name: 'Contato' })).toBeTruthy()
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Contato</Button>)
    expect((await axe(container)).violations).toEqual([])
  })
})
