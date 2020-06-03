import React from 'react';
import { Battery } from './Battery';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Battery',
  component: Battery,
};

export const battery = () => <Battery />;
