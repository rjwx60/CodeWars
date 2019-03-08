/**
 * Source:  
 * https://www.codewars.com/kata/number-of-trailing-zeros-of-n
 * 
 * Author:  
 * Iv.D
 * 
 * Title:
 * Write a program that will calculate the number of trailing zeros in a factorial of a given number.
 * N! = 1 * 2 * 3 * ... * N
 * Be careful 1000! has 2568 digits...
 * 
 * Hint: 
 * You're not meant to calculate the factorial. Find another way to find the number of zeros.
 * 
 * Example: 
 * zeros(6) = 1
 * # 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero
 * zeros(12) = 2
 * # 12! = 479001600 --> 2 trailing zeros
 * 
 * Translate:
 * 求出阶乘结果值尾数的零的个数
 */


/** 
 * My solution - no solution!!
 */


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function zeros (n) {
  var num = 0;
  while ( n > 4 ) {
    n = Math.floor(n/5);
    num += n;
  }
  return num;
}
 
/**
 * Think:
 * 1. wonderful task! 
 * https://segmentfault.com/a/1190000011727836
 * 
 */