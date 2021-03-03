import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Button, { ButtonProps } from './button.component';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  labelText: 'Primary',
  secundary: false,
  onClickEvent: () => {},
};

export const Secundary = Template.bind({});
Secundary.args = {
  labelText: 'Secundary',
  secundary: true,
  onClickEvent: () => {},
};
