const minMax = (arr) => {
  arr.sort();
  return [arr[0], arr[arr.length - 1]];
};
