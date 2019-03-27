/**
 * Source:  
 * https://www.codewars.com/kata/array-diff
 * 
 * Author:  
 * marcinbunsch
 * 
 * Title:
 * Implement a difference function, which subtracts one list from another and returns the result.
 * remove all values from list a, which are present in list b.
 * 
 * Example: 
 * array_diff([1,2],[1]) == [2]
 * array_diff([1,2,2,2,3],[2]) == [1,3]
 * 
 * Translate:
 */


/** 
 * My solution - 795 ms
 */
function array_diff(a, b) {
  let cacheArr = [];
  if (!a.length || !b.length) {
    return !a.lenght ? a : b;
  } else {
    b.forEach(bcv => {
      if (a.includes(bcv)) {
        a = a.filter(acv => (acv !== bcv))
      }
    })
    return a;
  }
}

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/array-diff/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function array_diff(a, b) {
  return a.filter(function (x) { return b.indexOf(x) == -1; });
}

function array_diff(a, b) {
  return a.filter(e => !b.includes(e));
}

function array_diff(a, b) {
  b = new Set(b)
  return a.filter(v => !b.has(v))
}

/**
 * Think:
 */


