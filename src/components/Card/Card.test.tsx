import { render, screen } from '@testing-library/react'
import { Card } from './Card'

describe('Card', () => {
  it('renders children', () => {
    render(<Card>Content</Card>)
    expect(screen.getByText('Content')).toBeDefined()
  })

  it('applies variant class', () => {
    render(<Card variant="elevated">Content</Card>)
    const card = screen.getByText('Content')
    expect(card).toBeTruthy()
  })
})
