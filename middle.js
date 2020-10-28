const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log('✔️  Assertion Passed: ', array1, ' === ', array2);
  } else {
    console.log('⚠️  Assertion Failed: ', array1, ' !== ', array2);
  }
};

const middle = function(array) {
  const size = array.length;
  if (size < 3) return [];

  let i = 0;
  switch (size % 2) {
    case 0: // even number of elements
      i = size/2 - 1;
      return array.slice(i, i + 2);
    case 1: // odd number of elements
      i = (size - 1)/2;
      return array.slice(i, i + 1);
  }
};

assertArraysEqual(middle([1]), []) // => []
assertArraysEqual(middle([1, 2]), []) // => []

assertArraysEqual(middle([1, 2, 3]), [2]) // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3]

assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4]