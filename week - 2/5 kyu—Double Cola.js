/**
 * Source:  
 * https://www.codewars.com/kata/double-cola
 * 
 * Author:  
 * AlexIsHappy
 * 
 * Title:
 * Sheldon, Leonard, Penny, Rajesh and Howard are in the queue for a "Double Cola" drink vending machine; 
 * there are no other people in the queue. 
 * The first one in the queue (Sheldon) buys a can, drinks it and doubles! 
 * The resulting two Sheldons go to the end of the queue. 
 * Then the next in the queue (Leonard) buys a can, drinks it and gets to the end of the queue as two Leonards, and so on.
 * For example, Penny drinks the third can of cola and the queue will look like this:
 * Rajesh, Howard, Sheldon, Sheldon, Leonard, Leonard, Penny, Penny
 * Write a program that will return the name of the person who will drink the n-th cola.
 * 
 * Example: 
 * Input:  The input data consist of an array which contains at least 1 name, and single integer n.
 * 1  ≤  n  ≤  10000000000
 * Output:  Return the single line — the name of the person who drinks the n-th can of cola. The cans are numbered starting from 1.
 * whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 1) == "Sheldon"
 * whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 52) == "Penny"
 * whoIsNext(["Sheldon", "Leonard", "Penny", "Rajesh", "Howard"], 7230702951) == "Leonard"
 * 
 * Translate:
 */


/** 
 * My solution - > 1200 ms - inefficient algorithms problem
 */



/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/double-cola/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function whoIsNext(names, r) {
  var len = names.length;
  var sum = names.length;
  var n = 1;
  while (sum < r) {
    n *= 2;
    sum += len * n;
  }
  return names[ Math.ceil((r + len * n - sum) / n) - 1 ]
}


function whoIsNext(names, r) {
  var l = names.length;
  while (r >= l) { r -= l; l *= 2; }
  return names[ Math.ceil(names.length * r / l) - 1 ];
}

function whoIsNext(names, r) {
  var numOfGeeks = names.length;
  var loga = Math.log((r / numOfGeeks) + 1) / Math.log(2);
  var completeCycles = Math.floor(loga)
  var fullCycleColas = (Math.pow(2, completeCycles) - 1) * numOfGeeks;
  var currCycleSize = Math.pow(2, completeCycles) * numOfGeeks;
  var geekCode = Math.ceil((r - fullCycleColas) / currCycleSize * numOfGeeks);
  return names[ geekCode - 1 ]
}

function whoIsNext(names, n) {  
  var chunk = names.length;
  while(n > chunk) {
    n -= chunk;
    chunk *= 2;
  }
  return names[Math.ceil(n/(chunk/names.length))-1];
}

function whoIsNext(names, r) {
  var peopleInLine = names.length;
  var copiesOfEachPerson = 1;
  while (r > peopleInLine) {
    r -= peopleInLine;
    copiesOfEachPerson *= 2;
    peopleInLine *= 2;
  }
  return names[Math.floor((r - 1) / copiesOfEachPerson) % peopleInLine];
}

/**
 * Think:
 * 1. 以为是等比数列求值，结果数目越求越大，会遇到JS的计算问题
 * 2. 思考一天后搜索，发现通过规律算比会更好一些，感叹算法懂了，啥都不是问题，算法工程师
 * https://segmentfault.com/a/1190000011457401
 * https://stackoverflow.com/questions/36429032/double-cola-challenge-javascript-code-wrong
 */

