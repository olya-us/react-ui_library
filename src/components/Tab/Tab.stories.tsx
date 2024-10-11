import { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tab';

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const tabs = [
  { label: 'Tab 1', content: <div>Content for Tab 1</div> },
  { label: 'Tab 2', content: <div>Content for Tab 2</div> },
  { label: 'Tab 3', content: <div>Content for Tab 3</div> },
];

export const Horizontal: StoryObj<typeof Tabs> = {
    args: {
      tabs,
      orientation: 'horizontal',
    },
};
  
export const Vertical: StoryObj<typeof Tabs> = {
    args: {
      tabs,
      orientation: 'vertical',
    },
};