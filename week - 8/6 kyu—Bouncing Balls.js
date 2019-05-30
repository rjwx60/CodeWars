/**
 * Source:  
 * https://www.codewars.com/kata/bouncing-balls
 * 
 * Author:  
 * g964
 * 
 * Title:
 * A child is playing with a ball on the nth floor of a tall building. The height of this floor, h, is known.
 * He drops the ball out of the window. The ball bounces (for example), to two-thirds of its height (a bounce of 0.66).
 * His mother looks out of a window 1.5 meters from the ground.
 * How many times will the mother see the ball pass in front of her window (including when it's falling and bouncing?
 * 
 * Note:
 * Float parameter "h" in meters must be greater than 0
 * Float parameter "bounce" must be greater than 0 and less than 1
 * Float parameter "window" must be less than h.
 * If all three conditions above are fulfilled, return a positive integer, otherwise return -1.
 * 
 * The ball can only be seen if the height of the rebounding ball is stricty greater than the window parameter.
 * 
 * Example: 
 * 
 * Translate:
 * 高度h扔球, 反弹系数bounce, 观察高度windwow;
 */


/** 
 * My solution - ms
 */
function bouncingBall(h,  bounce,  window) {
  // 先决条件
  if ( h <= 0 || !(bounce > 0 && bounce < 1) || window >= h) return -1;

  let newH = h * bounce, result = 1;
  if (newH <= window) return 2;

  while( newH > window){
    result += 2;
    newH = newH * bounce;
  }
  return result;
}



/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/bouncing-balls/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function bouncingBall(h,  bounce,  window) {
  var rebounds = -1;
  if (bounce > 0 && bounce < 1) while (h > window) rebounds+=2, h *= bounce;
  return rebounds;
}

function bouncingBall(h, b, w) {
  if (h <= w || b >= 1) return -1;
  let r = Math.floor(Math.log(w/h)/Math.log(b)) * 2 + 1;
  if (Number.isNaN(r)) return -1;
  return r;
}

const bouncingBall=(h, b, w)=>(b>=1 || h<w || b<=0) ? -1 : Math.ceil(Math.log(w/h)/Math.log(b))*2-1;

const bouncingBall = (h, b, w) => (h <= 0 || b <= 0 || b >= 1 || w >= h) ? -1 : 2 + bouncingBall(h*b, b, w);

console.log(bouncingBall(3, 0.66, 1.5))
console.log(bouncingBall(3, 1, 1.5))
/**
 * Think:
 */


