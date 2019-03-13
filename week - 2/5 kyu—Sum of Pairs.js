/**
 * Source:  
 * https://www.codewars.com/kata/sum-of-pairs
 * 
 * Author:  
 * AlejandorLazaro
 * 
 * Title:
 * Sum of Pairs
 * Given a list of integers and a single sum value, 
 * return the first two values (parse from the left please) in order of appearance that add up to form the sum.
 * 
 * Example: 
 * sum_pairs([11, 3, 7, 5],         10)
 * #              ^--^      3 + 7 = 10
 * == [3, 7]
 * 
 * sum_pairs([4, 3, 2, 3, 4],         6)
 * #          ^-----^         4 + 2 = 6, indices: 0, 2 *
 * #             ^-----^      3 + 3 = 6, indices: 1, 3
 * #                ^-----^   2 + 4 = 6, indices: 2, 4
 * #  * entire pair is earlier, and therefore is the correct answer
 * == [4, 2]
 * 
 * sum_pairs([0, 0, -2, 3], 2)
 * #  there are no pairs of values that can be added to produce 2.
 * == None/nil/undefined (Based on the language)
 * 
 * sum_pairs([10, 5, 2, 3, 7, 5],         10)
 * #              ^-----------^   5 + 5 = 10, indices: 1, 5
 * #                    ^--^      3 + 7 = 10, indices: 3, 4 *
 * #  * entire pair is earlier, and therefore is the correct answer
 * == [3, 7]
 * 
 * Negative numbers and duplicate numbers can and will appear.
 * 
 * NOTE: 
 * There will also be lists tested of lengths upwards of 10,000,000 elements. 
 * Be sure your code doesn't time out.
 * 
 * Translate:
 * 翻译略
 */


/** 
 * My solution - over 1200ms failed
 */

var sum_pairs = function (ints, s) {
  const result = [];
  ints.forEach((cv, index, arr) => {
    let tarIndex = arr.indexOf(s - cv, 0);
    let posCache = [];
    while (~tarIndex) {
      posCache.push(tarIndex);
      tarIndex = arr.indexOf(s - cv, tarIndex + 1);
    }

    posCache = posCache.filter(cv => cv !== index);
    posCache.length && result.push({ a: index, b: Math.min(...posCache) });
  })

  let target = result.length ? result.sort((a, b) => Math.abs(a.b - a.a) - Math.abs(b.b - b.a))[ 0 ] : null;
  return target ? [ ints[ target.a ], ints[ target.b ] ] : undefined;
}


var sum_pairs = function (ints, s) {
  const result = [];
  for (let i = 0; i < ints.length - 1; i++) {
    let tarIndex = ints.indexOf(s - ints[ i ], 0), posCache = [];
    while (~tarIndex) {
      posCache.push(tarIndex);
      tarIndex = ints.indexOf(s - ints[ i ], tarIndex + 1);
    }
    posCache = posCache.filter(cv => cv !== i);
    posCache.length && result.push({ a: i, b: Math.min(...posCache) });
  }

  let target = result.length ? result.sort((a, b) => Math.abs(a.b - a.a) - Math.abs(b.b - b.a))[ 0 ] : null;

  return target ? [ ints[ target.a ], ints[ target.b ] ] : undefined;
}


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/sum-of-pairs/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

var sum_pairs = function (ints, s) {
  var set = new Set();
  for (var i = 0; i < ints.length; i++) {
    if (set.has(s - ints[ i ])) {
      return [ s - ints[ i ], ints[ i ] ];
    }
    set.add(ints[ i ]);
  }
  return undefined;
}


var sum_pairs = function (ints, s) {
  var seen = {}
  for (var i = 0; i < ints.length; ++i) {
    if (seen[ s - ints[ i ] ]) return [ s - ints[ i ], ints[ i ] ];
    seen[ ints[ i ] ] = true
  }
}

function sum_pairs(ints, s) {
  let seen = new Set();
  for (let i of ints) {
    if (seen.has(s - i)) return [ s - i, i ];
    seen.add(i);
  }
}


/**
 * Think:
 */



// var l1;

// l1 = [ 1, 4, 8, 7, 3, 15 ];
// console.log(sum_pairs(l1, 8))
// //  [1, 7]

// l1 = [ 1, -2, 3, 0, -6, 1 ];
// console.log(sum_pairs(l1, -6))
// //  [0, -6]

// l1 = [ 20, -13, 40 ];
// console.log(sum_pairs(l1, -7))
// // undefined

// l1 = [ 1, 2, 3, 4, 1, 0 ];
// console.log(sum_pairs(l1, 2))
// //  [1, 1]

// l1 = [ 10, 5, 2, 3, 7, 5 ];
// console.log(sum_pairs(l1, 10))
// //  [3, 7]

// l1 = [ 4, -2, 3, 3, 4 ];
// console.log(sum_pairs(l1, 8))
// //  [4, 4]

// l1 = [ 0, 2, 0 ];
// console.log(sum_pairs(l1, 0))
// //  [0, 0]

// l1 = [ 5, 9, 13, -3 ];
// console.log(sum_pairs(l1, 10))
// //  [13, -3]


