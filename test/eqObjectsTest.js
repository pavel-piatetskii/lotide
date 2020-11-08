// FUNCTION IMPORT
const { assert } = require('chai');
const { eqObjects } = require('../index');

// TEST CODE
describe('#tail', () => {
  it('returns true for deeply equal objects', () => {
    const testObject1 = { a: { z: 1 }, b: 2 };
    const testObject2 = { a: { z: 1 }, b: 2 };
    assert.strictEqual(eqObjects(testObject1, testObject2), true);
  });

  it('returns false for non-equal objects', () => {
    const testObject1 = { a: { y: 0, z: 1 }, b: 2 };
    const testObject2 = { a: { y: 1, z: 2 }, b: 2 };
    assert.strictEqual(eqObjects(testObject1, testObject2), false);
  });
});
