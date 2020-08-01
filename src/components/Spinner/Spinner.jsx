import React from 'react';

import { Loader } from './styled';

import { convertMillisecondToSecond } from '../../ulti/convertMillisecondToSecond';

export const Spinner = ({
  borderWidth = '16px',
  width = '80px',
  height = '80px',
  borderColor = '#f3f3f3',
  circleColor = '#3498db',
  spinTimeMillisecond = 2000,
}) => {
  const spinTimeSecond = convertMillisecondToSecond(spinTimeMillisecond);

  return (
    <Loader
      borderWidth={borderWidth}
      width={width}
      height={height}
      borderColor={borderColor}
      circleColor={circleColor}
      spinTimeSecond={spinTimeSecond}
    />
  );
};
