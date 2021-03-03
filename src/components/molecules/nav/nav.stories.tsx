import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Nav from './nav.component';

export default {
  title: 'Components/Molecules/Nav',
  component: Nav,
} as Meta;

const Template: Story = (args) => <Nav {...args} />;

export const Home = Template.bind({});
