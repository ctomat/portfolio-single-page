import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import LetsStart from './LetsStart.component';

export default {
  title: `Pages/Let's Start`,
  component: LetsStart,
} as Meta;

export const View: React.VFC<{}> = () => <LetsStart />;
