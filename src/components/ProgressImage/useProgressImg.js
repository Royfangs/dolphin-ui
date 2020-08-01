import { useState, useEffect } from 'react';

export const useProgressImg = ({
  imgSrc,
  placeholderImgSrc,
  fallbackImgSrc,
  callback,
}) => {
  const [currentSrc, setCurrentSrc] = useState(placeholderImgSrc);

  useEffect(() => {
    const loadedImage = new Image();
    loadedImage.src = imgSrc;

    loadedImage.onload = () => {
      setCurrentSrc(imgSrc);
      callback && callback();
    };

    loadedImage.onerror = () => {
      setCurrentSrc(fallbackImgSrc);
      callback && callback();
    };
  }, []);

  return currentSrc;
};
