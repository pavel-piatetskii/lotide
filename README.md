# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @pavel-piatetskii/lotide`

**Require it:**

`const _ = require('@pavel-piatetskii/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(string)`: returns a count of each of the letters in the input string
* `countOnly(array, object)`: takes in an array and counts number of elements specified as <element: true> in an object provided
* `eqArrays(array1, array2)`: compare two arrays for an exact match
* `eqObjects(object1, object2)`: compare two objects for an exact match
* `findKey(object, callback)`: return the first key in the object for which the callback returns a truthy value
* `findKeyByValue(object, value)`: searches for a key on an object where its value matches a given one
* `flatten(array)`: "unpacks" nested arrays in the input array, making it single-level
* `head(array)`: returns the first element of the array
* `letterPositions(string)`: returns an object containing the list of letters containing in the input string as properties and arrays of zero-based positions of every letter as corresponding values
* `map(array, callback)`: iterates through the array applying the callback function ob every its element
* `middle(array)`: return an array with only the middle element(s) of the input array
* `tail(array)`: returns every element except the head (first element) of the array
* `takeUntil(array, callback)`: returns a part af the input array from the beginning to the element which causes the callback function to return a truthy value
* `without(array1, array2)`: returns a new array without elements of array1 which match elements of array2
