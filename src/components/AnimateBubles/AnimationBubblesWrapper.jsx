import React, { useState, createRef } from 'react';

import AnimateBubbles from './AnimateBubbles';
import Bubble from './Bubble';
import { Button, AnimateBubblesContainer } from './styled';
import { moveItemToNextPosition } from '../../ulti/moveItemToNextPosition';

const AnimationBubblesWrapper = ({ bubbleStyles, initialImages = [] }) => {
  const [images, setImages] = useState(initialImages);

  const handleClick = () => {
    const updateImages = moveItemToNextPosition(images);

    setImages(updateImages);
  };

  const bubbles = images.map(({ id, src }) => (
    <Bubble
      src={src}
      styles={bubbleStyles}
      key={id}
      id={id}
      ref={createRef()}
    />
  ));

  return (
    <div>
      <AnimateBubblesContainer>
        <AnimateBubbles>{bubbles}</AnimateBubbles>
      </AnimateBubblesContainer>
      <div>
        <Button onClick={handleClick}>move image to next position</Button>
      </div>
    </div>
  );
};

export default AnimationBubblesWrapper;
