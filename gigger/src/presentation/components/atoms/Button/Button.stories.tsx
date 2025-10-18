// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, vue3-vite, etc.
import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";

const meta = {
  component: Button,
  //👇 Enables auto-generated documentation for this component and includes all stories in this file
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <Button variant="contained" color="primary">
      Click me
    </Button>
  ),
};
export const Secondary: Story = {
  render: () => (
    <Button variant="contained" color="secondary">
      Click me
    </Button>
  ),
};
