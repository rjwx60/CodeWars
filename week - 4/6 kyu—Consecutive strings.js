/**
 * Source:  
 * https://www.codewars.com/kata/consecutive-strings
 * 
 * Author:  
 * g964
 * 
 * Title:
 * given an array strarr of strings and an integer k. 
 * Your task is to return the first longest string consisting of k consecutive strings taken in the array
 * n being the length of the string array, if n = 0 or k > n or k <= 0 return "".
 * 
 * Example: 
 * longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"
 * 
 * Translate:
 * 返回数组中第一个最长的字符串，并注意根据传入参数 k 来决定返回相邻组合字符串的个数
 */


/** 
 * My solution - ms
 */


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function longestConsec(strarr, k) {
  var longest = "";
  for (var i = 0; k > 0 && i <= strarr.length - k; i++) {
    var tempArray = strarr.slice(i, i + k);
    var tempStr = tempArray.join("");
    if (tempStr.length > longest.length) {
      longest = tempStr;
    }
  }
  return longest;
}

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return '';
  }

  return strarr.reduce((long, item, i) => {
    const currString = strarr.slice(i, i + k).join('');
    return (currString.length > long.length)
      ? currString
      : long;
  }, '');
}

function longestConsec(strarr, k) {
  if (strarr.length == 0 || k > strarr.length || k < 1) return "";
  let lens = strarr.map((_, i, arr) => arr.slice(i, i + k).join('').length),
    i = lens.indexOf(Math.max(...lens));
  return strarr.slice(i, i + k).join('')
}

function longestConsec(strarr, k) {
  if (k <= 0 || k > strarr.length) {
    return "";
  }
  return strarr
    .map((value, index) => (
      strarr.slice(index, index + k).join('')
    ))
    .reduce((longest, current) => current.length > longest.length ? current : longest)
}

function longestConsec(a, k) {
  return (a.length == 0 || k > a.length || k < 1) ? '' : a.reduce(function (s, c, i) {
    return i + k > a.length || s.length >= a.slice(i, i + k).join('').length ? s : a.slice(i, i + k).join('');
  }, '');
}

/**
 * Think:
 */


