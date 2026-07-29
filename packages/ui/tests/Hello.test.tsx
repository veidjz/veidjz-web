import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hello } from '../src/Hello'

describe('Hello', () => {
  it('renders default label', () => {
    render(<Hello />)
    expect(screen.getByText('veidjz')).toBeTruthy()
  })
})
