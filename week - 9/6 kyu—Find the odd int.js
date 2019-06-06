/**
 * Source:  
 * https://www.codewars.com/kata/find-the-odd-int
 * 
 * Author:  
 * rbuckley
 * 
 * Title:
 * Given an array, find the int that appears an odd number of times.
 * There will always be only one integer that appears an odd number of times.
 * 
 * Example: 
 * 
 * Translate:
 */


/** 
 * My solution - ms
 */
function findOdd(Arr) {
  const obj = Arr.reduce((ac, cv) => {
    ac[cv] = ac[cv] ? ac[cv]+=1 : 1;
    return ac;
  }, {});
  const arr = [];
  for(key in obj){
    arr.push({
      key: +key,
      value: obj[key]
    })
  };
  return arr.filter(cv => cv.value % 2 === 1)[0]['key'];
}

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/find-the-odd-int/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

function findOdd(A) {
  return A.reduce(function(c,v){return c^v;},0);
}

function findOdd(arr) {
  return arr.find((item, index) => arr.filter(el => el == item).length % 2)
}

function findOdd(A) {
  for(var i = 0; i < A.length; i++){  
    if((A.filter(function(item){return item == A[i]; })).length % 2 != 0){
      return A[i];
    }
  }
  return 0;
}

const findOdd = A => A.filter(x => A.filter(v => x === v).length % 2 === 1).reduce(a => a);

console.log(findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5]), 5);
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]), -1);
console.log(findOdd([20,1,1,2,2,3,3,5,5,4,20,4,5]), 5);
console.log(findOdd([10]), 10);
console.log(findOdd([1,1,1,1,1,1,10,1,1,1,1]), 10);
console.log(findOdd([5,4,3,2,1,5,4,3,2,10,10]), 1);
 
/**
 * Think:
 */


