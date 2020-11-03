const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

    switch (isArr1 && isArr2) {
    case true:
      if (!eqArrays(object1[key1], object2[key1])) return false;
      break;
    case false:
      if (object1[key1] !== object2[key1]) return false;
      break;
    }
  }
  return true;
};

module.exports = eqObjects;

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);