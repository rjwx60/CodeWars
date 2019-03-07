/**
 * Source:  
 * https://www.codewars.com/kata/roman-numerals-decoder
 * 
 * Author:  
 * jhoffner
 * 
 * Title:
 * Create a function that takes a Roman numeral as its argument and returns its value as a numeric decimal integer. 
 * You don't need to validate the form of the Roman numeral.
 * Modern Roman numerals are written by expressing each decimal digit of the number to be encoded separately, 
 * starting with the leftmost digit and skipping any 0s. 
 * So 1990 is rendered "MCMXC" (1000 = M, 900 = CM, 90 = XC) and 2008 is rendered "MMVIII" (2000 = MM, 8 = VIII). 
 * The Roman numeral for 1666, "MDCLXVI", uses each letter in descending order.
 * 
 * Example: 
 * solution('XXI'); // should return 21
 * 
 * Translate:
 * 将罗马数字转为整数相加
 */


/** 
 * My solution - 1578msms
 */
function solution(roman){
  var romaObj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  return roman.split('').reduce((ac, cv, index, arr) => {
    if(romaObj[cv] < romaObj[arr[index+1]]){
      ac -= romaObj[cv];
    }else{
      ac += romaObj[cv];
    }
    return ac;
  }, 0)
}

// 1487ms
function solution(roman){
  var romaObj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };
  return roman.split('').reduce((ac, cv, index, arr) => {
    if(romaObj[cv] < romaObj[arr[index+1]]){
      ac -= romaObj[cv];
    }else{
      ac += romaObj[cv];
    }
    return ac;
  }, 0)
}



/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/roman-numerals-decoder/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function solution(roman) {
  var data = { M: 1000, D: 500, C: 100, L: 50, X: 10, V: 5, I: 1 };
  var numbers = roman.split('');
  var sum = 0, i;

  for (i = 0; i < numbers.length; i++) {
    if (data[ numbers[ i ] ] < data[ numbers[ i + 1 ] ]) {
      sum += data[ numbers[ i + 1 ] ] - data[ numbers[ i ] ];
      i++;
    }
    else {
      sum += data[ numbers[ i ] ];
    }
  }
  return sum;
}

function solution(roman) {
  var conversion = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
  return roman.match(/CM|CD|XC|XL|IX|IV|\w/g).reduce((accum, roman) => accum + conversion[ roman ], 0);
}
 
/**
 * Think:
 * 略
 */