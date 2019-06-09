/**
 * Source:
 * https://www.codewars.com/kata/which-are-in
 *
 * Author:
 * g964
 *
 * Title:
 * Given two arrays of strings a1 and a2 return a sorted array r
 * in lexicographical order of the strings of a1 which are substrings of strings of a2.
 *
 * Example:
 * a1 = ["arp", "live", "strong"]
 * a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
 * returns ["arp", "live", "strong"]
 *
 * a1 = ["tarp", "mice", "bull"]
 * a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
 * returns []
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function inArray(array1, array2) {
  const result = [];
  let testStr = array2.join("-");
  array1.forEach(cv => {
    if (~testStr.indexOf(cv)) {
      result.push(cv);
      testStr.replace(cv, "");
    }
  });
  return result.sort();
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/which-are-in/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function inArray(array1, array2) {
  return array1.filter(a1 => array2.find(a2 => a2.match(a1))).sort();
}

function inArray(a1, a2) {
  return a1.filter(sub => a2.some(whole => whole.includes(sub))).sort();
}

function inArray(arr1, arr2) {
  return arr1
    .filter(function(needle) {
      return arr2.some(function(haystack) {
        return haystack.indexOf(needle) > -1;
      });
    })
    .sort();
}

/**
 * Think:
 */
