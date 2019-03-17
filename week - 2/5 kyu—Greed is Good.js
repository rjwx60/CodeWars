/**
 * Source:  
 * https://www.codewars.com/kata/greed-is-good
 * 
 * Author:  
 * JulianNicholls
 * 
 * Title:
 * Greed is a dice game played with five six-sided dice. 
 * Your mission, should you choose to accept it, is to score a throw according to these rules. 
 * You will always be given an array with five six-sided dice values.
 * Three 1's => 1000 points
 * Three 6's =>  600 points
 * Three 5's =>  500 points
 * Three 4's =>  400 points
 * Three 3's =>  300 points
 * Three 2's =>  200 points
 * One   1   =>  100 points
 * One   5   =>   50 point
 * 
 * A single die can only be counted once in each roll. 
 * For example, a "5" can only count as part of a triplet 
 * (contributing to the 500 points) or as a single 50 points, 
 * but not both in the same roll.
 * 
 * Example: 
 * Throw       Score
 * ---------   ------------------
 * 5 1 3 4 1   50 + 2 * 100 = 250
 * 1 1 1 3 1   1000 + 100 = 1100
 * 2 4 4 5 4   400 + 50 = 450
 * 
 * Translate:
 * 骰子游戏
 */


/** 
 * My solution - 756ms
 */
function score( dice ) {
  let result = 0, len;
  let diceStr = dice.sort((a,b) => a - b).join('');
  const hasThree = diceStr.match(/(\d)\1{2}/g);
  
  switch(hasThree && hasThree[0]){
    case '111':
      result += 1000;
      break;
    case '666':
      result += 600;
      break;
    case '555':
      result += 500;
      break;
    case '444':
      result += 400;
      break;
    case '333':
      result += 300;
      break;
    case '222':
      result += 200;
      break;
    default:
      break;
  }
  diceStr = diceStr.replace(/(\d)\1{2}/g,'');
  result += (diceStr.length - diceStr.replace(/[1]/g,'').length) * 100 + (diceStr.length - diceStr.replace(/[5]/g,'').length) * 50;
  return result;
}



/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/greed-is-good/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function score(dice) {
  var dc = [ 0, 0, 0, 0, 0, 0 ];
  var tdr = [ 1000, 200, 300, 400, 500, 600 ];
  var sdr = [ 100, 0, 0, 0, 50, 0 ];
  dice.forEach(function (x) { dc[ x - 1 ]++; });
  return dc.reduce(function (s, x, i) {
    return s + (x >= 3 ? tdr[ i ] : 0) + sdr[ i ] * (x % 3);
  }, 0);
}


function score(dice) {
  var six = 0, five = 0, four = 0, three = 0, too = 0, one = 0;
  var i = 0;
  while (i < 5) {
    if (dice[ i ] == 6) { six++; }
    if (dice[ i ] == 5) { five++; }
    if (dice[ i ] == 4) { four++; }
    if (dice[ i ] == 3) { three++; }
    if (dice[ i ] == 2) { too++; }
    if (dice[ i ] == 1) { one++; }
    i++;
  }
  var r = 0;
  if (one > 2) { r += 1000; one -= 3; }
  if (six > 2) { r += 600; }
  if (five > 2) { r += 500; five -= 3; }
  if (four > 2) { r += 400; }
  if (three > 2) { r += 300; }
  if (too > 2) { r += 200; }
  r += one * 100;
  r += five * 50;
  return r;
}

function score(dice) {
  let totalScore = 0;
  const tripleScore = [ 1000, 200, 300, 400, 500, 600 ];
  const singleScore = [ 100, 0, 0, 0, 50, 0 ];

  for (let i = 1; i <= 6; i++) {
    totalScore += Math.floor(dice.filter(x => x == i).length / 3) * tripleScore[ i - 1 ]
      + dice.filter(x => x == i).length % 3 * singleScore[ i - 1 ];
  }
  return totalScore;
}

function score(dice) {
  if (dice.length !== 5) return 0;

  let diceStr = dice.sort().join('');
  let score = 0;
  const rules = [
    { reg: /111/, score: 1000 },
    { reg: /666/, score: 600 },
    { reg: /555/, score: 500 },
    { reg: /444/, score: 400 },
    { reg: /333/, score: 300 },
    { reg: /222/, score: 200 },
    { reg: /1/, score: 100 },
    { reg: /5/, score: 50 },
  ];

  rules.forEach(rule => {
    while (rule.reg.test(diceStr)) {
      diceStr = diceStr.replace(rule.reg, '');
      score += rule.score;
    }
  });
  return score;
}

function score(dice) {
  var score = [ 0, 0, 0, 0, 0, 0 ];
  dice.forEach(function (die) {
    ++score[ die - 1 ];
  });
  return score.reduce(function (total, n, i) {
    switch (i + 1) {
      case 1:
        return total + (Math.floor(n / 3) * 1000) + ((n % 3) * 100);

      case 5:
        return total + (Math.floor(n / 3) * 500) + ((n % 3) * 50);

      default:
        return total + (Math.floor(n / 3) * (i + 1) * 100);
    }
  }, 0);
}

function score(dice) {
  var v = {
    111: 1000,
    222: 200,
    333: 300,
    444: 400,
    555: 500,
    666: 600,
    1: 100,
    5: 50
  };

  var s = dice.sort().join('').match(/(([1-6])\2\2)|(1|5)/g) || [];
  return s.reduce(function (a, e) {
    return a + v[ e ];
  }, 0);
}

/**
 * Think:
 */
