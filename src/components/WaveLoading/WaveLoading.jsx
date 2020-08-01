import React from 'react';

import { Container, Dot } from './styled';

const WaveLoading = ({
  color = '#7ef9ff',
  containerWidth = '200px',
  dotNumber = 5,
  dotWidth = '10px',
  dotHeight = '10px',
}) => {
  return (
    <Container>
      {Array(dotNumber)
        .fill(0)
        .map((_, index) => (
          <Dot
            color={color}
            containerWidth={containerWidth}
            dotWidth={dotWidth}
            dotHeight={dotHeight}
            key={`dotIndex_${index}`}
            dotIndex={index + 1}
          />
        ))}
    </Container>
  );
};

export default WaveLoading;
