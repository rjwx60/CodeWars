/**
 * Source:  
 * https://www.codewars.com/kata/playing-with-digits
 * 
 * Author:  
 * g694
 * 
 * Title:
 * Some numbers have funny properties. For example:
 * 89 --> 8¹ + 9² = 89 * 1
 * 695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2
 * 46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
 * 
 * Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p
 * 
 * We want to find a positive integer k, if it exists, such as the sum of the digits of n taken to the successive powers of p is equal to k * n.
 * 
 * In other words:
 * Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k
 * If it is the case we will return k, if not return -1.
 * 
 * Note: 
 * n and p will always be given as strictly positive integers.
 * 
 * Example: 
 * digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
 * digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
 * digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
 * digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
 * 
 * Translate:
 * 参数2为初始位指数，后累加，参数1拆分后的指数结果和，若能用参数1除尽则输出被除数，否则输出-1
 */


/** 
 * My solution - 751ms
 */
function digPow(n, p){
  const result = `${n}`.split('').reduce((ac,cv) => ac + Math.pow(cv, p++), 0);
  return result % n === 0 ? result / n : -1
}

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/playing-with-digits/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function digPow(n, p) {
  var x = String(n).split("").reduce((s, d, i) => s + Math.pow(d, p + i), 0)
  return x % n ? -1 : x / n
}

function digPow(n, p){
  var ans = (''+n).split('')
    .map(function(d,i){return Math.pow(+d,i+p) })
    .reduce(function(s,v){return s+v}) / n
  return ans%1 ? -1 : ans    
}

 
/**
 * Think:
 */