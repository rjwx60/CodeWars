/**
 * Source:  
 * https://www.codewars.com/kata/exes-and-ohs
 * 
 * Author:  
 * joh_pot
 * 
 * Title:
 * Check to see if a string has the same amount of 'x's and 'o's. 
 * The method must return a boolean and be case insensitive. 
 * The string can contain any char.
 * 
 * Example: 
 * XO("ooxx") => true
 * XO("xooxx") => false
 * XO("ooxXm") => true
 * XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
 * XO("zzoo") => false
 * 
 * Translate:
 * 不区分大小写，判断字符串是否含有相同数量的 ‘x’ 和 ‘o’，返回布尔值。
 */


/** 
 * My solution - 726ms
 */
function XO(str) {
  const xTar = str.match(/x/gi);
  const oTar = str.match(/o/gi);
  return !str ? 
              true : 
              xTar && oTar ? 
                            xTar.length === oTar.length : 
                            false;
}

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/exes-and-ohs/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}

function XO(str) {
  var a = str.replace(/x/gi, ''),
      b = str.replace(/o/gi, '');
  return a.length === b.length;
}

function XO(str) {
  return str.toLowerCase().split('x').length === str.toLowerCase().split('o').length;
}

const XO = str => {
  str = str.toLowerCase().split('');
  return str.filter(x => x === 'x').length === str.filter(x => x === 'o').length;
}

/**
 * Think:
 * 第一种方法，match 的思维是找出目标项目；第二种的，是剔除目标，判断余下数目；两种思维体现
 */