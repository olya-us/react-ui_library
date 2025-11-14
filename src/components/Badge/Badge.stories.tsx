import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from './Badge'

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Standard: Story = {
  args: {
    content: 5,
    children: (
      <div style={{ fontSize: '25px', width: 50, height: 50, background: '#ececec', padding: '10px', borderRadius: '50%', lineHeight: '30px', textAlign: 'center' }}>✉️</div>
    ),
  },
}

export const Dot: Story = {
  args: {
    variant: 'dot',
    children: (
      <div style={{ fontSize: '25px', width: 50, height: 50, background: '#ececec', padding: '10px', borderRadius: '50%', lineHeight: '30px', textAlign: 'center' }}>✉️</div>
    ),
  },
}

export const ErrorColor: Story = {
  args: {
    content: '!',
    color: 'error',
    children: (
      <div style={{ fontSize: '25px', width: 50, height: 50, background: '#ececec', padding: '10px', borderRadius: '50%', lineHeight: '30px', textAlign: 'center' }}>✉️</div>
    ),
  },
}
