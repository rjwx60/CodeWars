/**
 * Source:  
 * https://www.codewars.com/kata/create-phone-number
 * 
 * Author:  
 * xDranik
 * 
 * Title:
 * Write a function that accepts an array of 10 integers (between 0 and 9), 
 * that returns a string of those numbers in the form of a phone number.
 * 
 * Example: 
 * createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890"
 * 
 * Translate:
 */


/** 
 * My solution - ms
 */
function createPhoneNumber(numbers){
  numbers.splice(0,0,'(');
  numbers.splice(4,0,') ');
  numbers.splice(8,0,'-');
  return numbers.join('');
}


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/create-phone-number/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function createPhoneNumber(numbers){
  return numbers.join('').replace(/(...)(...)(.*)/, '($1) $2-$3');
}


function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  for(var i = 0; i < numbers.length; i++){
    format = format.replace('x', numbers[i]);
  }
  return format;
}

function createPhoneNumber(numbers){
  return numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/,'($1) $2-$3');
}

function createPhoneNumber(numbers){
  return numbers.reduce((p,c) => p.replace('x',c), "(xxx) xxx-xxxx");
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]), "(123) 456-7890");
 
/**
 * Think:
 */


