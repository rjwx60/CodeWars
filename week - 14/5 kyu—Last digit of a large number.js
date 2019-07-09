/**
 * Source:  
 * https://www.codewars.com/kata/last-digit-of-a-large-number
 * 
 * Author:  
 * dburgoyne
 * 
 * Title:
 * Define a function that takes in two non-negative integers a and b and returns the last decimal digit of a^b. 
 * Note that a and b may be very large!
 * 
 * For example, the last decimal digit of 9^7 is 9, since 9^7 = 4782969. 
 * The last decimal digit of (2^200)^(2^300), which has over 10^92 decimal digits, is 6. Also, please take 0^0 to be 1.
 * You may assume that the input will always be valid.
 * 
 * Example: 
 * lastDigit("4", "1")            // returns 4
 * lastDigit("4", "2")            // returns 6
 * lastDigit("9", "7")            // returns 9    
 * lastDigit("10","10000000000")  // returns 0
 * 
 * Translate:
 */


/** 
 * My solution - ms
 */


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/last-digit-of-a-large-number/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

var lastDigit = function(str1, str2){  
  return +!+str2 || Math.pow(str1.slice(-1) % 10, str2.slice(-2) % 4 || 4) % 10
}


var lastDigit = function(str1, str2){
  return +str2 === 0 ? 1 : Math.pow(+str1.slice(-1), +str2.slice(-2) % 4 + 4) % 10
}


var lastDigit = function(str1, str2){
  if(str2==='0')return 1;
  var obj={
    '0':[0,0,0,0],
    '1':[1,1,1,1],
    '2':[6,2,4,8],
    '3':[1,3,9,7],
    '4':[6,4,6,4],
    '5':[5,5,5,5],
    '6':[6,6,6,6],
    '7':[1,7,9,3],
    '8':[6,8,4,2],
    '9':[1,9,1,9]
  }
  var num=str1[str1.length-1];
  var n=(str2.length>1)?((str2[str2.length-2]+str2[str2.length-1])*1)%4:str2*1%4;
  return obj[num][n]; // fix me
}


var lastDigit = function(str1, str2){ 
  if(str2 == 0){
      return 1;
  }
  var a = str1.charAt(str1.length - 1) - 0;
  var b = str2.slice(str2.length - 2) - 0;
  switch(a){
      case 0:
      case 1:
      case 5:
      case 6:
          return a;
      case 2:
          return [6,2,4,8][b % 4];
      case 3:
          return [1,3,9,7][b % 4];
      case 7:
          return [1,7,9,3][b % 4];
      case 8:
          return [6,8,4,2][b % 4];
      case 4:
          return [4,6][b % 2 == 0 ? 1 : 0];
      case 9:
          return [9,1][b % 2 == 0 ? 1 : 0];
  }
}


var lastDigit = function(str1, str2){

  // if exponent is 0, return 1
  
  if (parseInt(str2) === 0) return 1;
  
  // otherwise...
  // 0 always returns 0
  // 1 always returns 1
  // 2 rotates between 2, 4, 8, 6....
  // 3 rotates between 3, 9, 7, 1....
  // 4 rotates between 4, 6....
  // 5 always returns 5
  // 6 always returns 6
  // 7 rotates between 7, 9, 3, 1....
  // 8 rotates between 8, 4, 2, 6....
  // 9 rotates between 9, 1....
  
  // because we only need the final digit of str1 to determine the result, let's capture it
  var seed = parseInt(str1.slice(-1)) % 10;
  // at worst, the result of any ending digit rotates through four cases, we need two digits here becasue 111%4 === 11%4 != 1%4
  var exp = parseInt(str2.slice(-2)) % 4;
  if (exp === 0) exp = 4;  // if the exponent is a multiple of 4, we want to use '4', not '0' in our function.
  // so what we can do in shorthand is get the final digit of a number with an exponent of 1-4 and this is enough to predict any case.
  return Math.pow(seed, exp) % 10;
}

console.log(lastDigit("4", "1"), 4);
console.log(lastDigit("4", "2"), 6);
console.log(lastDigit("9", "7"), 9);
console.log(lastDigit("10","10000000000"), 0);
console.log(lastDigit("1606938044258990275541962092341162602522202993782792835301376","2037035976334486086268445688409378161051468393665936250636140449354381299763336706183397376"), 6);
console.log(lastDigit("3715290469715693021198967285016729344580685479654510946723", "68819615221552997273737174557165657483427362207517952651"), 7);
console.log(lastDigit("616001345614511620", "9125803596214827609377065237932467605888489445640767025912339432775067807742523026544686393545947750"), 0);
console.log(lastDigit("059876373838889778535977", "1163948909434745496211077696656"), 1);
console.log(lastDigit("3079746113538322210962", "57970498954118518386902279380634734432319"), 8);
console.log(lastDigit("71300286429905875492", "03545801532416171098803732123070288813835467847991428022673497748092683613021161978955564"), 6);
console.log(lastDigit("4543371280452715337171798512699139628886464651801877956964379973", "58953748621973231629132628740"), 1);
/**
 * Think:
 */


