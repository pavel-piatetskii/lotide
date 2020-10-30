const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) return false;
  for (let i in array1) {
    if (array1[i] !== array2[i]) return false;
  }
  return true;
};

const eqObjects = function(object1, object2) {
  
  const size1 = Object.keys(object1).length;
  const size2 = Object.keys(object2).length;
  if (size1 !== size2) return false;

  for (const key1 in object1) {
    const isArr1 = Array.isArray(object1[key1]);
    const isArr2 = Array.isArray(object2[key1]);

    if (isArr1 && isArr2) {
      if (!eqArrays(object1[key1], object2[key1])) return false;
    } else {
      if (object1[key1] !== object2[key1]) return false;
    }
  }
  return true;
};

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