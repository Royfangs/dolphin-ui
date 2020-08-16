import styled from 'styled-components';

export const RouletteContainer = styled.div`
  width: 500px;
  height: 500px;
  position: relative;
  border-radius: 50%;
  cursor: pointer;
`;

export const RouletteCell = styled.div.attrs(
  ({ isRotated, styles, defaultStyles }) => ({
    style: isRotated ? styles : defaultStyles,
  })
)`
  height: 250px;
  width: 100px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: top center;
  transition: all 0.3s ease-in;
`;

export const RouletteImg = styled.img.attrs(({ isRotated, rotateDeg }) => ({
  style: {
    transform: isRotated ? `rotate(${rotateDeg}deg)` : null,
  },
}))`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  transition: all 0.3s ease-in;
`;
