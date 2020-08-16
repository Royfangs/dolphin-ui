import React from 'react';

import AnimationBubbles from './';

export default {
  title: 'AnimationBubbles',
  component: AnimationBubbles,
};

const bubbleStyles = { height: '110px', width: '110px', borderRadius: '50%' };

const initialImages = [
  { id: '1', src: 'https://picsum.photos/id/10/120/120' },
  { id: '2', src: 'https://picsum.photos/id/20/120/120' },
  { id: '3', src: 'https://picsum.photos/id/30/120/120' },
  { id: '4', src: 'https://picsum.photos/id/40/120/120' },
  { id: '5', src: 'https://picsum.photos/id/50/120/120' },
];

export const animationBubblesWrapper = () => (
  <AnimationBubbles bubbleStyles={bubbleStyles} initialImages={initialImages} />
);
