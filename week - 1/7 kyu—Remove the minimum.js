/**
 * Source:  
 * https://www.codewars.com/kata/remove-the-minimum
 * 
 * Author:  
 * bkaes
 * 
 * Title:
 * The museum of incredible dull things
 * The museum of incredible dull things wants to get rid of some exhibitions. 
 * Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. 
 * She gives them a rating, and then removes the one with the lowest rating.
 * However, just as she finished rating all exhibitions, she's off to an important fair, 
 * so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.
 * 
 * Task:
 * Given an array of integers, remove the smallest value. 
 * Do not mutate the original array/list. 
 * If there are multiple elements with the same value, remove the one with a lower index. 
 * If you get an empty array/list, return an empty array/list.
 * Don't change the order of the elements that are left.
 * 
 * Example: 
 * removeSmallest([1,2,3,4,5]) = [2,3,4,5]
 * removeSmallest([5,3,2,1,4]) = [5,3,2,4]
 * removeSmallest([2,2,1,2,1]) = [2,2,2,1]
 * 
 * Translate:
 * 不更改原数组、不变动原数组元素顺序，删除最小值，若有多个最小值则删除索引最低的那个，并返回此数组
 */


/** 
 * My solution - 839ms
 */
function removeSmallest(numbers) {
  var numbers = numbers.concat();
  if(numbers.length){
    const index = numbers.findIndex(cv => cv === Math.min.apply(null, numbers));
    numbers.splice(index, 1)
  };
  return numbers;
}


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/remove-the-minimum/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function removeSmallest(numbers) {
  let indexOfMin = numbers.indexOf(Math.min(...numbers));
  return [...numbers.slice(0, indexOfMin), ...numbers.slice(indexOfMin + 1)];
}

function removeSmallest(numbers) {
  const min = Math.min.apply(this, numbers);
  return numbers.filter((num, idx, arr) => idx !== arr.indexOf(min));
}

const removeSmallest = numbers => numbers.filter((n,i) => i !== numbers.indexOf(Math.min(...numbers)));


/**
 * Think:
 * api 熟练度非常肥肠重要，让自己成为编译器吧！
 */