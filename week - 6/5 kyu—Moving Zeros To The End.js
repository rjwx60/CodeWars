/**
 * Source:  
 * https://www.codewars.com/kata/moving-zeros-to-the-end
 * 
 * Author:  
 * xcthulhu
 * 
 * Title:
 * Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 * 
 * Example: 
 * moveZeros([false,1,0,1,2,0,1,3,"a"]) -> returns[false,1,1,2,1,3,"a",0,0]
 * 
 * Translate:
 */


/** 
 * My solution - ms
 */
const moveZeros = function (arr) {
  var cacheResult = [];
  arr.forEach(cv => {
    if(cv === 0){
      cacheResult.push(cv);
    }
  })
  return arr.filter(cv => cv !== 0).concat(...cacheResult);
}


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/moving-zeros-to-the-end/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */


var moveZeros = function (arr) {
  return arr.filter(function(x) {return x !== 0}).concat(arr.filter(function(x) {return x === 0;}));
}

let moveZeros = (arr) => arr.filter(i => i !== 0).concat(arr.filter(i => i === 0));

var moveZeros = function (arr) {
  var filtedList = arr.filter(function (num){return num !== 0;});
  var zeroList = arr.filter(function (num){return num === 0;});
  return filtedList.concat(zeroList);
}

var moveZeros = function (arr) {
  return arr
    .filter((val) => val !== 0)
    .concat(arr.filter((val) => val === 0));
}

var moveZeros = function (arr) {
  return [
    ...(arr.filter(n => n !== 0)),
    ...(arr.filter(n => n === 0))
  ];
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,1]));
console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]));
 
/**
 * Think:
 */


