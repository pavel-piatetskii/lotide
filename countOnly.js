const countOnly = function(allItems, itemsToCount) {
  let output = {};
  for (const item of allItems) {
    if ((item in itemsToCount) && itemsToCount[item]) {
      output[item] = (output[item]) ? output[item] + 1 : 1;
    }
  }
  return output;
};

module.exports = countOnly;
