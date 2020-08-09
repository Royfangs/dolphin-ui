import React from 'react';

import Expandable from './Expandable';
import { withKnobs, text } from '@storybook/addon-knobs';

export default {
  title: 'Expandable',
  component: Expandable,
  decorators: [withKnobs],
};

export const expandable = () => (
  <Expandable
    title={text('Title', 'title test')}
    content={text(
      'Content',
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae rem nobis distinctio officia quis? Fugiat perferendis, unde mollitia repellat natus, distinctio inventore commodi impedit recusandae, ipsa et quam? Explicabo, sunt?'
    )}
  />
);
