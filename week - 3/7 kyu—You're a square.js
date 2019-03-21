/**
 * Source:  
 * https://www.codewars.com/kata/youre-a-square
 * 
 * Author:  
 * bkaes
 * 
 * Title:
 * Given an integral number, determine if it's a square number:
 * In mathematics, a square number or perfect square is an integer 
 * that is the square of an integer; in other words, 
 * it is the product of some integer with itself.
 * The tests will always use some integral number, 
 * so don't worry about that in dynamic typed languages.
 * 
 * Example: 
 * is_square (-1) # => false
 * is_square   0 # => true
 * is_square   3 # => false
 * is_square   4 # => true
 * is_square  25 # => true
 * is_square  26 # => false
 * 
 * Translate:
 * 略
 */


/** 
 * My solution - ms
 */
var isSquare = function (n) {
  const result = Math.sqrt(n);
  return n == 0 ? true : (Math.floor(result) === result && n / result === result ? true : false)
}

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/youre-a-square/javascript
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function isSquare(n) {
  return Math.sqrt(n) % 1 === 0;
}

const isSquare = n => Number.isInteger(Math.sqrt(n));

var isSquare = function (n) {
  return Math.sqrt(n) % 1 === 0 ? true : false;
};
/**
 * Think:
 */
