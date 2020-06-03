import React from 'react';

import { Container, BatteryBody, WaveContainer, Header, Wave } from './styled';

export const Battery = () => {
  return (
    <Container>
      <Header />
      <BatteryBody />
      <WaveContainer>
        <Wave />
        <Wave />
        <Wave />
      </WaveContainer>
    </Container>
  );
};
