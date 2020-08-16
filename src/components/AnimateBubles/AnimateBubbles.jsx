import React, { useEffect, useState, useLayoutEffect } from 'react';

import { calculateBoundingBoxes } from '../../ulti/calculateBoundingBoxes';
import { usePrevious } from '../../hooks/usePrevious';

const AnimateBubbles = ({ children }) => {
  // store last boundingBox
  const [boundingBox, setBoundingBox] = useState({});
  // store first boundingBox
  const [prevBoundingBox, setPrevBoundingBox] = useState({});
  // get previous children and store it after render
  const prevChildren = usePrevious(children);

  // calculate last boundingBox
  useLayoutEffect(() => {
    setBoundingBox(calculateBoundingBoxes(children));
  }, [children]);

  // calculate first boundingBox
  useLayoutEffect(() => {
    setPrevBoundingBox(calculateBoundingBoxes(prevChildren));
  }, [prevChildren]);

  useEffect(() => {
    const hasPrevBoundingBox =
      prevBoundingBox && Object.keys(prevBoundingBox).length;

    if (hasPrevBoundingBox) {
      React.Children.forEach(children, ({ ref, key }) => {
        const node = ref.current;
        const firstBoundingBox = prevBoundingBox[key];
        const lastBoundingBox = boundingBox[key];
        const differenceInX = firstBoundingBox.left - lastBoundingBox.left;

        if (differenceInX) {
          requestAnimationFrame(() => {
            // before painting the DOM, invert child to first position
            node.style.transform = `translateX(${differenceInX}px)`;
            node.style.transition = 'transform 0s';

            requestAnimationFrame(() => {
              // after the previous frame, remove transform
              node.style.transform = '';
              node.style.transition = 'transform 0.3s';
            });
          });
        }
      });
    }
  }, [boundingBox, children, prevBoundingBox]);

  return children;
};

export default AnimateBubbles;
