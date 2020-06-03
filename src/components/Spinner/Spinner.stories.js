import React from 'react';
import { Spinner } from './Spinner';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Button',
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
  />
);
