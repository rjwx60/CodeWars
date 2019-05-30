/**
 * Source:  
 * https://www.codewars.com/kata/kebabize
 * 
 * Author:  
 * user4316848
 * 
 * Title:
 * Modify the kebabize function so that it converts a camel case string into a kebab case.
 * 
 * Example: 
 * kebabize('camelsHaveThreeHumps') // camels-have-three-humps
 * kebabize('camelsHave3Humps') // camels-have-humps
 * 
 * Note:
 * the returned string should only contain lowercase letters
 * 
 * Translate:
 * 将驼峰返回烤肉形式
 */


/** 
 * My solution - ms
 */
function kebabize(str) {
  return Array.from(str).map(cv => {
    if(cv === cv.toUpperCase()){
      if('1234567890'.includes(cv)) return '';
      return `-${cv.toLowerCase()}`;
    }
    return cv;
  }).join('').replace(/^-/,'');
}

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/kebabize/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function kebabize(str) {
  return str.replace(/[^a-z]/ig, '').
         replace(/^[A-Z]/, c => c.toLowerCase()).
         replace(/[A-Z]/g, c => `-${c.toLowerCase()}`);
}

function kebabize(str) {
  var nonumber = str.replace(/\d/g, '').split(/(?=[A-Z])/g);
  return nonumber.join('-').toLowerCase();
}

function kebabize(str) {
  return str.replace(/([A-Z])/g, "-$1").replace(/[0-9]/g, '').toLowerCase().replace(/^-/, '');
}

console.log(kebabize('myCamelCasedString'), 'my-camel-cased-string');
console.log(kebabize('myCamelHas3Humps'), 'my-camel-has-humps');
console.log(kebabize('x7Wy'), 'my-camel-has-humps');
/**
 * Think:
 */


