// FUNCTION IMPORT
const assertEqual = require('../assertEqual');
const tail = require('../tail');

// TEST CODE
let result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

result = tail([2]);
console.log(result);
result = tail([]);
console.log(result);

// Modification check
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);