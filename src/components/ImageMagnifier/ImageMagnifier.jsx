import React, { useRef } from 'react';

import { ImageContainer, MagnifierContainer } from './styled';
import { getCursorPosition } from './helper';

const ImageMagnifier = ({
  imageSrc,
  imageAlt,
  width,
  height,
  imageStyle,
  magnifierStyle,
  zoomLevel,
}) => {
  const imageRef = useRef();
  const magnifierRef = useRef();

  const handleOnMouseEnter = () => {
    if (!magnifierRef.current) {
      return;
    }

    magnifierRef.current.style.display = 'block';
  };

  const onMouseLeave = () => {
    if (!magnifierRef.current) {
      return;
    }

    magnifierRef.current.style.display = 'none';
  };

  const onMouseMove = (e) => {
    if (!magnifierRef.current) {
      return;
    }

    const {
      pageScrollXPositionDiff,
      pageScrollYPositionDiff,
    } = getCursorPosition(imageRef.current, e);

    const glassWidth = magnifierRef.current.offsetWidth / 2;
    const glassHeight = magnifierRef.current.offsetHeight / 2;

    const xDiff = pageScrollXPositionDiff - glassWidth;
    const yDiff = pageScrollYPositionDiff - glassHeight;

    magnifierRef.current.style.left = `${xDiff}px`;
    magnifierRef.current.style.top = `${yDiff}px`;
    magnifierRef.current.style.backgroundPosition = `-${
      pageScrollXPositionDiff * zoomLevel - glassWidth + zoomLevel
    }px -${pageScrollYPositionDiff * zoomLevel - glassHeight + zoomLevel}px`;
  };

  return (
    <ImageContainer
      onMouseEnter={handleOnMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      width={`${width}px`}
      height={`${height}px`}
    >
      <img
        width={`${width}px`}
        height={`${height}px`}
        ref={imageRef}
        style={imageStyle}
        src={imageSrc}
        alt={imageAlt}
      />
      <MagnifierContainer
        ref={magnifierRef}
        imageWidth={width}
        imageHeight={height}
        style={magnifierStyle}
        backgroundImage={imageSrc}
        zoomLevel={zoomLevel}
      />
    </ImageContainer>
  );
};

export default ImageMagnifier;
