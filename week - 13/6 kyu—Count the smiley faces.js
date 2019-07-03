/**
 * Source:
 * https://www.codewars.com/kata/count-the-smiley-faces
 *
 * Author:
 * St3f4n
 *
 * Title:
 * Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.
 *
 * Rules for a smiling face:
 * -Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
 * -A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
 * -Every smiling face must have a smiling mouth that should be marked with either ) or D.
 *
 * Example:
 * Valid smiley face examples:
 * :) :D ;-D :~)
 *
 * Invalid smiley faces:
 * ;( :> :} :]
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function countSmileys(arr) {
  let calculateResult = 0;
  arr.forEach(cv => {
    if (/^[;|:][-|~]{0,1}[)|D]$/.test(cv)) {
      calculateResult += 1;
    }
  });
  return calculateResult;
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/count-the-smiley-faces/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function countSmileys(arr) {
  return arr.filter(x => /^[:;][-~]?[)D]$/.test(x)).length;
}

const countSmileys = ss =>
  ss.reduce((a, s) => a + /^[:;][-~]?[D)]$/.test(s), 0);

const SMILING = /[:;]{1}[-~]?[)D]{1}/;
const countSmileys = faces => faces.filter(face => SMILING.test(face)).length;

countSmileys = arr => arr.filter(v => /(:|;)(-|~)?(\)|D)/.test(v)).length;

function countSmileys(arr) {
  return arr.reduce((n, s) => (/^[:;][-~]?[)D]$/.test(s) ? n + 1 : n), 0);
}

console.log(countSmileys([]), 0);
console.log(countSmileys([":D", ":~)", ";~D", ":)"]), 4);
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"]), 2);
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"]), 1);

/**
 * Think:
 */
