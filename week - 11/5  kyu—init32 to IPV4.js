/**
 * Source:
 * https://www.codewars.com/kata/int32-to-IPv4
 *
 * Author:
 * sahglie
 *
 * Title:
 *
 * Example:
 * 1st octet 128 has the binary representation: 10000000
 * 2nd octet 32 has the binary representation: 00100000
 * 3rd octet 10 has the binary representation: 00001010
 * 4th octet 1 has the binary representation: 00000001
 * So 128.32.10.1 == 10000000.00100000.00001010.00000001
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function int32ToIp(int32) {
  return ("0".repeat(32) + int32.toString(2))
    .slice(-32)
    .replace(/\d(?=(?:\d{8})+\b)/g, "$&,")
    .split(",")
    .reduce((ac, cv) => {
      ac += parseInt(cv, 2) + ".";
      return ac;
    }, "")
    .slice(0, -1);
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/int32-to-IPv4/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function int32ToIp(int32) {
  return (
    ((int32 >> 24) & 0xff) +
    "." +
    ((int32 >> 16) & 0xff) +
    "." +
    ((int32 >> 8) & 0xff) +
    "." +
    (int32 & 0xff)
  );
}

function int32ToIp(int32) {
  return (
    (int32 >>> 24) +
    "." +
    ((int32 << 8) >>> 24) +
    "." +
    ((int32 << 16) >>> 24) +
    "." +
    ((int32 << 24) >>> 24)
  );
}

function int32ToIp(int32) {
  var bin = int32.toString(2);
  bin = Array(33 - bin.length).join("0") + bin;
  return [0, 0, 0, 0]
    .map(function(v, i) {
      return parseInt(bin.slice(i * 8, i * 8 + 8), 2);
    })
    .join(".");
}

const int32ToIp = int32 =>
  [24, 16, 8, 0].map(e => (int32 >> e) & 255).join(".");

console.log(
  int32ToIp(2154959208),
  "128.114.17.104",
  "wrong ip for interger: 2154959208"
);
console.log(
  int32ToIp(2149583361),
  "128.32.10.1",
  "wrong ip for integer: 2149583361"
);
console.log(int32ToIp(0), "0.0.0.0", "wrong ip for integer: 0");


/**
 * Think:
 */
