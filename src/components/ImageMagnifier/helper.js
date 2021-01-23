const getCursorPosition = (element, e) => {
  const imageClientRect = element.getBoundingClientRect();
  const xPositionDiff = e.pageX - imageClientRect.left;
  const yPositionDiff = e.pageY - imageClientRect.top;

  const pageScrollXPositionDiff = xPositionDiff - window.pageXOffset;
  const pageScrollYPositionDiff = yPositionDiff - window.pageYOffset;

  return {
    pageScrollXPositionDiff,
    pageScrollYPositionDiff,
  };
};

export { getCursorPosition };
