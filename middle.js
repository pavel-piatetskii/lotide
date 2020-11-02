const middle = function(array) {
  const size = array.length;
  if (size < 3) return [];

  let i = 0;
  switch (size % 2) {
  case 0: // even number of elements
    i = size / 2 - 1;
    return array.slice(i, i + 2);
  case 1: // odd number of elements
    i = (size - 1) / 2;
    return array.slice(i, i + 1);
  }
};

module.exports = middle;