import { Box, Stack } from '@mui/material';
import Button from '../Button';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof Button> = {
  title: 'components/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: `See Material-UI [demo page](https://mui.com/components/buttons/) for other examples.<br>
          See Material-UI [documentation page](https://mui.com/api/button/) for complete API.`,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    children: 'My Button',
    variant: 'contained',
  },
};

export const Example: Story = {
  args: {},
  render: (args) => (
    <>
      <Box>Different variant</Box>
      <Stack>
        <Box>
          <Button {...args} variant="text">
            Click me
          </Button>
        </Box>
        <Box>
          <Button {...args} variant="outlined">
            Click me
          </Button>
        </Box>
        <Box>
          <Button {...args} variant="contained">
            Click me
          </Button>
        </Box>
      </Stack>
    </>
  ),
};
