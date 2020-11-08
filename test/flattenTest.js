// FUNCTION IMPORT
const { assert } = require('chai');
const { flatten } = require('../index');

// TEST CODE
describe('#flatten', () => {
  it('handles 2D-arrays correctly', () => {
    assert.deepEqual(flatten([[1, 2], 3, [4, 5]]), [1, 2, 3, 4, 5]);
  });

  it('handles multi-layer arrays', () => {
    assert.deepEqual(flatten([[1, [22, [222,223], 24]], 3, [4, 5]]), [1, 22, 222, 223, 24, 3, 4, 5]);
  });
});
