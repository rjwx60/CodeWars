/**
 * Source:  
 * https://www.codewars.com/kata/drying-potatoes
 * 
 * Author:  
 * g964
 * 
 * Title:
 * All we eat is water and dry matter.
 * John bought potatoes: their weight is 100 kilograms. Potatoes contain water and dry matter.
 * The water content is 99 percent of the total weight. 
 * He thinks they are too wet and puts them in an oven - at low temperature - for them to lose some water.
 * At the output the water content is only 98%.
 * What is the total weight in kilograms (water content plus dry matter) coming out of the oven?
 * He finds 50 kilograms and he thinks he made a mistake: "So much weight lost for such a small change in water content!"
 * Can you help him?
 * 
 * potatoesshould return the final weight coming out of the oven w1 truncated as an int.
 * 
 * Example: 
 * potatoes(99, 100, 98) --> 50
 * 
 * Translate:
 */


/** 
 * My solution - 708ms
 */
function potatoes(p0, w0, p1) {
  // dry matter is unchanged
  const dryMatter = w0 * (1 - p0 * 0.01).toFixed(2);
  return Math.floor(dryMatter / (1 - p1 * 0.01).toFixed(2));
}


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function potatoes(p0, w0, p1) {
  return Math.floor(w0 * (100 - p0) / (100 - p1))
}

function potatoes(p0, w0, p1) {
  return ~~(w0 * (100.0 - p0) / (100.0 - p1))
}

let potatoes = (p0, w0, p1) => Math.floor(w0 * (100 - p0) / (100 - p1));

potatoes = (p0, w0, p1) => (p0 - 100) / (p1 - 100) * w0 | 0

function potatoes(p0, w0, p1) {
  // your code
  var dryPotatoes = w0 * (100 - p0) / 100;
  var final = dryPotatoes / ((100 - p1) / 100);
  return Math.trunc(final);
}

function potatoes(p0, w0, p1) {
  return Array.from(potatoes.caller.arguments).pop();
}
/**
 * Think:
 */


