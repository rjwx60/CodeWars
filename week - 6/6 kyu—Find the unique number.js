/**
 * Source:
 * https://www.codewars.com/kata/find-the-unique-number
 *
 * Author:
 * isqua
 *
 * Title:
 * There is an array with some numbers. All numbers are equal except for one
 *
 * Note:
 * It’s guaranteed that array contains more than 3 numbers.
 * The tests contain some very huge arrays, so think about performance.
 *
 * Example:
 * findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
 * findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function findUniq(arr) {
  // 匹配前面没有 '-' 号的数
  var cache = arr.join("").split(new RegExp(`(?<!-)${arr[0]}`));
  if (cache.length == 2) {
    // 匹配前面没有 '-' 号的数
    return Number(
      arr
        .join("")
        .split(new RegExp(`(?<!-)${arr[1]}`))
        .filter(cv => cv)[0]
    );
  }
  return Number(cache.filter(cv => cv)[0]);
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/find-the-unique-number/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] == arr[1] ? arr.pop() : arr[0];
}

function findUniq(arr) {
  let [a, b, c] = arr.slice(0, 3);
  if (a != b && a != c) return a;
  for (let x of arr) if (x != a) return x;
}

function findUniq(arr) {
  return +arr.filter(value => {
    return arr.indexOf(value) == arr.lastIndexOf(value);
  });
}

function findUniq(arr) {
  return arr.find(n => arr.indexOf(n) === arr.lastIndexOf(n));
}

function findUniq(arr) {
  return arr.filter(function(elem) {
    return arr.indexOf(elem) === arr.lastIndexOf(elem);
  })[0];
}

const findUniq = arr => arr.filter(a => a !== arr[+(arr[1] === arr[2])])[0]
/**
 * Think:
 */
