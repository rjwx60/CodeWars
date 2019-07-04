/**
 * Source:
 * https://www.codewars.com/kata/product-of-consecutive-fib-numbers
 *
 * Author:
 * g964
 *
 * Title:
 * The Fibonacci numbers are the numbers in the following integer sequence (Fn):
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...
 *
 * ...
 *
 * Example:
 * productFib(714) # should return [21, 34, true],
 *              # since F(8) = 21, F(9) = 34 and 714 = 21 * 34
 * productFib(800) # should return [34, 55, false],
 *              # since F(8) = 21, F(9) = 34, F(10) = 55 and 21 * 34 < 800 < 34 * 55
 *
 * Translate:
 */

/**
 * My solution - ms
 */

// function productFib(prod){
// }

const cache = {};

function makeFib(n) {
  if (n === 0) {
    cache[0] = 0;
    return 0;
  } else if (n === 1) {
    cache[1] = 1;
    return 1;
  } else {
    if (cache[n - 1] && cache[n - 2]) {
      return cache[n - 1] + cache[n - 2];
    } else {
      cache[n] = makeFib(n - 1) + makeFib(n - 2);
      return makeFib(n - 1) + makeFib(n - 2);
    }
  }
}

makeFib(30);
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

function productFib(prod) {
  let result1 = 0,
    result2 = 0,
    resultArr = [];
  for (key in cache) {
    result1 = cache[key] * cache[`${+key + 1}`];
    result2 = cache[`${+key + 1}`] * cache[`${+key + 2}`];
    if (result1 === prod) {
      resultArr = [cache[key], cache[`${+key + 1}`], true];
    }
    if (result1 < prod && result2 > prod) {
      resultArr = [cache[`${+key + 1}`], cache[`${+key + 2}`], false];
    }
  }
  return resultArr;
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function productFib(prod) {
  var n = 0;
  var nPlus = 1;
  while (n * nPlus < prod) {
    nPlus = n + nPlus;
    n = nPlus - n;
  }
  return [n, nPlus, n * nPlus === prod];
}

function productFib(prod) {
  let [a, b] = [0, 1];
  while (a * b < prod) [a, b] = [b, a + b];
  return [a, b, a * b === prod];
}

function productFib(prod) {
  var a = 1;
  var b = 1;
  while (a * b < prod) {
    var next = a + b;
    a = b;
    b = next;
  }
  return [a, b, a * b === prod];
}

function productFib(prod) {
  let a = 0;
  let b = 1;
  for (let i = 0; i < prod; i++) {
    if (a * b > prod) return [a, b, false];
    if (a * b === prod) return [a, b, true];
    [a, b] = [b, a + b];
  }
}

// mathy way
function productFib(prod) {
  const r = (1 + Math.sqrt(5)) / 2;
  let fib1 = Math.round(Math.sqrt(prod / r)),
    fib2 = Math.round(fib1 * r);
  if (fib1 * fib2 === prod) return [fib1, fib2, true];
  for (
    [fib1, fib2] = [0, 1];
    fib1 * fib2 < prod;
    [fib1, fib2] = [fib2, fib1 + fib2]
  );
  return [fib1, fib2, false];
}

// x = fib(m-1), y = fib(m), n = prod;
// r = ( 1 + Math.sqrt(5) ) / 2; // r = golden ratio
// r = 1 + 1 / r, x * r = y; // properties of golden ratio and fib
// fib(m) * fib(m+1) = n;
// y * ( x + y ) = n;
// y * x + y**2 = n;
// y * y / r + y**2 = n;
// y**2 / r + y**2 = n;
// y**2 * ( 1 + 1 / r ) = n;
// y**2 * r = n;
// y**2 = n / r;
// y = Math.sqrt( n / r );

function productFib(prod) {
  fib = [0, 1];
  while (prod > fib[0] * fib[1]) {
    fib.push(fib[0] + fib[1]);
    fib.shift();
  }
  fib.push(prod == fib[0] * fib[1]);
  return fib;
}

function productFib(prod) {
  for (var [n1, n2] = [0, 1]; n1 * n2 < prod; [n1, n2] = [n2, n1 + n2]);
  return [n1, n2, n1 * n2 === prod];
}

console.log(productFib(4895), [55, 89, true]);
console.log(productFib(5895), [89, 144, false]);
console.log(productFib(74049690), [6765, 10946, true]);
console.log(productFib(84049690), [10946, 17711, false]);
console.log(productFib(193864606), [10946, 17711, true]);
console.log(productFib(447577), [610, 987, false]);
console.log(productFib(602070), [610, 987, true]);

/**
 * Think:
 * 66666666
 */
