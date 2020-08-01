import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import Spinner from './';

export default {
  title: 'Spinner',
  component: Spinner,
  decorators: [withKnobs],
};

export const spinner = () => (
  <Spinner
    borderWidth={text('Border width', '16px')}
    width={text('Width', '80px')}
    height={text('Height', '80px')}
    borderColor={text('Border color', '#f3f3f3')}
    circleColor={text('Circle color', '#3498db')}
    spinTimeMillisecond={number('spinTimeMillisecond', 2000)}
  />
);
