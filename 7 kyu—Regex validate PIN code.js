/**
 * Source:  
 * https://www.codewars.com/kata/regex-validate-pin-code
 * 
 * Author:  
 * JMurphyWeb
 * 
 * Title:
 * ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
 * If the function is passed a valid PIN string, return true, else return false.
 * 
 * Example: 
 * validatePIN("1234") === true
 * validatePIN("12345") === false
 * validatePIN("a234") === false
 * 
 * Translate:
 * 传递字符串，字符串为数字，且数字个数为 4或6，根据匹配与否返回布尔值
 */


/** 
 * My solution  - 743ms
 */
function validatePIN (pin) {
  return /^((\d{4})|\d{6})$/.test(pin)
}



/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions/javascript
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}

function validatePIN (pin) {
  return  (pin.length == 4 || pin.length == 6) && parseInt(pin) == pin
}

const validatePIN = pin => /^(\d{4}$|\d{6}$)/.test(pin);

const validatePIN = pin => /^\d{4}$|^\d{6}$/.test(pin)

/**
 * Think:
 * 略
 */