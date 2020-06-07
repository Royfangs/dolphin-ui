import React from 'react';

import { Container, BatteryBody, WaveContainer, Header, Wave } from './styled';

export const Battery = ({ width = '140px', height = '220px' }) => {
  return (
    <Container>
      <Header />
      <BatteryBody height={height} />
      <WaveContainer width={width} height={height}>
        <Wave />
        <Wave />
        <Wave />
      </WaveContainer>
    </Container>
  );
};
