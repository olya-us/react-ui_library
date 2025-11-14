import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'Components/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Top: Story = {
  args: {
    title: 'Tooltip on top',
    children: <button style={{ background: 'var(--color-primary-gradient)', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Hover me</button>,
    position: 'top',
  },
};

export const Bottom: Story = {
  args: {
    title: 'Tooltip on bottom',
    children: <button style={{ background: 'var(--color-primary-gradient)', color: 'white', padding: '10px 20px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>Hover me</button>,
    position: 'bottom',
  },
};
