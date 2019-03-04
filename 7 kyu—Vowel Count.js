/**
 * Source:  
 * https://www.codewars.com/kata/vowel-count
 * 
 * Author:  
 * jayeshcp
 * 
 * Title:
 * Return the number (count) of vowels in the given string.
 * We will consider a, e, i, o, and u as vowels for this Kata.
 * The input string will only consist of lower case letters and/or spaces.
 * 
 * Example: 
 * 
 * Translate:
 * 返回给定字符串中元音a、e、i、o、u 个数
 */

/** 
 * My solution - 775ms
 */

function getCount(str) {
  return str.split('').filter(cv => cv.match(/a|e|i|o|u/)).length
}

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/vowel-count/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function getCount(str) {
  return (str.match(/[aeiou]/ig)||[]).length;
}

function getCount(str) {
  return str.replace(/[^aeiou]/gi, '').length;
}

/**
 * Think:
 * 基础，match 传参的不同会有不同的返回值
 * 进阶，逆向思路，去掉目标值以外的
 */