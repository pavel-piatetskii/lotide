const letterPositions = function(str) {
  str = str.toLowerCase();
  
  let output = {};

  for (const index in str) {
    const pos = Number(index);
    const letter = str[pos];
    if (isNaN(letter) && letter !== ' ') {
      (output[letter]) ? output[letter].push(pos) : output[letter] = [pos];
    }
  }
  return output;
};

module.exports = letterPositions;
