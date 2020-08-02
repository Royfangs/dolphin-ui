import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import HamburgerMenu from './HamburgerMenu';

export default {
  title: 'Hamburger menu',
  component: HamburgerMenu,
  decorators: [withKnobs],
};

export const hamburgerMenu = () => (
  <HamburgerMenu barColor={text('Bar color', '#3c76a9')} />
);
