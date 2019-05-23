/**
 * Source:
 * https://www.codewars.com/kata/mexican-wave
 *
 * Author:
 * adrian.eyre
 *
 * Title:
 * create a function that turns a string into a Mexican Wave.
 * You will be passed a string and you must return that string
 * in an array where an uppercase letter is a person standing up.
 *
 * Example:
 * wave("hello") => ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
 *
 * Translate:
 * 墨西哥人浪
 */

/**
 * My solution - ms
 */
function wave(Str) {
  if (!Str) return [];
  const strLowerCase = Str.toLowerCase();
  return Array.from(Str).reduce((ac, cv, index) => {
    if (cv.trim()) {
      ac.push(
        strLowerCase.substr(0, index) +
          cv.toUpperCase() +
          strLowerCase.substr(index + 1, Str.length - 1 - index)
      );
    }
    return ac;
  }, []);
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/mexican-wave/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function wave(str) {
  let result = [];
  str.split("").forEach((char, index) => {
    if (/[a-z]/.test(char)) {
      result.push(
        str.slice(0, index) + char.toUpperCase() + str.slice(index + 1)
      );
    }
  });
  return result;
}

var wave = w =>
  [...w]
    .map((a, i) => w.slice(0, i) + a.toUpperCase() + w.slice(i + 1))
    .filter(a => a != w);

const wave = s =>
  Array.from(s, (_, i) =>
    /\s/.test(s[i]) ? null : s.slice(0, i) + s[i].toUpperCase() + s.slice(i + 1)
  ).filter(Boolean);

function wave(s) {
  // Code here
  let w = [];
  for (let i = 0; i < s.length; i++) {
    w.push(s.substring(0, i) + s.charAt(i).toUpperCase() + s.slice(i + 1));
  }
  return w.filter(x => x != s);
}

const wave = str =>
  [...str]
    .map((s, i) => str.slice(0, i) + s.toUpperCase() + str.slice(i + 1))
    .filter(x => x != str);
console.log(wave("Two words"));
console.log(wave(" Gap "));
console.log(wave(""));

/**
 * Think:
 */
