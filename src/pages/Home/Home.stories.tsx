import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Home from './Home.component';

export default {
  title: 'Pages/Home',
  component: Home,
} as Meta;

export const View: React.VFC<{}> = () => <Home />;
