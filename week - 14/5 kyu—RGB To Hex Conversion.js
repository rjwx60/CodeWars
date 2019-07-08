/**
 * Source:
 * https://www.codewars.com/kata/513e08acc600c94f01000001
 *
 * Author:  jhoffner
 *
 * Title:
 * Complete the method so that passing in RGB decimal values will result in a hexadecimal representation being returned.
 * The valid decimal values for RGB are 0 - 255. Any (r,g,b) argument values that fall out of that range should be rounded to the closest valid value.
 *
 * Example:
 * rgb(255, 255, 255) // returns FFFFFF
 * rgb(255, 255, 300) // returns FFFFFF
 * rgb(0,0,0) // returns 000000
 * rgb(148, 0, 211) // returns 9400D3
 *
 * Translate:
 */

/**
 * My solution - ms
 */

function rgb(r, g, b) {
  const cacheArr = Array.from(arguments).concat();
  return cacheArr
    .map(cv =>
      cv >= 255
        ? "FF"
        : cv <= 0
        ? "00"
        : ("0" + cv.toString(16).toUpperCase()).substr(-2)
    )
    .join("");
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/rbg-to-hex-conversion/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function rgb(r, g, b) {
  return [r, g, b]
    .map(function(x) {
      return ("0" + Math.max(0, Math.min(255, x)).toString(16)).slice(-2);
    }).join("").toUpperCase();
}

var rgb = (r, g, b) => toHex(r) + toHex(g) + toHex(b);
function toHex(numb) {
  if (numb <= 0) return "00";
  if (numb > 255) return "FF";
  return numb.toString(16).toUpperCase();
}

function rgb(r, g, b) {
  r = Math.max(0, Math.min(255, r));
  g = Math.max(0, Math.min(255, g));
  b = Math.max(0, Math.min(255, b));
  let color = (r << 16) + (g << 8) + b;
  return ("00000" + color.toString(16).toUpperCase()).slice(-6);
}

let rgb = (r, g, b) =>
  [r, g, b].map(item =>
      item >= 255 ? "FF" : item <= 0 ? "00" : item.toString(16).toUpperCase()
  ).join("");

console.log(rgb(0, 0, 0), "000000");
console.log(rgb(0, 0, -20), "000000");
console.log(rgb(300, 255, 255), "FFFFFF");
console.log(rgb(173, 255, 47), "ADFF2F");

/**
 * Think:
 */
