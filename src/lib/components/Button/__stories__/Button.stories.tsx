import { Box, Stack } from '@mui/material';
import { flavors, sizes, variants } from '../../../theme/utils/styleUtils';
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
  argTypes: {
    children: {
      control: false,
    },
    classes: {
      control: false,
    },
    className: {
      control: false,
    },
    component: {
      control: false,
    },
    endIcon: {
      control: false,
    },
    startIcon: {
      control: false,
    },
    flavor: {
      options: Object.values(flavors),
    },
    size: {
      options: Object.values(sizes),
    },
    variant: {
      options: ['text', variants.outlined, variants.contained],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {},
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
