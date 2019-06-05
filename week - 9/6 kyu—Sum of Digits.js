/**
 * Source:
 * https://www.codewars.com/kata/sum-of-digits
 *
 * Author:
 * user578387
 *
 * Title:
 *
 * Example:
 * digital_root(16)
 * => 1 + 6
 * => 7
 *
 * digital_root(942)
 * => 9 + 4 + 2
 * => 15 ...
 * => 1 + 5
 * => 6
 *
 * digital_root(132189)
 * => 1 + 3 + 2 + 1 + 8 + 9
 * => 24 ...
 * => 2 + 4
 * => 6
 *
 * digital_root(493193)
 * => 4 + 9 + 3 + 1 + 9 + 3
 * => 29 ...
 * => 2 + 9
 * => 11 ...
 * => 1 + 1
 * => 2
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function digital_root(n) {
  let result = Array.from(`${n}`).reduce((ac, cv) => {
    return ac + +cv;
  }, 0);
  return `${result}`.length > 1 ? digital_root(result) : result;
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/sum-of-digits/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function digital_root(n) {
  return ((n - 1) % 9) + 1;
}

function digital_root(n) {
  if (n < 10) return n;
  return digital_root(
    n
      .toString()
      .split("")
      .reduce(function(acc, d) {
        return acc + +d;
      }, 0)
  );
}

function digital_root(n) {
  n = eval(
    n
      .toString()
      .split("")
      .join("+")
  );
  if (n > 9) {
    return digital_root(n);
  }
  return n;
}

function digital_root(n) {
  if (n < 10) return n;
  return digital_root((n % 10) + digital_root(Math.floor(n / 10)));
}

function digital_root(n) {
  return (--n % 9) + 1;
}

console.log(digital_root(16), 7);
console.log(digital_root(456), 6);

/**
 * Think:
 */
