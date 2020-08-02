import React from 'react';
import { withKnobs, text, number } from '@storybook/addon-knobs';

import WaveLoading from './WaveLoading';

export default {
  title: 'WaveLoading',
  component: WaveLoading,
  decorators: [withKnobs],
};

export const waveLoading = () => (
  <WaveLoading
    color={text('Color', '#3232ff')}
    dotNumber={number('Dot number', 5)}
    dotWidth={number('Dot width (px)', 10)}
    dotHeight={number('Dot height (px)', 10)}
  />
);
