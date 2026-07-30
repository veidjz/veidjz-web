import { cleanup, render, screen } from '@testing-library/react'
import { axe } from 'jest-axe'
import { afterEach, describe, expect, it } from 'vitest'
import { Text } from '../../src/components/Text'

afterEach(() => {
  cleanup()
})

describe('Text', () => {
  it('renders body copy', () => {
    render(<Text>Software Engineer</Text>)
    expect(screen.getByText('Software Engineer')).toBeTruthy()
  })

  it('renders as a span when requested', () => {
    render(<Text as="span">inline</Text>)
    expect(screen.getByText('inline').tagName).toBe('SPAN')
  })

  it('has no accessibility violations', async () => {
    const { container } = render(<Text>Software Engineer</Text>)
    expect((await axe(container)).violations).toEqual([])
  })
})
