import React from 'react';
import { withKnobs, text } from '@storybook/addon-knobs';

import SlideBarText from './SlideBarText';

export default {
  title: 'SlideBarText',
  component: SlideBarText,
  decorators: [withKnobs],
};

export const slideBarText = () => (
  <SlideBarText
    textColor={text('Text color', '#0080ff')}
    barColor={text('Bar color', '#35b9f1')}
    text={text('Text', 'Slide text')}
  />
);
