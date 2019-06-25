/**
 * Source:
 * https://www.codewars.com/kata/pete-the-baker
 *
 * Author:
 * BattleRattle
 *
 * Title:
 * Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object)
 * and returns the maximum number of cakes Pete can bake (integer).
 * For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).
 * Ingredients that are not present in the objects, can be considered as 0.
 *
 * Example:
 * // must return 2
 * cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200});
 * // must return 0
 * cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000});
 *
 * Translate:
 */

/**
 * My solution - ms
 */
function cakes(recipe, available) {
  const result = [];
  for (key in recipe) {
    if (available[key] !== undefined) {
      result.push({
        value: parseInt(available[key] / recipe[key]),
        key: key
      });
    } else {
      return 0;
    }
  }
  return result.sort((a, b) => a.value - b.value)[0]["value"];
}

/**
 * Other solution:
 * Source: https://www.codewars.com/kata/pete-the-baker/solutions
 *
 * Copyright belongs to the original author.
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(val, ingredient) {
    return Math.min(
      Math.floor(available[ingredient] / recipe[ingredient] || 0),
      val
    );
  }, Infinity);
}

function cakes(recipe, available) {
  var numCakes = [];
  for (var key in recipe) {
    if (recipe.hasOwnProperty(key)) {
      if (key in available) {
        numCakes.push(Math.floor(available[key] / recipe[key]));
      } else {
        return 0;
      }
    }
  }
  return Math.min.apply(null, numCakes);
}

const cakes = (needs, has) =>
  Math.min(
    ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
  );

function cakes(recipe, available) {
  return Object.keys(recipe).reduce(function(acc, ingredient) {
    return Math.min(
      acc,
      Math.floor(available[ingredient] / recipe[ingredient]) || 0
    );
  }, Number.MAX_VALUE);
}

var recipe, available;
recipe = { flour: 500, sugar: 200, eggs: 1 };
available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 };
console.log(cakes(recipe, available), 2);

recipe = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 };
available = { sugar: 500, flour: 2000, milk: 2000 };
console.log(cakes(recipe, available), 0);

/**
 * Think:
 */
