/**
 * Source:  
 * https://www.codewars.com/kata/are-they-the-same
 * 
 * Author:  
 * g964
 * 
 * Title:
 * Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) 
 * that checks whether the two arrays have the "same" elements, with the same multiplicities. 
 * "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.
 * 
 * Example: 
 * a = [121, 144, 19, 161, 19, 144, 19, 11] 
 * b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
 * 
 * 
 * Translate:
 */


/** 
 * My solution - ms
 */
function comp(array1, array2){
  if(!array1 || !array2 || !array1.length || !array2.length) return false;
  const result = array2.map(cv => Math.sqrt(cv)).sort((a, b) => a - b);
  return array1.sort((a, b) => a - b).join('') === result.join('')
}

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/are-they-the-same/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function comp(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}

function comp(a, b) {
  return !!a && !!b && a.map(x => x*x).sort().join() == b.sort().join();
}

var a1 = [121, 144, 19, 161, 19, 144, 19, 11];
var a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
console.log(comp(a1, a2), true);
 
/**
 * Think:
 */


