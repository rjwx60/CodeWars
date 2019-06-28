/**
 * Source:
 * https://www.codewars.com/kata/valid-braces
 *
 * Author:
 * xDranik
 *
 * Title:
 * Write a function that takes a string of braces,
 * and determines if the order of the braces is valid.
 * It should return true if the string is valid, and false if it's invalid.
 *
 * Example:
 * "(){}[]"   =>  True
 * "([{}])"   =>  True
 * "(}"       =>  False
 * "[(])"     =>  False
 * "[({})](]" =>  False
 *
 * Translate:
 */


/**
 * My solution - ms
 */
function validBraces(braces) {
  let i = 5;
  while (i) {
    i--;
    braces = braces
      .replace(/\[\]/g, "")
      .replace(/\(\)/g, "")
      .replace(/\{\}/g, "");
  }
  return braces ? false : true;
}


/**
 * Other solution:
 * Source: https://www.codewars.com/kata/valid-braces/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function validBraces(braces) {
  while (/\(\)|\[\]|\{\}/g.test(braces)) {
    braces = braces.replace(/\(\)|\[\]|\{\}/g, "");
  }
  return !braces.length;
}

function validBraces(braces) {
  var matches = { "(": ")", "{": "}", "[": "]" };
  var stack = [];
  var currentChar;

  for (var i = 0; i < braces.length; i++) {
    currentChar = braces[i];

    if (matches[currentChar]) {
      // opening braces
      stack.push(currentChar);
    } else {
      // closing braces
      if (currentChar !== matches[stack.pop()]) {
        return false;
      }
    }
  }
  return stack.length === 0; // any unclosed braces left?
}

function validBraces(braces) {
  while (
    braces.indexOf("{}") != -1 ||
    braces.indexOf("()") != -1 ||
    braces.indexOf("[]") != -1
  ) {
    braces = braces
      .replace("{}", "")
      .replace("()", "")
      .replace("[]", "");
  }
  return braces.length == 0;
}

function validBraces(braces) {
  for (var i = 0, depth = []; i < braces.length; i++) {
    switch (braces[i]) {
      case "(":
      case "[":
      case "{":
        depth.push(braces[i]);
        break;
      case ")":
        if (depth.pop() != "(") return false;
        break;
      case "]":
        if (depth.pop() != "[") return false;
        break;
      case "}":
        if (depth.pop() != "{") return false;
        break;
    }
  }
  return depth.length == 0;
}

console.log(validBraces("()"), true);
console.log(validBraces("[]"), true);
console.log(validBraces("{}"), true);
console.log(validBraces("[(])"), false);
console.log(validBraces("([{}])"), true);

console.log(validBraces("(){}[]"), true);
console.log(validBraces("([{}])"), true);
console.log(validBraces("({})[({})]"), true);
console.log(validBraces("(({{[[]]}}))"), true);
console.log(validBraces("{}({})[]"), true);
console.log(validBraces("())({}}{()][]["), false);

/**
 * Think:
 */
