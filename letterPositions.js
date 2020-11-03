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

const letterPositions = function(str) {
  str = str.toLowerCase();
  
  let output = {};

  for (const index in str) {
    const pos = Number(index);
    const letter = str[pos];
    if (isNaN(letter) && letter !== ' ') {
      (output[letter]) ? output[letter].push(pos) : output[letter] = [pos];
    }
  }
  return output;
};

module.exports = letterPositions;

const testLine = "lighthouse in the house";

assertArraysEqual(letterPositions(testLine)['l'], [0]);
assertArraysEqual(letterPositions(testLine)['h'], [3, 5, 15, 18]);
assertArraysEqual(letterPositions(testLine)['s'], [8, 21]);
assertArraysEqual(letterPositions(testLine)['e'], [9, 16, 22]);
console.log(letterPositions(testLine))