import React from 'react';

import { useProgressImg } from './useProgressImg';
import { Image } from './styled';

const ProgressImage = ({
  imgSrc,
  placeholderImgSrc,
  fallbackImgSrc,
  callback,
  styles,
  alt,
}) => {
  const imageSrc = useProgressImg({
    imgSrc,
    placeholderImgSrc,
    fallbackImgSrc,
    callback,
  });

  return <Image src={imageSrc} styles={styles} alt={alt} />;
};

export default ProgressImage;
