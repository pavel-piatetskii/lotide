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

const takeUntil = function(array, callback) {
  let output = [];
  for (const elm of array) {
    if (!callback(elm)) {
      output.push(elm);
    } else {
      return output;
    }
  }
  return output;
};

module.exports = takeUntil;

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);
// 
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, ['I\'ve', 'been', 'to', 'Hollywood']);
// 
// const data3 = [2, 4, 8, 16, 32, 64, 127];
// const results3 = takeUntil(data3, x => x % 2 !== 0);
// assertArraysEqual(results3, [2, 4, 8, 16, 32, 64]);
// 
// const data4 = ["a", "bc", "def", "ghij", "klmno", "pqrstu", ];
// const results4 = takeUntil(data4, x => x.length > 4);
// assertArraysEqual(results4, ["a", "bc", "def", "ghij"]);