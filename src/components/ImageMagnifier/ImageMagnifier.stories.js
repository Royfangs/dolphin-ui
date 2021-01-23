import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';

import ImageMagnifier from './ImageMagnifier';

export default {
  title: 'Image Magnifier',
  component: ImageMagnifier,
  decorators: [withKnobs],
};

export const imageMagnifier = () => (
  <div>
    <ImageMagnifier
      imageSrc='https://picsum.photos/id/10/500/500'
      width={500}
      height={500}
      zoomLevel={3}
      magnifierStyle={{
        width: '50px',
        height: '50px',
        border: '1px solid black',
        borderRadius: '50%',
      }}
    />
  </div>
);
