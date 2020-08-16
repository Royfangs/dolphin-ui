import React from 'react';

export const calculateBoundingBoxes = (children) => {
  const boundingBoxes = {};

  React.Children.forEach(children, ({ ref, key }) => {
    const node = ref && ref.current;

    if (node && key) {
      const nodeBoundingBox = node.getBoundingClientRect();
      boundingBoxes[key] = nodeBoundingBox;
    }
  });

  return boundingBoxes;
};
