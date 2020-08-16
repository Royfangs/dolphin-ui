import React from 'react';

import Roulette from './Roulette';

export default {
  title: 'Roulette',
  component: Roulette,
};

const images = [
  { id: '1', src: 'https://picsum.photos/id/10/100/100' },
  { id: '2', src: 'https://picsum.photos/id/20/100/100' },
  { id: '3', src: 'https://picsum.photos/id/30/100/100' },
  { id: '4', src: 'https://picsum.photos/id/40/100/100' },
  { id: '5', src: 'https://picsum.photos/id/50/100/100' },
  { id: '6', src: 'https://picsum.photos/id/60/100/100' },
  { id: '7', src: 'https://picsum.photos/id/70/100/100' },
];

export const roulette = () => <Roulette images={images} />;
