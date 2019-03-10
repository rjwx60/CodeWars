/**
 * Source:  
 * https://www.codewars.com/kata/
 * 
 * Author:  
 * 
 * Title:
 * 
 * Example: 
 * 
 * Translate:
 * 按照权重有小到大排序，若权重相同则根据原数判断，权重计算通过位数相加得到
 * 如: 99 权重 18
 * 如: 111 权重 3
 */


/** 
 * My solution - ms
 */
function orderWeight(string) {
  const initArr = string.split(' ').map(cv => {
    return {
      value: cv,
      weight: cv.split('').reduce((ac, ccv) => +ac + +ccv, 0)
    }
  })
  return initArr.sort((a, b) => {
    if (a.weight < b.weight) {
      return -1;
    } else if (a.weight > b.weight) {
      return 1;
    } else {
      if (a.value < b.value) {
        return -1
      } else if (a.value > b.value) {
        return 1;
      } else {
        return 0;
      }
    }
  }).map(cv => cv.value).join(' ');
}



function orderWeight(string) {
  const initArr = string.split(' ').map(cv => {
    return {
      value: cv,
      weight: cv.split('').reduce((ac, ccv) => +ac + +ccv, 0)
    }
  })
  return initArr.sort((a, b) => {
    return a.weight < b.weight ? -1 :
      a.weight > b.weight ? 1 :
        a.value < b.value ? -1 :
          a.value > b.value ? 1 : 0
  }).map(cv => cv.value).join(' ');
}



/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function orderWeight(strng) {
  return strng
    .split(" ")
    .map(function (v) {
      return {
        val: v,
        key: v.split("").reduce(function (prev, curr) {
          return parseInt(prev) + parseInt(curr);
        }, 0)
      };
    })
    .sort(function (a, b) {
      return a.key == b.key
        ? a.val.localeCompare(b.val)
        : (a.key - b.key);
    })
    .map(function (v) {
      return v.val;
    })
    .join(" ");
}


function orderWeight(strng) {
  const sum = (str) => str.split('').reduce((sum, el) => (sum + (+el)), 0);
  function comp(a, b) {
    let sumA = sum(a);
    let sumB = sum(b);
    return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
  };
  return strng.split(' ').sort(comp).join(' ');
}

function orderWeight(str) {
  const sum = x => x.split('').reduce((res, cur) => (res + +cur), 0);
  return str.split(' ').sort((a, b) => {
    const diff = sum(a) - sum(b);
    return diff == 0 ? (a > b ? 1 : -1) : diff;
  }).join(' ');
}

function orderWeight(strng) {
  return strng.split(" ").sort(function f(a, b) {
    return eval(a.split("").join("+")) - eval(b.split("").join("+")) + ([ a, b ].sort()[ 1 ] == a ? 0.1 : -0.1);
  }).join(" ");
}

/**
 * Think:
 * 差一点！！
 */