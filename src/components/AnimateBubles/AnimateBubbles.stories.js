import React from 'react';

import AnimationBubblesWrapper from './';

export default {
  title: 'AnimationBubblesWrapper',
  component: AnimationBubblesWrapper,
};

const bubbleStyles = { height: '110px', width: '110px', borderRadius: '50%' };

const initialImages = [
  { id: '1', src: 'https://loremflickr.com/120/120/sun?random=1' },
  { id: '2', src: 'https://loremflickr.com/120/120/sun?random=2' },
  { id: '3', src: 'https://loremflickr.com/120/120/sun?random=3' },
  { id: '4', src: 'https://loremflickr.com/120/120/sun?random=4' },
  { id: '5', src: 'https://loremflickr.com/120/120/sun?random=5' },
];

export const animationBubblesWrapper = () => (
  <AnimationBubblesWrapper
    bubbleStyles={bubbleStyles}
    initialImages={initialImages}
  />
);
