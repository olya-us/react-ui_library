import { Meta, StoryObj } from '@storybook/react'
import { Link } from './Link'

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: 'https://example.com',
    children: 'Visit Example',
  },
}

export const UnderlineAlways: Story = {
  args: {
    href: 'https://example.com',
    underline: 'always',
    children: 'Underlined Link',
  },
}

export const UnderlineNone: Story = {
  args: {
    href: 'https://example.com',
    underline: 'none',
    children: 'No Underline',
  },
}

export const OpenInNewTab: Story = {
  args: {
    href: 'https://example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Open in New Tab',
  },
}
