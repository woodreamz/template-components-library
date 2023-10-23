import type { Preview } from '@storybook/react';
import StoryWrapper from './StoryWrapper';

const preview: Preview = {
  parameters: {
    backgrounds: {
      disable: true,
    },
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true, // Adds the description and default columns
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [StoryWrapper],
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        icon: 'contrast',
        items: [
          { value: 'light', title: 'Distech Light' },
          { value: 'dark', title: 'Distech Dark' },
          { value: 'atriusLight', title: 'Atrius Light' },
          { value: 'atriusDark', title: 'Atrius Dark' },
          { value: 'soaLight', title: 'SOA Light' },
        ],
      },
    },
  },
};

export default preview;
