const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i in array1) {
    if (array1[i] !== array2[i]) return false;
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

const flatten = function(array) {
  let output = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      output = output.concat(flatten(element));
    } else {
      output.push(element);
    }
  }
  return output;
};

module.exports = flatten;

assertArraysEqual(flatten([[1, 2], 3, [4, 5]]), [1, 2, 3, 4, 5]);
assertArraysEqual(flatten([[1, [22, [222,223], 24]], 3, [4, 5]]), [ 1, 22, 222, 223, 24, 3, 4, 5 ]);