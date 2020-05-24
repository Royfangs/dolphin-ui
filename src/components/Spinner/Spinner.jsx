import React from 'react';
import { Loader } from './styled';

export const Spinner = ({
  borderWidth = '16px',
  width = '80px',
  height = '80px',
  borderColor = '#f3f3f3',
  circleColor = '#3498db',
}) => {
  return (
    <Loader
      borderWidth={borderWidth}
      width={width}
      height={height}
      borderColor={borderColor}
      circleColor={circleColor}
    />
  );
};
