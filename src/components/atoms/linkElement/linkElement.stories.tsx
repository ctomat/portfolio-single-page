import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import LinkElement, { LinkElmentProps } from './linkElement.component';

export default {
  title: 'Components/Atoms/LinkElement',
  component: LinkElement,
} as Meta;

const Template: Story<LinkElmentProps> = (args) => <LinkElement {...args} />;

export const Waiting = Template.bind({});
Waiting.args = { route: 'route' };

export const Selected = Template.bind({});
Selected.args = { route: 'route' };
