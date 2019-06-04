/**
 * Source:  
 * https://www.codewars.com/kata/delete-occurrences-of-an-element-if-it-occurs-more-than-n-times
 * 
 * Author:  
 * JustyFY
 * 
 * Title:
 * Given a list lst and a number N, create a new list that contains 
 * each number of lst at most N times without reordering. 
 * For example if N = 2, and the input is [1,2,3,1,2,1,2,3], 
 * you take [1,2,3,1,2], drop the next [1,2] since this would lead to 1 and 2 being in the result 3 times, 
 * and then take 3, which leads to [1,2,3,1,2,3].
 * 
 * Example: 
 * deleteNth ([1,1,1,1],2) // return [1,1]
 * deleteNth ([20,37,20,21],1) // return [20,37,21]
 * 
 * Translate:
 */


/** 
 * My solution - ms
 */
function deleteNth(arr,n){
  const caculateObj = {}, result = [];
  arr.forEach(cv => {
    if(!caculateObj[cv]){
      caculateObj[cv] = 1;
    }else{
      caculateObj[cv]++;
    }
    if(caculateObj[cv] <= n){
      result.push(cv);
    }
  })
  return result;
}


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/delete-occurrences-of-an-element-if-it-occurs-more-than-n-times/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}

function deleteNth(arr, x) {
  var count = {};
  return arr.filter(function(a) {
    count[a] = ~~count[a] + 1;
    return count[a] <= x;
  });
}

const deleteNth = (a, x) => {
  let m = {};
  return a.filter(v => (m[v] = m[v] + 1 || 1) <= x);
};

const deleteNth = (arr, x) =>
  arr.filter((e, i) => arr.slice(0, i).filter(f => f == e).length < x);


console.log(deleteNth([20,37,20,21], 1), [20,37,21])
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])

/**
 * Think:
 */


