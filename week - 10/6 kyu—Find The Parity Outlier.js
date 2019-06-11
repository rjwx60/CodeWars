/**
 * Source:
 * https://www.codewars.com/kata/find-the-parity-outlier
 *
 * Author:
 * obnounce
 *
 * Title:
 *  given an array (which will have a length of at least 3,
 * but could be very large) containing integers.
 * The array is either entirely comprised of odd integers or entirely comprised of even
 * integers except for a single integer N.
 * Write a method that takes the array as an argument and returns this "outlier" N.
 *
 * Example:
 * [2, 4, 0, 100, 4, 11, 2602, 36]
 * Should return: 11 (the only odd number)
 *
 * [160, 3, 1719, 19, 11, 13, -21]
 * Should return: 160 (the only even number)
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function findOutlier(integers) {
  const odd = [],
    even = [];
  integers.forEach(cv => {
    if (Math.abs(cv % 2) === 1) {
      odd.push(cv);
    } else {
      even.push(cv);
    }
  });
  return odd.length === 1 ? odd[0] : even[0];
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/find-the-parity-outlier/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function findOutlier(int) {
  var even = int.filter(a => a % 2 == 0);
  var odd = int.filter(a => a % 2 !== 0);
  return even.length == 1 ? even[0] : odd[0];
}

function findOutlier(integers) {
  var res;
  var odd = integers.filter(function(e) {
    if (e % 2 != 0) {
      res = e;
    }
    return e % 2 == 0;
  });
  return odd.length > 1 ? res : odd.pop();
}
/**
 * Think:
 */
