/**
 * Source:
 * https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/39
 *
 * Author:
 * Unknown
 *
 * Title:
 * merge two array:
 * [A1, A2, B1, B2, C1, C2, D1, D2] &
 * [A, B, C, D]
 * to
 * [A1, A2, A, B1, B2, B, C1, C2, C, D1, D2, D]
 *
 * Example:
 *
 * Translate:
 */

/**
 * My solution - ms
 */
const arr1 = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"],
  arr2 = ["A", "B", "C", "D"];

function mergeSpec() {
  arr2.map((cv, index) => {
    arr1.splice((index + 1) * 2 + index, 0, cv);
  });
  return arr1;
}

/**
 * Other solution:
 * Source: https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/39
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
const res = ["A", "B", "C", "D"].reduce(
  (memo, item) => {
    const tmp = [...memo].reverse();
    const idx = memo.length - tmp.findIndex(i => i.startsWith(item)) - 1;

    return [...memo.slice(0, idx + 1), item, ...memo.slice(idx + 1)];
  },
  ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"]
);



const matchIndex = str => str.match(/\d+/) || [];
const getCharCode = str => str.match(/\w/)[0].charCodeAt();
const result = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"]
  .concat(["A", "B", "C", "D"])
  .sort((a, b) => {
    const [[aIndex = Infinity], [bIndex = Infinity]] = [
      matchIndex(a),
      matchIndex(b)
    ];
    const [aChar, bChar] = [getCharCode(a), getCharCode(b)];
    return aChar === bChar ? aIndex - bIndex : aChar - bChar;
  });



let a1 = ["A1", "A2", "B1", "B2", "C1", "C2", "D1", "D2"];
let a2 = ["A", "B", "C", "D"].map(item => {
  return item + 3;
});

let a3 = [...a1, ...a2].sort().map(item => {
  if (item.includes("3")) {
    return item.split("")[0];
  }
  return item;
});
/**
 * Think:
 */
