/**
 * Source:
 * https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/116
 *
 * Author:
 * Unknown
 *
 * Title:
 * Reverse the case of a string (uppercase to lowercase to uppercase)
 *
 * Example:
 * 'AbC' to 'aBc'
 *
 * Translate:
 */

/**
 * My solution - ms
 */

/**
 * Other solution:
 * Source: https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/116
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function swapString(str) {
  var arr = str.split("");
  var new_arr = arr.map(item => {
    return item === item.toUpperCase()
      ? item.toLowerCase()
      : item.toUpperCase();
  });
  return new_arr.join("");
}

function swapString(str) {
  var result = "";
  for (var i = 0; i < str.length; i++) {
    var c = str[i];
    result += c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase();
  }
  return result;
}

const swapString1 = str =>
  str.replace(/[a-zA-Z]/g, function(a) {
    return /[a-z]/.test(a) ? a.toUpperCase() : a.toLowerCase();
  });

const swapString2 = str =>
  str.replace(/(\w)/g, m =>
    m === m.toUpperCase() ? m.toLowerCase() : m.toUpperCase()
  );

  
function swapString() {
  // 生成 1千万长度 字符串 约 1.6s
  let str = getRandomStr();

  // 使用for循环耗时 约 1.3s
  let str2 = "";
  for (let i = 0, len = str.length; i < len; i++) {
    let num = str[i].charCodeAt(0);
    str2 += num >= 65 && num <= 90 ? String.fromCharCode(num + 32) : String.fromCharCode(num - 32);
  }

  // 使用正则替换用时 约 1.4s
  let str1 = str.replace(/./g, input => {
    let num = input.charCodeAt(0);
    return num >= 65 && num <= 90 ? String.fromCharCode(num + 32) : String.fromCharCode(num - 32);
  });

  // 使用toUppercase逐个转换耗时 约 4.4s
  let str3 = "";
  for (let i = 0, len = str.length; i < len; i++) {
    let sUp = str[i].toUpperCase();
    str3 += sUp === str[i] ? s.toLocaleLowerCase() : sUp;
  }

  function getRandomStr() {
    let str = "";
    let arr = [ "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    for (let i = 0; i < 10000000; i++) {
      let num = parseInt(Math.random() * 53);
      str += arr[num];
    }
    return str;
  }
}

/**
 * Think:
 */
