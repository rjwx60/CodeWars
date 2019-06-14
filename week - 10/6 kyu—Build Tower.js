/**
 * Source:
 * https://www.codewars.com/kata/build-tower
 *
 * Author:
 * 8fdafs2
 *
 * Title:
 * Build Tower by the following given argument:
 * number of floors (integer and always greater than 0).
 *
 * Example:
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function towerBuilder(nFloors) {
  const result = [];
  for (let i = 1; i <= nFloors; i++) {
    result.push(
      `${" ".repeat(nFloors - i)}${"*".repeat(2 * i - 1)}${" ".repeat(
        nFloors - i
      )}`
    );
  }
  return result;
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/build-tower/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function towerBuilder(n) {
  return Array.from({ length: n }, function(v, k) {
    const spaces = " ".repeat(n - k - 1);
    return spaces + "*".repeat(k + k + 1) + spaces;
  });
}

function towerBuilder(n) {
  return [...Array(n)].map(
    (_, i) =>
      " ".repeat(n - 1 - i) + "*".repeat(i * 2 + 1) + " ".repeat(n - 1 - i)
  );
}

const towerBuilder = n =>
  [...Array(n)].map(
    (_, i) =>
      " ".repeat(n - i - 1) + "*".repeat(i * 2 + 1) + " ".repeat(n - i - 1)
  );

console.log(towerBuilder(1), ["*"]);
console.log(towerBuilder(2), [" * ", "***"]);
console.log(towerBuilder(3), ["  *  ", " *** ", "*****"]);

/**
 * Think:
 */
