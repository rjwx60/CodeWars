/**
 * Source:  
 * https://www.codewars.com/kata/return-negative
 * 
 * Author:  
 * Deantwo
 * 
 * Title:
 * given a number and have to make it negative
 * 
 * Example: 
 * makeNegative(1); // return -1
 * makeNegative(-5); // return -5
 * makeNegative(0); // return 0
 * makeNegative(0.12); // return -0.12
 * 
 * Translate:
 */


/** 
 * My solution - ms
 */
function makeNegative(num) {
  return num < 0 ? num : -num;
}

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/return-negative/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function makeNegative(num) {
  return -Math.abs(num);
}

makeNegative = n => -Math.abs(n)

var makeNegative = n => ~(n >> 31 << 1) * n

/**
 * Think:
 */


