import Component1 from '../Component1';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Component1> = {
  title: 'components/Component1',
  component: Component1,
};

export default meta;
type Story = StoryObj<typeof Component1>;

export const Example: Story = {
  args: {
    label: 'My label',
  },
};
