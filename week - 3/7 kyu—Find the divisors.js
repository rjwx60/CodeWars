/**
 * Source:  
 * https://www.codewars.com/kata/find-the-divisors
 * 
 * Author:  
 * kwy95
 * 
 * Title:
 * Create a function named divisors/Divisors that takes an integer n > 1 
 * and returns an array with all of the integer's divisors(except 
 * for 1 and the number itself), from smallest to largest. 
 * If the number is prime return the string '(integer) is prime' (null in C#) 
 * (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
 * 
 * Example: 
 * divisors(12); // should return [2,3,4,6]
 * divisors(25); // should return [5]
 * divisors(13); // should return "13 is prime"
 * 
 * Translate:
 * 返回除 1 和 自身以外的素数
 */


/** 
 * My solution - 767ms
 */
function divisors(integer) {
  const result = [];
  for (let i = 2; i < integer; i++) {
    if (!(integer % i) && i != integer) {
      result.push(i);
    }
  }
  return result.length ? result : `${integer} is prime`
};


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/find-the-divisors/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function divisors(integer) {
  var res = []
  for (var i = 2; i <= Math.floor(integer / 2); ++i) if (integer % i == 0) res.push(i);
  return res.length ? res : integer + ' is prime'
};

function divisors(integer) {
  var divisors = [ ...Array(integer).keys() ].slice(2, integer).filter(div => integer % div == 0);
  return divisors.length > 0 ? divisors : integer + ' is prime';
};

function divisors(integer) {
  let divisors = Array(integer - 2).fill('').map((v, i) => i + 2).filter(v => integer % v === 0);
  return divisors.length === 0 ? (integer + " is prime") : divisors;
};

/**
 * Think:
 */


