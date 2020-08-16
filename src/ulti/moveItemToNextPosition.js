export function moveItemToNextPosition(array) {
  // create new Array
  const updateArray = [...array];
  // store last item
  const lastItem = updateArray[array.length - 1];

  for (let i = 0; i < array.length; i++) {
    updateArray[i + 1] = array[i];
  }
  // update first one with last item
  updateArray[0] = lastItem;
  // pop out last one value
  updateArray.pop();

  return updateArray;
}
