const { eqObjects } = require('./index');

const assertObjectsEqual = function(actual, expected) {
  if (eqObjects(actual, expected))  {
    console.log('✔️  Assertion Passed: ', actual, ' === ', expected);
  } else {
    console.log('⚠️  Assertion Failed: ', actual, ' !== ', expected);
  }
};

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc);