/**
 * Source:
 * https://www.codewars.com/kata/write-number-in-expanded-form
 *
 * Author:
 * Belax8
 *
 * Title:
 * You will be given a number and you will need to return it as a string in Expanded Form.
 *
 * Example:
 * expandedForm(12); // Should return '10 + 2'
 * expandedForm(42); // Should return '40 + 2'
 * expandedForm(70304); // Should return '70000 + 300 + 4'
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function expandedForm(num) {
  let result = [],
    numStr = String(num);
  for (let i = numStr.length; i > 0; i--) {
    result.push(numStr[numStr.length - i] * 10 ** (i - 1));
  }
  return result.filter(cv => cv).join(" + ");
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

const expandedForm = n =>
  n.toString()
    .split("")
    .reverse()
    .map((a, i) => a * Math.pow(10, i))
    .filter(a => a > 0)
    .reverse()
    .join(" + ");

function expandedForm(num) {
  return String(num)
    .split("")
    .map((num, index, arr) => num + "0".repeat(arr.length - index - 1))
    .filter(num => Number(num) != 0)
    .join(" + ");
}

function expandedForm(num) {
  if (num < 10) return `${num}`;
  let over = num % Math.pow(10, num.toString().length - 1);
  if (!over) return `${num}`;
  return `${num - over} + ${expandedForm(over)}`;
}

function expandedForm(num) {
  var x = -1;
  num = num
    .toString()
    .split("")
    .reverse()
    .map(function(i) {
      x++;
      return i + "0".repeat(x);
    });
  return num
    .filter(i => !/^0+$/.test(i))
    .reverse()
    .join(" + ");
}


console.log(expandedForm(12), "10 + 2");
console.log(expandedForm(42), "40 + 2");
console.log(expandedForm(70304), "70000 + 300 + 4");

/**
 * Think:
 */
