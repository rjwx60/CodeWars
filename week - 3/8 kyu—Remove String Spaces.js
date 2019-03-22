/**
 * Source:  
 * https://www.codewars.com/kata/remove-string-spaces
 * 
 * Author:  
 * A.Partridge
 * 
 * Title:
 * remove the spaces from the string, then return the resultant string.
 * 
 * Example: 
 * 
 * Translate:
 */


/** 
 * My solution - ms
 */
function noSpace(x) {
  return x.split(' ').join('');
}


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function noSpace(x) {
  return x.replace(/\s/g, '');
}

const noSpace = x => x.replace(/ /g, "");

function noSpace(x) {
  let arr = x.split(' ');
  return arr.reduce((a, b) => a + b);
}

/**
 * Think:
 */


