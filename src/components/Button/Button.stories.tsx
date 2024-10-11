import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    primary: true,
    label: 'Button',
    disabled: false,
  },
}

export const Secondary: Story = {
  args: {
    label: 'Button',
    disabled: false,
  },
}

export const Disabled: Story = {
  args: {
    primary: true,
    label: 'Button',
    disabled: true,
  },
}
