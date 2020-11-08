// FUNCTION IMPORT
const { assert } = require('chai');
const { countOnly } = require('../index');

// TEST CODE
describe('#countOnly', () => {
  it('counts only keys passed as \'true\'', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const toCount = { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false };

    const expected = { Fang: 2, Jason: 1 };
    assert.deepEqual(countOnly(firstNames, toCount), expected);
  });
});