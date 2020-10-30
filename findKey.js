const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) return key;
  }
};

const data1 = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
const result1 = findKey(data1, x => x.stars === 2);
assertEqual(result1, 'noma')

const data2 = {
  Jane:  {degree: 'Diploma',   city: 'Vancouver'},
  Nadia: {degree: 'Master\'s', city: 'Moscow'},
  John:  {degree: 'Bachelor',  city: 'London'},
  Jacob: {degree: 'Master\s',  city: 'London'}
};
const result2 = findKey(data2, x => x.city === 'London');
assertEqual(result2, 'John');

const result3 = findKey(data2, x => x.degree === 'Diploma' && x.city !== 'Vancouver');
assertEqual(result3, undefined);