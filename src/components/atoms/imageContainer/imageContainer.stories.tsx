import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import ImageContainer, {
  ImageContainerProps,
} from './imageContainer.component';

export default {
  title: 'Components/Atoms/ImageContainer',
  component: ImageContainer,
} as Meta;

const Template: Story<ImageContainerProps> = (args) => (
  <ImageContainer {...args} />
);

export const Javascript = Template.bind({});
Javascript.args = {
  imageUrl:
    'https://cdn4.iconfinder.com/data/icons/scripting-and-programming-languages/512/js-512.png',
};
