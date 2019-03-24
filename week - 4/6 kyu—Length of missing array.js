/**
 * Source:  
 * https://www.codewars.com/kata/length-of-missing-array
 * 
 * Author:  
 * SteffenVogel_79
 * 
 * Title:
 * You get an array of arrays.
 * If you sort the arrays by their length, you will see, 
 * that their length-values are consecutive. But one array is missing!
 * 
 * If the array of arrays is null/nil or empty, the method should return 0.
 * When an array in the array is null or empty, the method should return 0 too!
 * There will always be a missing element and its length will be always between the given arrays. 
 * 
 * Example: 
 * [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3
 * [[1, 2], [4, 5, 1, 1], [], [4, 5, 1], [5, 6, 7, 8, 9]] --> 0
 * 
 * Translate:
 * 返回数组里面的元素长度都缺少了的那个长度
 */


/** 
 * My solution - ms
 */
function getLengthOfMissingArray(arrayOfArrays) {
  if (arrayOfArrays && arrayOfArrays.length) {
    const itemsLenArr = arrayOfArrays.map(cv => cv && cv.length);
    const minValue = Math.min(...itemsLenArr);
    const maxValue = Math.max(...itemsLenArr);

    if (!minValue) return 0;

    for (let i = minValue; i < maxValue; i++) {
      if (!itemsLenArr.includes(i)) return i;
    }
  } else {
    return 0;
  }
}


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function getLengthOfMissingArray(arrayOfArrays) {
  const lengths = (arrayOfArrays || [])
    .map(a => a ? a.length : 0)
    .sort((a, b) => a - b)

  if (lengths.includes(0)) {
    return 0
  }

  for (let i = 0; i < lengths.length - 1; i++) {
    if (lengths[ i ] + 1 !== lengths[ i + 1 ]) {
      return lengths[ i ] + 1
    }
  }

  return 0
}



function getLengthOfMissingArray(arr) {
  return !arr || (ar = arr.map((x, i) => x ? x.length : 0).sort((a, b) => a - b)).indexOf(0) > -1
    ? 0 : ar.filter((x, i) => x != i + ar[ 0 ]).concat([ 1 ])[ 0 ] - 1
}

getLengthOfMissingArray = a => a ? (l = a.map(a => a ? a.length : 0), m = Math.min(...l) | 0, m ? l.reduce((x, n, i) => x ^ n - m ^ i + 1, 0) + m : 0) : 0

/**
 * Think:
 */



