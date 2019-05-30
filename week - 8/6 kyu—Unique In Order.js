/**
 * Source:  
 * https://www.codewars.com/kata/unique-in-order
 * 
 * Author:  
 * antrianis
 * 
 * Title:
 * Implement the function unique_in_order which takes as argument a sequence 
 * and returns a list of items without any elements with the same value next 
 * to each other and preserving the original order of elements.
 * 
 * Example: 
 * uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
 * uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
 * uniqueInOrder([1,2,2,3,3])       == [1,2,3]
 * 
 * Translate:
 */


/** 
 * My solution - ms
 */
// return [...new Set(Array.from(iterable).map(cv => cv.charCodeAt()))].map(cv => String.fromCharCode(cv));
const uniqueInOrder = (iterable) => {
  return Array.from(iterable).filter((cv, index, arr) => {
    return cv !== arr[index+1]
  })
}

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/unique-in-order/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function uniqueInOrder(it) {
  var result = [], last
  
  for (var i = 0; i < it.length; i++) {
    if (it[i] !== last) {
      result.push(last = it[i])
    }
  }
  return result
}

var uniqueInOrder = function (iterable) {
  return [].filter.call(iterable, (function (a, i) { return iterable[i - 1] !== a }));
}

var uniqueInOrder=function(iterable){
  return [...iterable].filter((a, i) => a !== iterable[i-1])
}

var uniqueInOrder=function(iterable){
  return Array.prototype.reduce.call(iterable, function(a,b) { if (a[a.length-1] !== b) a.push(b); return a; }, []);
}

const uniqueInOrder = d => [...d].filter((x, i, a) => x != a[i + 1])

console.log(uniqueInOrder('AAAABBBCCDAABBB'));
console.log(uniqueInOrder('ABBCcAD'));
console.log(uniqueInOrder([1,2,2,3,3]));
 
/**
 * Think:
 */


