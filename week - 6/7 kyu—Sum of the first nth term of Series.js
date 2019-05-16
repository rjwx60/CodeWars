/**
 * Source:  
 * https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series
 * 
 * Author:  
 * curious_db97
 * 
 * Title:
 * write a function which returns the sum of following series upto nth term(parameter).
 * Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...
 * 
 * Example: 
 * SeriesSum(1) => 1 = "1.00"
 * SeriesSum(2) => 1 + 1/4 = "1.25"
 * SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"
 * 
 * Note:
 * You need to round the answer to 2 decimal places and return it as String.
 * If the given value is 0 then it should return 0.00
 * You will only be given Natural Numbers as arguments.
 * 
 * Translate:
 * 写函数，返回系列之和到第n个项（参数）
 */


/** 
 * My solution - ms
 */
function SeriesSum(n) {
  var result = 1.00;
  if(n == 1 || !n) return n.toFixed(2)
  for(let i = 1; i < n; i++){
    result += parseFloat(1 / (4 + (i - 1) * 3))
  }
  return result.toFixed(2);
}

// SeriesSum(1) => 1 = "1.00"
// SeriesSum(2) => 1 + 1/4 = "1.25"
// SeriesSum(5) => 1 + 1/4 + 1/7 + 1/10 + 1/13 = "1.57"

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/sum-of-the-first-nth-term-of-series/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function SeriesSum(n) {
  for (var s = 0, i = 0; i < n; i++) {
    s += 1 / (1 + i * 3)
  }
  return s.toFixed(2)
}


function SeriesSum(n) {
  var sum = 0;
  for(var i = 0; i < n; i++) {
    sum += 1 / (3 * i + 1);
  }
  return sum.toFixed(2);
}


function SeriesSum(n, s = 0) {
  return n ? SeriesSum(n - 1, s + 1 / (3 * n - 2)) : s.toFixed(2)
}


function SeriesSum(n) {
  return Array(n).fill(0).map((e, i) => 3 * i + 1).reduce((s, e) => s + 1 / e, 0).toFixed(2);
}


function SeriesSum(n) {
  return [...Array(n)].reduce((s,_,i)=>s+1/(1+3*i),0).toFixed(2)
}
/**
 * Think:
 */


