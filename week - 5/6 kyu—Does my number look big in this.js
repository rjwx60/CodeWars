/**
 * Source:
 * https://www.codewars.com/kata/does-my-number-look-big-in-this
 *
 * Author:
 * JulianNicholls
 *
 * Title:
 * A Narcissistic Number is a number which is the sum of its own digits,
 * each raised to the power of the number of digits in a given base.
 * In this Kata, we will restrict ourselves to decimal (base 10).
 *
 * Example:
 * 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
 * 1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
 *
 * Translate:
 */

/**
 * My solution - 698ms
 */
function narcissistic(value) {
  const baseLen = `${value}`.length;
  return `${value}`
    .split("")
    .reduce((ac, cv) => ac + Math.pow(cv, baseLen), 0) == value
    ? true
    : false;
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function narcissistic(value) {
  return (
    ("" + value).split("").reduce(function(p, c) {
      return p + Math.pow(c, ("" + value).length);
    }, 0) == value
  );
}

function narcissistic(value) {
  var remaining = value,
    digits = [],
    solution = 0;
  while (remaining > 0) {
    digits.push(remaining % 10);
    remaining = Math.floor(remaining / 10);
  }

  return (
    value ==
    digits.reduce(function(p, n) {
      return p + Math.pow(n, digits.length);
    }, 0)
  );
}

function narcissistic(number) {
  var arrayOfDigitals = number.toString().split(""),
    numberLength = arrayOfDigitals.length,
    sum = 0;

  arrayOfDigitals.forEach(function(digit) {
    sum += Math.pow(digit, numberLength);
  });

  return sum === number;
}

function narcissistic(value) {
  var power = ("" + value).length;
  return (
    [...("" + value)].reduce((a, b) => a + Math.pow(b, power), 0) === value
  );
}
/**
 * Think:
 */
