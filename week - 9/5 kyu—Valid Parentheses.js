/**
 * Source:  
 * https://www.codewars.com/kata/valid-parentheses
 * 
 * Author:  
 * xDranik
 * 
 * Title:
 * Write a function called that takes a string of parentheses, 
 * and determines if the order of the parentheses is valid. 
 * The function should return true if the string is valid, and false if it's invalid.
 * 
 * Example: 
 * "()"              =>  true
 * ")(()))"          =>  false
 * "("               =>  false
 * "(())((()())())"  =>  true
 * 
 * Translate:
 */


/** 
 * My solution - ms
 */
function validParentheses(parens){
  // 防止此种情况 )..(
  if(parens && (parens[0] === ')' || parens[parens.length -1 ] === '(')) return false;
  return Array.from(parens).map(cv => cv = cv === '(' ? 1 : -1).reduce((ac, cv) => {
    ac += cv;
    return ac;
  }, 0) ? false : true;
}

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/valid-parentheses/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function validParentheses(parens){
  var n = 0;
  for (var i = 0; i < parens.length; i++) {
    if (parens[i] == '(') n++;
    if (parens[i] == ')') n--;
    if (n < 0) return false;
  }
  return n == 0;
}


function validParentheses(parens){
  var re = /\(\)/;
  while (re.test(parens)) parens = parens.replace(re, "");
  return !parens;
}

function validParentheses(parens) {
  var cmp = 0;
  parens.split('').forEach(function(v) {
    cmp += v==='(' ? 1 : -1;
    cmp = Math.abs(cmp);
  });
  return cmp === 0;
}


function validParentheses(string){
  var tokenizer = /[()]/g, // ignores characters in between; parentheses are
      count = 0,           // pretty useless if they're not grouping *something*
      token;
  while(token = tokenizer.exec(string), token !== null){
     if(token == "(") {
        count++;
     } else if(token == ")") {
        count--;
        if(count < 0) {
           return false;
        }
     }
  }
  return count == 0;
}

console.log(validParentheses( "()" ), true);
console.log(validParentheses( "())" ), false);
console.log(validParentheses( "(())((()())())" ), true);
console.log(validParentheses( ")(()))" ), false);
console.log(validParentheses( "(" ), false);
console.log(validParentheses( "" ), false);
 
/**
 * Think:
 */


