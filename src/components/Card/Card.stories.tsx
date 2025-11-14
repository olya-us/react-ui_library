import type { Meta, StoryObj } from '@storybook/react'
import { Card } from './Card'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Outlined Card Content',
  },
}

export const Elevated: Story = {
  args: {
    variant: 'elevated',
    children: 'Elevated Card Content',
  },
}

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Filled Card Content',
  },
}
