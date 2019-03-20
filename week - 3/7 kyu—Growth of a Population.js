/**
 * Source:  
 * https://www.codewars.com/kata/growth-of-a-population
 * 
 * Author:  
 * g964
 * 
 * Title:
 * In a small town the population is p0 = 1000 at the beginning of a year. 
 * The population regularly increases by 2 percent per year and 
 * moreover 50 new inhabitants per year come to live in the town. 
 * How many years does the town need to see its population greater 
 * or equal to p = 1200 inhabitants?
 * 
 * Example: 
 * nb_year(1500, 5, 100, 5000) -> 15
 * nb_year(1500000, 2.5, 10000, 2000000) -> 10
 * 
 * Notes:
 * aug is an integer, percent a positive or null number, p0 and p are positive integers (> 0)
 * Don't forget to convert the percent parameter as a percentage in 
 * the body of your function: if the parameter percent is 2 you have 
 * to convert it to 0.02.
 * 
 * Translate:
 * 计算人口增长
 */


/** 
 * My solution - 753ms
 */
function nbYear(p0, percent, aug, p) {
  let costYear = 0;
  while (p0 < p) {
    p0 = p0 * (1 + +(percent / 100)) + aug;
    costYear += 1;
  };
  return costYear;
}


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/growth-of-a-population/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function nbYear(p0, percent, aug, p) {
  for (var y = 0; p0 < p; y++) p0 = p0 * (1 + percent / 100) + aug;
  return y;
}


function nbYear(p0, percent, aug, p) {
  if (p0 >= p) {
    return 0;
  } else {
    return 1 + nbYear(p0 * (1 + percent / 100) + aug, percent, aug, p);
  }
}

function nbYear(p0, percent, aug, p, years = 0) {
  return p0 < p ? nbYear(p0 + p0 * percent / 100 + aug, percent, aug, p, years + 1) : years;
}

/**
 * Think:
 */


