import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Label, { LabelProps } from './label.component';

export default {
  title: 'Components/Atoms/Label',
  component: Label,
} as Meta;

const Template: Story<LabelProps> = (args) => <Label {...args} />;

export const TextBackgroundTransparent = Template.bind({});
TextBackgroundTransparent.args = {
  labelText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae eros eget metus fringilla consectetur eget vel mauris. Sed dolor tellus, auctor eget dui vitae, tincidunt volutpat turpis. Suspendisse ipsum sapien, egestas et ex sit amet, eleifend sollicitudin felis. Sed laoreet non justo rhoncus ultricies.',
  labelType: 'text',
  center: false,
};

export const TextBackgroundBlue = Template.bind({});
TextBackgroundBlue.args = {
  labelText:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae eros eget metus fringilla consectetur eget vel mauris. Sed dolor tellus, auctor eget dui vitae, tincidunt volutpat turpis. Suspendisse ipsum sapien, egestas et ex sit amet, eleifend sollicitudin felis. Sed laoreet non justo rhoncus ultricies.',
  blueBackground: true,
  labelType: 'text',
  center: false,
};

export const HeaderBackgroundTransparent = Template.bind({});
HeaderBackgroundTransparent.args = {
  labelText: 'Header',
  labelType: 'header',
};

export const HeaderBackgroundBlue = Template.bind({});
HeaderBackgroundBlue.args = {
  labelText: 'Header',
  blueBackground: true,
  labelType: 'header',
};
