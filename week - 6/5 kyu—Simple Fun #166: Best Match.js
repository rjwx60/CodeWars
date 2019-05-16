/**
 * Source:  
 * https://www.codewars.com/kata/simple-fun-#166-best-match
 * 
 * Author:  
 * myjinxin2015
 * 
 * Title:
 * "AL-AHLY" and "Zamalek" are the best teams in Egypt, but "AL-AHLY" always wins the matches between them. 
 * "Zamalek" managers want to know what is the best match they've played so far.
 * The best match is the match they lost with the minimum goal difference. 
 * If there is more than one match with the same difference, choose the one "Zamalek" scored more goals in.
 * Given the information about all matches they played, return the index of the best match (0-based). 
 * If more than one valid result, return the smallest index.

 * Example: 
 * For ALAHLYGoals = [6,4] and zamalekGoals = [1,2], the output should be 1.
 * Because 4 - 2 is less than 6 - 1
 * For ALAHLYGoals = [1,2,3,4,5] and zamalekGoals = [0,1,2,3,4], the output should be 4.
 * The goal difference of all matches are 1, but at 4th match "Zamalek" scored more goals in. So the result is 4.
 * 
 * Translate:
 * 球队A总能赢球队B，对比两个记录，输出B输的最小进球数差的索引，若每项此值均等，则输出B进球最多的索引
 */


/** 
 * My solution - ms
 */
function bestMatch(ALAHLYGoals, zamalekGoals) {
  var sameValNum = 0;
  const resultArr = [];
  
  ALAHLYGoals.forEach((cv, index) => {
    resultArr.push({
      index: index,
      value: cv - zamalekGoals[index],
      Aorigin: cv
    });
  })
  resultArr.forEach((cv, index, arr) => {
    if(cv.value == arr[0].value){
      sameValNum++
    }
  })

  if(sameValNum === ALAHLYGoals.length){
    // same - sort according key return index
    return resultArr.sort((a, b) => b.index - a.index)[0]['index']
  } else {
    // same value different AOriginValue, get the AOriginValue bigger one;
    // same AOriginValue different index, get the index smaller one;
    var minValue = resultArr.sort((a, b) => a.value - b.value)[0]['value'];
    var minArr = resultArr.filter(cv => {
      if(cv.value == minValue){
        return cv;
      }
    })
    return minArr.sort((a, b) => {
      if(b.Aorigin - a.Aorigin){
        return b.Aorigin - a.Aorigin;
      } else {
        return a.index - b.index
      }
    })[0]['index']
  }
}



/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */

 function bestMatch(ALAHLYGoals, zamalekGoals) {
  var best = {
    zScoreIndex : 0, 
    lowestdiff : ALAHLYGoals[0] - zamalekGoals[0]
  };
  for (i = 0; i < ALAHLYGoals.length; i++)  {
    var diff = ALAHLYGoals[i] - zamalekGoals[i];
    if (diff < best.lowestdiff)  {
      best.lowestdiff = diff;
      best.zScoreIndex = i;
    } else  {
      if (diff == best.lowestdiff && zamalekGoals[i] >  zamalekGoals[best.zScoreIndex])  {
      best.zScoreIndex = i;
      }
    }
  }
  return best.zScoreIndex;
}


function bestMatch(aGoals, bGoals) {
  return bGoals
    .reduce((best, goals, i) => {
      const diff = aGoals[i] - goals;
      return !best.d || (diff < best.d || (diff === best.d && goals > best.v)) ? {d: diff, v: goals, i} : best;
     }, {d: null, g: null, i: null}).i;
}


function bestMatch(winner, loser) {
  return winner.map((v,i)=>[v-loser[i],v,i]).reduce((p,c)=>p[0]>c[0]?c:c[0]===p[0]?c[1]>p[1]?c:p:p)[2]; 
}


// console.log(bestMatch([6, 4],[1, 2]),1)
// console.log(bestMatch([1],[0]),0)
// console.log(bestMatch([1, 2, 3, 4, 5],[0, 1, 2, 3, 4]),4)
// console.log(bestMatch([3, 4, 3],[1, 1, 2]),2)
// console.log(bestMatch([4, 3, 4],[1, 1, 1]),1)
// console.log(bestMatch([16,11,14,15,10,14,14,7,8],[10,10,5,8,5,4,8,5,7]),1)
// console.log(bestMatch([15,5,10,13], [9,3,8,4]), 2);
// console.log(bestMatch([4,11,14,18,9,13,13,8,17,3,9], [2,1,5,8,8,8,6,6,9,2,7]), 4);
// console.log(bestMatch([12,14,18,3,7,12,17], [8,10,8,2,6,5,9]), 4);
// console.log(bestMatch([6,8,13,16,10,10,10,11,12,3,4,3,6], [1,1,5,6,6,9,9,2,7,1,1,1,4]), 5);


 
/**
 * Think:
 */


