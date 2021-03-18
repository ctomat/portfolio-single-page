import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import StackPage from './StackPage.component';

export default {
  title: 'Pages/Stacks Page',
  component: StackPage,
} as Meta;

export const View: React.VFC<{}> = () => <StackPage />;
