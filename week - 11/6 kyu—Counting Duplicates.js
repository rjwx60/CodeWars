/**
 * Source:
 * https://www.codewars.com/kata/counting-duplicates
 *
 * Author:
 *
 * Title:
 *
 * Example:
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function duplicateCount(text) {
  const resultObj = Array.from(text.toLowerCase()).reduce((ac, cv) => {
    if (!ac[cv]) {
      ac[cv] = 1;
    } else {
      ac[cv]++;
    }
    return ac;
  }, {});

  let resultNum = 0;
  for (key in resultObj) {
    if (resultObj[key] > 1) {
      resultNum++;
    }
  }
  return resultNum;
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/counting-duplicates/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function duplicateCount(text) {
  return (
    text
      .toLowerCase()
      .split("")
      .sort()
      .join("")
      .match(/([^])\1+/g) || []
  ).length;
}

function duplicateCount(text) {
  return text
    .toLowerCase()
    .split("")
    .filter(function(val, i, arr) {
      return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
    }).length;
}

function duplicateCount(text) {
  var dup = [];
  text
    .toLowerCase()
    .split("")
    .forEach(function(v, i, arr) {
      if (i != arr.lastIndexOf(v) && dup.indexOf(v) == -1) dup.push(v);
    });
  return dup.length;
}

function duplicateCount(text) {
  return new Set(text.toLowerCase().match(/(.)(?=.*\1)/gi)).size;
}
console.log(duplicateCount(""), 0);
console.log(duplicateCount("abcde"), 0);
console.log(duplicateCount("aabbcde"), 2);
console.log(duplicateCount("aabBcde"), 2, "should ignore case");
console.log(duplicateCount("Indivisibility"), 1);
console.log(
  duplicateCount("Indivisibilities"),
  2,
  "characters may not be adjacent"
);

/**
 * Think:
 */
