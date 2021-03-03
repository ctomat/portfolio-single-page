import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import StackSlider, { StackSliderProps } from './StackSlider.component';

export default {
  title: 'Components/Molecules/StackSlider',
  component: StackSlider,
} as Meta;

const Template: Story<StackSliderProps> = (args) => <StackSlider {...args} />;

export const ThreeRows = Template.bind({});
ThreeRows.args = { paginationItems: 3 };

export const FourRows = Template.bind({});
FourRows.args = { paginationItems: 4 };
