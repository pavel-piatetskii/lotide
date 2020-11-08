// FUNCTION IMPORT
const { assert } = require('chai');
const { letterPositions } = require('../index');

// TEST CODE
describe('#letterPositions', () => {
  it('correctly counts every letter occurence in a given string', () => {
    const testLine = "lighthouse in the house";
    const expected = { 
      l: [ 0 ],
      i: [ 1, 11 ],
      g: [ 2 ],
      h: [ 3, 5, 15, 18 ],
      t: [ 4, 14 ],
      o: [ 6, 19 ],
      u: [ 7, 20 ],
      s: [ 8, 21 ],
      e: [ 9, 16, 22 ],
      n: [ 12 ] 
    };
    
    assert.deepEqual(letterPositions(testLine), expected);
  });
});