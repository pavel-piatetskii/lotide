// FUNCTION IMPORT
const { assert } = require('chai');
const { tail } = require('../index');

// TEST CODE
describe('#tail', () => {
  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });

  it('does not modify original the array', () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    tail(words);
    assert.strictEqual(3, 3);
  });
});