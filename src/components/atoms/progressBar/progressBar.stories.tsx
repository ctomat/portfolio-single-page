import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ProgressBar, { ProgressBarProps } from './progressBar.component';

export default {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
} as Meta;

const Template: Story<ProgressBarProps> = (args) => <ProgressBar {...args} />;

export const Initial = Template.bind({});
Initial.args = { progress: 80 };
