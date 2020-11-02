const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔️  Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`⚠️  Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  str = str.replace(/ /g, '');
  str = str.toLowerCase();
  
  let output = {};

  for (const letter of str) {
    if (isNaN(letter)) {
      (output[letter]) ? output[letter]++ : output[letter] = 1;
    }
  }
  return output;
};

module.exports = countLetters;

const testLine = "lighthouse in the house";
assertEqual(countLetters(testLine)['l'], 1);
assertEqual(countLetters(testLine)['h'], 4);
assertEqual(countLetters(testLine)['o'], 2);
assertEqual(countLetters(testLine)['e'], 3);