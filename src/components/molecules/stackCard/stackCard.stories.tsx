import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import StackCard, { StackCardProps } from './stackCard.component';

export default {
  title: 'Components/Molecules/StackCard',
  component: StackCard,
} as Meta;

const Template: Story<StackCardProps> = (args) => <StackCard {...args} />;

export const Javascript = Template.bind({});
Javascript.args = {
  imageUrl:
    'https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png',
  labelText: 'Javascript',
  progress: 60,
};
