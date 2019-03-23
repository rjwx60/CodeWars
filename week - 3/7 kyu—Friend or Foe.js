/**
 * Source:  
 * https://www.codewars.com/kata/friend-or-foe
 * 
 * Author:  
 * Aweson1
 * 
 * Title:
 * Make a program that filters a list of strings and returns a list 
 * with only your friends name in it.
 * If a name has exactly 4 letters in it, 
 * you can be sure that it has to be a friend of yours! 
 * Otherwise, you can be sure he's not...
 * 
 * Example: 
 * Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
 * 
 * Note: 
 * keep the original order of the names in the output.
 * 
 * Translate:
 */


/** 
 * My solution - ms
 */
function friend(friends) {
  return friends.filter(cv => cv.length === 4)
}


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */
friend = f => f.filter(e => e.length == 4);

/**
 * Think:
 */


