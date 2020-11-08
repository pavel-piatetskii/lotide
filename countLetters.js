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
