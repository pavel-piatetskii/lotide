const eqArrays = function(arr1, arr2) {

  if (arr1.length !== arr2.length ||
    !Array.isArray(arr1) || !Array.isArray(arr2)) {
    return false;
  }
  
  for (let i in arr1) {
    if (Array.isArray(arr1[i]) && Array.isArray(arr2[i])) {
      if (!eqArrays(arr1[i], arr2[i])) {
        return false;
      }
    } else if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;

//console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])) // => true
//
//console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])) // => false
//console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false