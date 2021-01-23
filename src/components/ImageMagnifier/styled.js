import styled from 'styled-components';

const ImageContainer = styled.div`
  position: relative;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
`;

const MagnifierContainer = styled.div`
  display: none;
  position: absolute;
  border: 2px solid #000;
  cursor: none;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-size: ${({ imageWidth, imageHeight, zoomLevel }) =>
    `${imageWidth * zoomLevel}px ${imageHeight * zoomLevel}px`};
`;

export { ImageContainer, MagnifierContainer };
