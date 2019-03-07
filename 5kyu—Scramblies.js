/**
 * Source:  
 * https://www.codewars.com/kata/scramblies
 * 
 * Author:  
 * joh_pot
 * 
 * Title:
 * Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.
 * 
 * Notes:
 * Only lower case letters will be used (a-z). 
 * No punctuation or digits will be included.
 * Performance needs to be considered
 * Input strings s1 and s2 are null terminated.
 * 
 * Example: 
 * scramble('rkqodlw', 'world') ==> True
 * scramble('cedewaraaossoqqyt', 'codewars') ==> True
 * scramble('katas', 'steak') ==> False
 * 
 * Translate:
 * 不包含标点符号、数字，只用小写字母的字符串，str1 的一部分可以重新排列成 str2，则返回 true；
 */


/** 
 * My solution - ms
 */
function scramble(str1, str2) {
  const strObj1 = str1.split('').reduce((ac,cv) => {
    if(!ac[cv]){
      ac[cv] = 1;
    }else{
      ac[cv] ++;
    }
    return ac;
  },{});
  const strObj2 = str2.split('').reduce((ac,cv) => {
    if(!ac[cv]){
      ac[cv] = 1;
    }else{
      ac[cv] ++;
    }
    return ac;
  },{});

  for(let key in strObj2){
    if(!(key in strObj1)){
      return false;
    }
    if(strObj1[key] < strObj2[key]){
      return false;
    }
  }
  return true
}


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/scramblies/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function scramble(str1, str2) {
  let occurences = str1.split("").reduce((arr, cur) => { arr[cur] ? arr[cur]++ : arr[cur] = 1; return arr; }, {});
  return str2.split("").every((character) => --occurences[character] >= 0);
}

function scramble(str1, str2) {
  var hashtab = [...new Array(256)].map(x => 0);
  str2.split('').forEach(ele => hashtab[ele.charCodeAt(0)]++);
  str1.split('').forEach(ele => hashtab[ele.charCodeAt(0)]--);
  hashtab = hashtab.filter (x=>x > 0);
  return hashtab.length == 0;
}

function scramble(str1, str2) {
  var count = Object.create(null);
  Array.prototype.forEach.call(str1, function(a) {
    count[a] = (count[a] || 0) + 1
  })
  return Array.prototype.every.call(str2, function(a) {
    return count[a]--;
  })
}
 
/**
 * Think:
 */