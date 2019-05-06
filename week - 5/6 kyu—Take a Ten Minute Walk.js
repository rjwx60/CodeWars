/**
 * Source:
 * https://www.codewars.com/kata/take-a-ten-minute-walk
 *
 * Author:
 * JKphopic
 *
 * Title:
 * You live in the city of Cartesia where all roads are laid out in a perfect grid.
 * You arrived ten minutes too early to an appointment,
 * so you decided to take the opportunity to go for a short walk.
 *
 * The city provides its citizens with a Walk Generating App on their phones
 * -- everytime you press the button it sends you an array of one-letter
 * strings representing directions to walk (eg. ['n', 's', 'w', 'e']).
 * You always walk only a single block in a direction and you know it
 * takes you one minute to traverse one city block, so create a function that
 * will return true if the walk the app gives you will take you exactly ten minutes
 * (you don't want to be early or late!) and will, of course, return you to your
 * starting point. Return false otherwise.
 *
 * Note:
 * you will always receive a valid array containing a random assortment of
 * direction letters ('n', 's', 'e', or 'w' only).
 * It will never give you an empty array (that's not a walk,
 * that's standing still!).
 *
 * Example:
 *
 * Translate:
 * 构建序列，序列累积结果为圆点，n、s、w、e为方向
 */

/**
 * My solution - 766ms
 */
function isValidWalk(walk) {
  return walk.length <= 10 && walk.length >= 4
    ? walk
        .map(cv => {
          switch (cv) {
            case "n":
              cv = 1;
              break;
            case "s":
              cv = -1;
              break;
            case "w":
              cv = 2;
              break;
            case "e":
              cv = -2;
              break;
            default:
              cv = 0;
              break;
          }
          return cv;
        })
        .reduce((ac, cv) => ac + cv)
      ? false
      : true
    : false;
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/take-a-ten-minute-walk/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function isValidWalk(walk) {
  const north = walk.filter(item => {
    return item === "n";
  }).length;
  const south = walk.filter(item => {
    return item === "s";
  }).length;
  const east = walk.filter(item => {
    return item === "e";
  }).length;
  const west = walk.filter(item => {
    return item === "w";
  }).length;

  return walk.length === 10 && north === south && east === west;
}

function isValidWalk(walk) {
  return (
    walk.length == 10 &&
    !walk.reduce(function(w, step) {
      return w + { n: -1, s: 1, e: 99, w: -99 }[step];
    }, 0)
  );
}

function isValidWalk(walk) {
  var res = { n: 0, w: 0, s: 0, e: 0 };
  walk.forEach(c => res[c]++);
  return walk.length === 10 && res.n == res.s && res.e == res.w;
}
/**
 * Think:
 */
