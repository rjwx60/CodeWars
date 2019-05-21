/**
 * Source:
 * https://www.codewars.com/kata/sort-the-odd
 *
 * Author:
 * fyvfyv
 *
 * Title:
 * You have an array of numbers.
 * Your task is to sort ascending odd numbers but even numbers must be on their places.
 * Zero isn't an odd number and you don't need to move it. If you have an empty array, you need to return it.
 *
 * Example:
 * sortArray([5, 3, 2, 8, 1, 4]) == [1, 3, 2, 8, 5, 4]
 *
 * Translate:
 * 只对奇数进行升序排序，偶数位置不变
 */

/**
 * My solution - ms
 */
function sortArray(array) {
  let oddArr = [],
    oddArrIndex = 0;

  if (!array.length) return array;

  return array
    .map((cv, index, arr) => {
      if (cv !== 0 && cv % 2 === 1) {
        oddArr.push(cv);
        cv = "x";
      }
      if (index === arr.length - 1) {
        oddArr.sort((a, b) => {
          return a - b;
        });
      }
      return cv;
    })
    .map(cv => {
      if (cv === "x") {
        cv = oddArr[oddArrIndex++];
      }
      return cv;
    });
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/sort-the-odd/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function sortArray(array) {
  const odd = array.filter(x => x % 2).sort((a, b) => a - b);
  return array.map(x => (x % 2 ? odd.shift() : x));
}

const sortArray = array => {
  let oddArr = array.filter(el => el % 2 !== 0).sort((a, b) => a - b);
  return array.map(el => (el % 2 === 0 ? el : oddArr.shift()));
};

console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
console.log(sortArray([]), []);

/**
 * Think:
 */
