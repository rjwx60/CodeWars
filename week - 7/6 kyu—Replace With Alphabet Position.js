/**
 * Source:
 * https://www.codewars.com/kata/replace-with-alphabet-position
 *
 * Author:
 * MysteriousMagenta
 *
 * Title:
 * replace a string's every letter with its position in the alphabet.
 * If anything in the text isn't a letter, ignore it and don't return it.
 *
 * Example:
 * alphabet_position("The sunset sets at twelve o' clock.")
 * "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function alphabetPosition(text) {
  let resultStr = "";
  Array.from(text).forEach(cv => {
    let code = cv.toLowerCase().charCodeAt();
    if (code >= 97 && code <= 122) {
      resultStr += code - 96 + " ";
    }
  });
  return resultStr.trim();
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/replace-with-alphabet-position/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function alphabetPosition(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi)
    .map(c => c.charCodeAt() - 64)
    .join(" ");
}

function alphabetPosition(text) {
  var result = "";
  for (var i = 0; i < text.length; i++) {
    var code = text.toUpperCase().charCodeAt(i);
    if (code > 64 && code < 91) result += code - 64 + " ";
  }
  return result.slice(0, result.length - 1);
}

let alphabetPosition = text =>
  text
    .toUpperCase()
    .replace(/[^A-Z]/g, "")
    .split("")
    .map(ch => ch.charCodeAt(0) - 64)
    .join(" ");

function alphabetPosition(text) {
  return text
    .match(/[a-zA-Z]/g)
    .map(el => el.toLowerCase().charCodeAt() - 96)
    .join(" ");
}

console.log(
  alphabetPosition("The sunset sets at twelve o' clock.") ==
    "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
);
console.log(
  alphabetPosition("The narwhal bacons at midnight.") ==
    "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
);

/**
 * Think:
 */
