import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import About from './AboutMe.component';

export default {
  title: 'Pages/About Me',
  component: About,
} as Meta;

export const View: React.VFC<{}> = () => <About />;
