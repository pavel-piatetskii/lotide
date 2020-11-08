const findKeyByValue = function(object, search) {
  for (const key in object) {
    if (object[key] === search) return key;
  }
};

module.exports = findKeyByValue;
