/**
 * Source:  
 * https://www.codewars.com/kata/speedcode-number-2-array-madness
 * 
 * Author:  
 * donaldsebleung
 * 
 * Title:
 * Given two integer arrays a, b, both of length >= 1, 
 * create a program that returns true if the sum of the squares of 
 * each element in a is strictly greater than the sum of the cubes of each element in b.
 * 
 * Example: 
 * arrayMadness([4, 5, 6], [1, 2, 3]); // returns true since 4 ** 2 + 5 ** 2 + 6 ** 2 > 1 ** 3 + 2 ** 3 + 3 ** 3
 * 
 * Translate:
 */


/** 
 * My solution - ms
 */
function arrayMadness(a, b) {
  return a.reduce((ac, cv) => ac + Math.pow(cv, 2), 0) > b.reduce((ac, cv) => ac + Math.pow(cv, 3), 0)
}


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/speedcode-number-2-array-madness/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
const arrayMadness = (a, b) => a.reduce((acc, x) => acc + x**2, 0) > b.reduce((acc, x) => acc + x**3, 0) 


/**
 * Think:
 */


