/**
 * Source:
 * https://www.codewars.com/kata/build-a-pile-of-cubes
 *
 * Author:
 * g964
 *
 * Title:
 * Your task is to construct a building which will be a pile of n cubes.
 * The cube at the bottom will have a volume of n^3,
 * the cube above will have volume of (n-1)^3 and so on until the top which will have a volume of 1^3.
 *
 * You are given the total volume m of the building.
 * Being given m can you find the number n of cubes you will have to build?
 *
 * The parameter of the function findNb (find_nb, find-nb, findNb)
 * will be an integer m and you have to return the integer n such as n^3 + (n-1)^3 + ... + 1^3 = m if such a n exists or -1 if there is no such n.
 *
 * Example:
 * findNb(1071225) --> 45
 * findNb(91716553919377) --> -1
 *
 * Translate:
 */
function findNb(m) {
  let result = 1,
    caculateResult = 0;
  while (caculateResult < m) {
    caculateResult += Math.pow(++result, 3);
  }
  return caculateResult === m ? result : -1;
}

/**
 * My solution - ms
 */

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/build-a-pile-of-cubes/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function findNb(m) {
  var n = 0;
  while (m > 0) m -= (++n) ** 3;
  return m ? -1 : n;
}

function findNb(m) {
  var n = 0;
  while (m > 0) m -= Math.pow(++n, 3);
  return m ? -1 : n;
}

function findNb(m) {
  m = Math.sqrt(m) * 2;
  if (m != parseInt(m)) {
    return -1;
  }
  var result = parseInt(Math.sqrt(m));
  return result * (result + 1) == m ? result : -1;
}

console.log(findNb(1071225));
console.log(findNb(91716553919377));
console.log(findNb(4183059834009));
/**
 * Think:
 */
