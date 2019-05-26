/**
 * Source:
 * https://www.codewars.com/kata/find-the-missing-letter
 *
 * Author:
 * user5036852
 *
 * Title:
 * Write a method that takes an array of consecutive (increasing) letters as input
 * and that returns the missing letter in the array.
 * You will always get an valid array. And it will be always exactly one letter be missing.
 *
 * The length of the array will always be at least 2.
 * The array will always contain letters in only one case.
 *
 * Example:
 * ['a','b','c','d','f'] -> 'e'
 * ['O','Q','R','S'] -> 'P'
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function findMissingLetter(array) {
  let firstCharCode = 0;
  for (let i = 0; i < array.length; i++) {
    if (!i) {
      firstCharCode = array[i].charCodeAt();
    } else {
      if (array[i].charCodeAt() !== ++firstCharCode) {
        return String.fromCharCode(firstCharCode);
      }
    }
  }
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/find-the-missing-letter/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function findMissingLetter(array) {
  let first = array[0].charCodeAt(0);
  for (let i = 1; i < array.length; i++) {
    if (first + i !== array[i].charCodeAt(0)) {
      return String.fromCharCode(first + i);
    }
  }
  throw new Error("Invalid input");
}

function findMissingLetter(array) {
  var i = array[0].charCodeAt();
  array.map(x => (x.charCodeAt() == i ? i++ : i));
  return String.fromCharCode(i);
}

function findMissingLetter(letters) {
  for (var i = 0; i < letters.length; i++) {
    if (letters[i].charCodeAt() + 1 !== letters[i + 1].charCodeAt()) {
      return String.fromCharCode(letters[i].charCodeAt() + 1);
    }
  }
}

console.log(findMissingLetter(["a", "b", "c", "d", "f"]), "e");
console.log(findMissingLetter(["O", "Q", "R", "S"]), "P");
/**
 * Think:
 */
