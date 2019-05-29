/**
 * Source:
 * https://www.codewars.com/kata/persistent-bugger
 *
 * https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec/train/javascript
 *
 * Author:
 * joh_pot
 *
 * Title:
 * Write a function, persistence, that takes in a positive parameter num and returns
 * its multiplicative persistence, which is the number of times you must multiply the
 * digits in num until you reach a single digit.
 *
 * Example:
 * persistence(39) === 3 because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit
 * persistence(999) === 4 because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
 * persistence(4) === 0 because 4 is already a one-digit number
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function persistence(num) {
  if (!persistence.result && num < 10) return 0;
  const calculate = Array.from(`${num}`).reduce((ac, cv) => ac * cv, 1);
  if (calculate < 10) {
    let result = persistence.result + 1;
    persistence.result = null;
    return result;
  } else {
    if (!persistence.result) {
      persistence.result = 1;
    } else {
      persistence.result++;
    }
  }
  return persistence(calculate);
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function persistence(num) {
  var times = 0;
  num = num.toString();
  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }
  return times;
}

const persistence = num => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
    : 0;
};

function persistence(num) {
  for (var i = 0; num > 9; i++) {
    num = num
      .toString()
      .split("")
      .reduce((t, c) => c * t);
  }
  return i;
}

function persistence(num, cnt = 0) {
  let arrayNum = num.toString().split("");
  return arrayNum.length === 1
    ? cnt
    : persistence(arrayNum.reduce((x, y) => x * y), ++cnt);
}

console.log(persistence(39));
console.log(persistence(4));
console.log(persistence(25));
console.log(persistence(999));

/**
 * Think:
 */
