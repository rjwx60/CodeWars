/**
 * Source:  
 * https://www.codewars.com/kata/dubstep
 * 
 * Author:  
 * AlexIsHappy
 * 
 * Title:
 * The input consists of a single non-empty string, consisting only of 
 * uppercase English letters, the string's length doesn't exceed 200 characters
 * 
 * Example: 
 * songDecoder("WUBWEWUBAREWUBWUBTHEWUBCHAMPIONSWUBMYWUBFRIENDWUB")
 * // =>  WE ARE THE CHAMPIONS MY FRIEND
 * 
 * Translate:
 * 将特定字符 "WUB" 过滤成为空格，但不能有多个空格和前后空格
 */


/** 
 * My solution - 800ms
 */
function songDecoder(song) {
  return song.replace(/WUB/g, ' ').trim().replace(/\s+/g, ' ');
}

/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

function songDecoder(song) {
  return song.replace(/(WUB)+/g, " ").trim()
}

function songDecoder(song) {
  return song.split('WUB').filter(Boolean).join(' ');
}

var songDecoder = (song) => song.split('WUB').filter(x => x !== '').join(' ');

/**
 * Think:
 */


