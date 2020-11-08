const _ = require('./index');
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
