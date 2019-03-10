/**
 * Source:  
 * https://www.codewars.com/kata/bit-counting
 * 
 * Author:  
 * xcthulhu
 * 
 * Title:
 * Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. 
 * You can guarantee that input is non-negative.
 * 
 * Example: 
 * The binary representation of 1234 is 10011010010, so the function should return 5 in this case
 * 
 * Translate:
 * 将整数转为二进制并返回其包含 "1" 的个数
 */

/** 
 * My solution - 770ms
 */
var countBits = function(n) {
  return (n).toString(2).split('').filter(cv => cv === '1').length;
};

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/bit-counting/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
var countBits = function(n) {
  return (n).toString(2).split('0').join('').length;
};

var countBits = function(n) {
  for(c=0;n;n>>=1)c+=n&1
  return c;
};

var countBits = function(n) {
  return n.toString(2).replace(/0/g,'').length;
};

var countBits = function(n) {
  return n !== 0 ? n.toString(2).match(/1/g).length:0;
};

/**
 * Think:
 * 基础，对API的熟练使用
 * 进阶，对位运算的熟悉
 */