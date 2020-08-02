import React from 'react';
import { withKnobs, text, object } from '@storybook/addon-knobs';

import ProgressImage from './ProgressImage';
import { imgSrc, placeholderImgSrc, fallbackImgSrc } from './constants';

export default {
  title: 'Progress image',
  component: ProgressImage,
  decorators: [withKnobs],
};

export const progressImage = () => (
  <ProgressImage
    imgSrc={imgSrc}
    placeholderImgSrc={placeholderImgSrc}
    fallbackImgSrc={fallbackImgSrc}
    callback={() => console.log('image loaded finished')}
    styles={object('Styles', {
      width: '300px',
      height: '300px',
    })}
    alt={text('Alt', 'photo')}
  />
);
