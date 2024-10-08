import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'; 
import { Input } from './Input';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    type: 'text',
    placeholder: 'Enter text',
    onChange: action('changed'), 
  },
};

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password',
    onChange: action('changed'), 
  },
};

export const Disabled: Story = {
  args: {
    type: 'text',
    placeholder: 'Disabled input',
    disabled: true,
  },
};
