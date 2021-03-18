import React from 'react';
import { Meta } from '@storybook/react/types-6-0';
import Wave from './Wave.component';

export default {
  title: `Components/Atoms/Wave`,
  component: Wave,
} as Meta;

export const View: React.VFC<{}> = () => <Wave />;
