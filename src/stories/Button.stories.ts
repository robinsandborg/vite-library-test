import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../../lib/main";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: "centered",
  },

  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    children: { control: "text" },
    variant: {
      control: {
        type: "inline-radio",
        options: ["primary", "secondary"],
      },
    },
    size: {
      control: {
        type: "inline-radio",
        options: ["default", "small"],
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const World: Story = {
  args: {
    children: "Hello World 🌍!",
  },
};

export const Mars: Story = {
  args: {
    children: "Hello Mars🚀!",
  },
};
