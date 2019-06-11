/**
 * Source:
 * https://www.codewars.com/kata/highest-scoring-word
 *
 * Author:
 * A.Partridge
 *
 * Title:
 * Given a string of words, you need to find the highest scoring word.
 * Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.
 * You need to return the highest scoring word as a string.
 * If two words score the same, return the word that appears earliest in the original string.
 * All letters will be lowercase and all inputs will be valid.
 *
 * Example:
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function high(x) {
  const strArr = x.split(" "),
    resultArr = [];
  strArr.forEach((cv, index) => {
    let calculateNum = Array.from(cv).reduce((ac, ccv) => {
      return ac + ccv.charCodeAt() - 96;
    }, 0);
    resultArr.push({
      total: calculateNum,
      index: index,
      value: cv
    });
  });
  // 由 total 高低排序
  resultArr.sort((a, b) => b.total - a.total);
  if (resultArr[0]["total"] !== resultArr[1]["total"]) {
    return resultArr[0]["value"];
  } else {
    let minIndex = Math.min(resultArr[0]["index"], resultArr[1]["index"]);
    return strArr[minIndex];
  }
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function high(s) {
  let as = s
    .split(" ")
    .map(s => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  return s.split(" ")[as.indexOf(Math.max(...as))];
}

function high(words) {
  const alpha = " abcdefghijklmnopqrstuvwxyz";
  const score = word =>
    word.split("").reduce((a, b) => a + alpha.indexOf(b), 0);
  return words
    .split(" ")
    .map((word, pos) => ({ word: word, pos: pos, score: score(word) }))
    .sort((a, b) => a.score - b.score || b.pos - a.pos)
    .pop().word;
}

function high(x) {
  const score = s => s.split("").reduce((m, i) => m + i.charCodeAt(0) - 96, 0);
  return x.split(" ").reduce((s, n) => (score(s) < score(n) ? n : s));
}

console.log(high("man i need a taxi up to ubud"), "taxi");
console.log(high("what time are we climbing up the volcano"), "volcano");
console.log(high("take me to semynak"), "semynak");

/**
 * Think:
 */
