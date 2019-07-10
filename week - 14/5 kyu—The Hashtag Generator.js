/**
 * Source:  
 * https://www.codewars.com/kata/the-hashtag-generator
 * 
 * Author:  
 * AKJ.IO
 * 
 * Title:
 * The marketing team is spending way too much time typing in hashtags.
 * Let's help them with our own Hashtag Generator!
 * 
 * Here's the deal:
 * 
 * It must start with a hashtag (#).
 * All words must have their first letter capitalized.
 * If the final result is longer than 140 chars it must return false.
 * If the input or the result is an empty string it must return false.
 * 
 * Example: 
 * " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
 * "    Hello     World   "                  =>  "#HelloWorld"
 * ""                                        =>  false
 * 
 * Translate:
 */


/** 
 * My solution - ms
 */
function generateHashtag (str) {
  var str = str.replace(/\s+/g, ' ');
  if (!str.length || str.length >= 140) {
    return false;
  }
  return !!str.trim() && str.replace(/^(.*)/g, '#$1').replace(/[\s|^#](.{1})/g, (cv) => `${cv}`.toUpperCase().trim())
}

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
function generateHashtag (str) {
  if(!str || str.length < 1) return false;
  
  var r = '#' + str.split(' ').map(function(el) {
    return el.charAt(0).toUpperCase() + el.slice(1).toLowerCase();
  }).join('');
  return r.length > 140?false:r;
}


function generateHashtag (str) { 
  var s = "#" + str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()}).split(" ").join("");
  if(str && s.length <= 140){
    return s;
  } return false; 
}



function generateHashtag(str) {
  var hashed = '#' + str.split(' ').map(function(v) {return v.charAt(0).toUpperCase() + v.slice(1);}).join('');
  return hashed.length > 140 || str == "" ? false : hashed;
}


console.log(generateHashtag(""), false, "Expected an empty string to return false")
console.log(generateHashtag(" ".repeat(200)), false, "Still an empty string")
console.log(generateHashtag("Do We have A Hashtag"), "#DoWeHaveAHashtag", "Expected a Hashtag (#) at the beginning.")
console.log(generateHashtag("Codewars"), "#Codewars", "Should handle a single word.")
console.log(generateHashtag("Codewars Is Nice"), "#CodewarsIsNice", "Should remove spaces.")
console.log(generateHashtag("Codewars is nice"), "#CodewarsIsNice", "Should capitalize first letters of words.")
console.log(generateHashtag("code" + " ".repeat(140) + "wars"), "#CodeWars")
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat"), false, "Should return false if the final word is longer than 140 chars.")
console.log(generateHashtag("a".repeat(139)), "#A" + "a".repeat(138), "Should work")
console.log(generateHashtag("a".repeat(140)), false, "Too long")
 
/**
 * Think:
 */


