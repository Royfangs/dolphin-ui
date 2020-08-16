import React, { useState } from 'react';

import { RouletteContainer, RouletteCell, RouletteImg } from './styled';

const Roulette = ({ images = [] }) => {
  const [isRotated, setIsRotated] = useState(false);

  const handleClick = () => {
    setIsRotated((prevState) => !prevState);
  };

  const rouletteCells = images.map(({ id, src }, index) => {
    const rotateDeg = (180 / 6) * index || 0;

    const defaultStyles = {
      transform: 'translate(-50%, 0)',
    };

    const styles = {
      transform: `translate(-50%, 0) rotate(${rotateDeg}deg)`,
    };

    return (
      <RouletteCell
        isRotated={isRotated}
        key={id}
        styles={styles}
        defaultStyles={defaultStyles}
      >
        <RouletteImg
          isRotated={isRotated}
          rotateDeg={-rotateDeg}
          src={src}
          alt={id}
        />
      </RouletteCell>
    );
  });

  return (
    <RouletteContainer onClick={handleClick}>{rouletteCells}</RouletteContainer>
  );
};

export default Roulette;
