/**
 * Source:
 * https://www.codewars.com/kata/detect-pangram
 *
 * Author:
 *
 * Title:
 * A pangram is a sentence that contains every single letter of the alphabet at least once.
 * For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
 * because it uses the letters A-Z at least once (case is irrelevant).
 * Given a string, detect whether or not it is a pangram.
 * Return True if it is, False if not. Ignore numbers and punctuation.
 *
 * Example:
 *
 * Translate:
 * 检测一段字符串是否使用了A-Z中字母至少一次
 */

/**
 * My solution - ms
 */
function isPangram(string) {
  let resultNum = 0;
  const CHAR_NUMBER = 26;
  for (let i = 97; i <= 122; i++) {
    resultNum = Array.from(string.toLocaleLowerCase()).includes(
      String.fromCharCode(i)
    )
      ? resultNum + 1
      : resultNum;
  }
  return resultNum === CHAR_NUMBER ? true : false;
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/detect-pangram/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function isPangram(string) {
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x) {
    return string.indexOf(x) !== -1;
  });
}

function isPangram(string) {
  return (string.match(/([a-z])(?!.*\1)/gi) || []).length === 26;
}

function isPangram(string) {
  return "abcdefghijklmnopqrstuvwxyz"
    .split("")
    .every(x => string.toLowerCase().includes(x));
}

function isPangram(string) {
  return (
    string
      .replace(/[^a-z]/gi, "")
      .toLowerCase()
      .split("")
      .filter(function(e, p, a) {
        return a.indexOf(e) == p;
      })
      .sort()
      .join("").length == 26
  );
}
var string = "The quick brown fox jumps over the lazy dog.";
console.log(isPangram(string), true);
var string = "This is not a pangram.";
console.log(isPangram(string), false);

/**
 * Think:
 */
