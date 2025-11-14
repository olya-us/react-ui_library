import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { Snackbar } from './Snackbar'

const meta: Meta<typeof Snackbar> = {
  title: 'Components/Snackbar',
  component: Snackbar,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Snackbar>

export const Default: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <button style={{ background: 'var(--color-primary-gradient)', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} onClick={() => setOpen(true)}>Show Snackbar</button>
        <Snackbar
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          message="This is a message"
        />
      </>
    )
  },
}

export const Success: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false)
    return (
      <>
        <button style={{ background: 'var(--color-primary-gradient)', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }} onClick={() => setOpen(true)}>Show Success</button>
        <Snackbar
          {...args}
          open={open}
          onClose={() => setOpen(false)}
          message="Success!"
          variant="success"
        />
      </>
    )
  },
}
