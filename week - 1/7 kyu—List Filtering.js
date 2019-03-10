/**
 * Source:  
 * https://www.codewars.com/kata/list-filtering/javascript
 * 
 * Author:  
 * cmgerber
 * 
 * Title:
 * In this kata you will create a function that takes a list of 
 * non-negative integers and strings and returns a new list with the strings filtered out.
 * 
 * Example: 
 * filter_list([1,2,'a','b']) == [1,2]
 * filter_list([1,'a','b',0,15]) == [1,0,15]
 * filter_list([1,2,'aasf','1','123',123]) == [1,2,123]
 * 
 * Translate:
 * 获取非负整数和字符串的列表，过滤其中的字符串，并返回新列表
 */


/** 
 * My solution - 722ms
 */
function filter_list(l) {
  return l.filter(cv => typeof cv !== 'string');
}



/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/list-filtering/solutions/javascript
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function filter_list(l) {
  return l.filter(v => typeof v == "number")
}

function filter_list(l) {
  return l.filter(function(v) {return typeof v == 'number'})
}

/**
 * Think:
 * 略
 */