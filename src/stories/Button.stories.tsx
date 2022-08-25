import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Design System/General/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template = (args: any) => <Button {...args} />;
export const Primary: ComponentStory<typeof Button> = Template.bind({});
Primary.args = {
  type: 'primary',
  // primary: true,
  label: 'Button',
};

export const Danger: ComponentStory<typeof Button> = Template.bind({});
Danger.args = {
  label: 'Button',
  danger: true,
};

export const Large: ComponentStory<typeof Button> = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small: ComponentStory<typeof Button> = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};