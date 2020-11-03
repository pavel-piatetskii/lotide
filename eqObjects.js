const _ = require('./index');
const {assertEqual} = _;
const {eqArrays} = _;

const eqObjects = function(obj1, obj2) {
  
  const size1 = Object.keys(obj1).length;
  const size2 = Object.keys(obj2).length;
  if (size1 !== size2) return false;

  for (const key1 in obj1) {
    const isArr = Array.isArray(obj1[key1]);
    const isObj = typeof obj1[key1] === 'object';
    if (isArr) {
      return eqArrays(obj1[key1], obj2[key1]);
    } else if (isObj) {
      return eqObjects(obj1[key1], obj2[key1]);
    } else {
      return (obj1[key1] === obj2[key1]) ? true : false;
    }
  }
};

module.exports = eqObjects;

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);
// 
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);
// 
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);
// 
// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

// assertEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true); 
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false); // => false
// assertEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false); // => false