// FUNCTION IMPORT
const { assert } = require('chai');
const { eqArrays } = require('../index');

// TEST CODE
describe('#eqArrays', () => {
  it('returns true for deeply equal arrays', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
  });

  it('returns false for non-equal arrays', () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false);
  });
});