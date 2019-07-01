/**
 * Source:
 * https://www.codewars.com/kata/split-strings
 *
 * Author:
 * jhoffner
 *
 * Title:
 * Complete the solution so that it splits the string into pairs of two characters.
 * If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
 *
 * Example:
 * solution('abc') // should return ['ab', 'c_']
 * solution('abcdef') // should return ['ab', 'cd', 'ef']
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function solution(str) {
  console.log("str: ", str);
  return str
    .replace(/(\S{2})/g, "$1 ")
    .replace(/\s(\S)$/g, " $1_")
    .replace(/\s$/g, "")
    .split(" ");
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/split-strings/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function solution(str) {
  return (str.length % 2 ? str + "_" : str).match(/../g);
}

function solution(str) {
  return (str + "_").match(/../g);
}

function solution(str) {
  if (str.length % 2) str += "_";
  return str.match(/.{1,2}/g);
}

solution = s => (s + "_").match(/../g);

function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}

function solution(str) {
  return (str.length % 2 ? str + "_" : str).match(/\w\w/g);
}

function solution(str) {
  str.length % 2 && (str += "_");
  return str.match(/.{1,2}/g) || [];
}

console.log(solution("abc"));
console.log(solution("abcdef"));

/**
 * Think:
 */
