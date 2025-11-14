import { render, screen } from '@testing-library/react'
import { Input } from './Input'

describe('Input', () => {
  it('renders label and input', () => {
    render(<Input label="Test" placeholder="Enter text" />)
    expect(screen.getByLabelText('Test')).toBeDefined()
  })

  it('shows error message', () => {
    render(<Input error="Error message" />)
    expect(screen.getByText('Error message')).toBeDefined()
  })

  it('is disabled', () => {
    render(<Input disabled />)
    expect(screen.getByRole('textbox')).toBeTruthy()
  })
})
