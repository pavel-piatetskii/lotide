// FUNCTION IMPORT
const { assert } = require('chai');
const { findKeyByValue } = require('../index');

// TEST CODE
describe('#findKeyByValue', () => {
  const bestTVShowsByGenre = {
    'sci_fi': "The Expanse",
    'comedy': "Brooklyn Nine-Nine",
    'drama':  "The Wire"
  };

  it('returns correct key for a given value', () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
  });
});