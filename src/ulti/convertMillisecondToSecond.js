export const convertMillisecondToSecond = (millisecond) => {
  if (typeof millisecond === 'string') {
    return parseInt(millisecond, 10) / 1000;
  }

  if (typeof millisecond === 'number') {
    return millisecond / 1000;
  }
};
