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

const map = function(array, callback) {
  const results = [];
  for (const item of array) {
    results.push(callback(item))
  }
  return results;
}

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

const numbers = [-50, 0, 42];
const results2 = map(numbers, num => num + 100);
assertArraysEqual(results2, [50, 100, 142]);

const booleans = [true, false];
const results3 = map(booleans, boolean => !boolean);
assertArraysEqual(results3, [false, true]);