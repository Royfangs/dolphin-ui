import React, { useState, createRef } from 'react';

import AnimateBubbles from './AnimateBubbles';
import Bubble from './Bubble';
import { Button, AnimateBubblesContainer, Container } from './styled';
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
    <Container>
      <AnimateBubblesContainer>
        <AnimateBubbles>{bubbles}</AnimateBubbles>
      </AnimateBubblesContainer>
      <Button onClick={handleClick}>move image to next position</Button>
    </Container>
  );
};

export default AnimationBubblesWrapper;
