import { Meta, StoryObj } from '@storybook/react';
import Accordion from './Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Components/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

const items = [
  {
    title: 'Item 1',
    content: <div>Content for Item 1</div>,
  },
  {
    title: 'Item 2',
    content: <div>Content for Item 2</div>,
  },
  {
    title: 'Item 3',
    content: <div>Content for Item 3</div>,
  },
];

export const SingleExpand: StoryObj<typeof Accordion> = {
  args: {
    items,
    allowMultiple: false,
  },
};

export const MultipleExpand: StoryObj<typeof Accordion> = {
  args: {
    items,
    allowMultiple: true,
  },
};