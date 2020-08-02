import React from 'react';

import { Container, Dot } from './styled';

const WaveLoading = ({
  color = '#7ef9ff',
  dotNumber = 5,
  dotWidth = 10,
  dotHeight = 10,
}) => {
  const renderDots = () => {
    return Array(dotNumber)
      .fill(0)
      .map((_, index) => (
        <Dot
          color={color}
          dotWidth={dotWidth}
          dotHeight={dotHeight}
          key={`dotIndex_${index}`}
          dotIndex={index + 1}
          totalDotNumber={dotNumber}
        />
      ));
  };

  return <Container>{renderDots()}</Container>;
};

export default WaveLoading;
