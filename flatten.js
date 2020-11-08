const flatten = function(array) {
  let output = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      output = output.concat(flatten(element));
    } else {
      output.push(element);
    }
  }
  return output;
};

module.exports = flatten;
