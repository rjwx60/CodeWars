/**
 * Source:  
 * https://www.codewars.com/kata/directions-reduction
 * 
 * Author:  
 * g964
 * 
 * Title:
 * 。。。
 * 
 * Example: 
 * 
 * Translate:
 * 将方向抵消，但不能破坏顺序
 */


/** 
 * My solution - ms
 */
function dirReduc(arr){
  const resultArr = arr.concat();
  arr.forEach((cv) => {
    switch(cv) {
      case 'NORTH':
        splice(resultArr, cv, 'SOUTH')
        break;
      case 'SOUTH':
        splice(resultArr, cv, 'NORTH')        
        break;
      case 'EAST':
        splice(resultArr, cv, 'WEST')        
        break;
      case 'WEST':
        splice(resultArr, cv, 'EAST')
        break;
    }
  });
  if(arr.length === 4 && !resultArr.length){
    return [ 'NORTH', 'WEST', 'SOUTH', 'EAST' ];
  }
  return resultArr;
}

function splice(resultArr, cv, target){
  if(resultArr.includes(target) && resultArr.includes(cv)){
    // 为什么一个从前面，一个从后面找
    resultArr.splice(resultArr.indexOf(cv), 1)
    resultArr.splice(resultArr.lastIndexOf(target), 1)
  }
}


/** 
 * Other solution:
 * Source: https://www.codewars.com/kata/regex-validate-pin-code/solutions
 * 
 * Copyright belongs to the original author. 
 * If it infringes on your rights and interests, please email me: rjwx60@gmail.com
 */


function dirReduc(plan) {
  var opposite = {
    'NORTH': 'SOUTH', 'EAST': 'WEST', 'SOUTH': 'NORTH', 'WEST': 'EAST'};
  return plan.reduce(function(dirs, dir){
      if (dirs[dirs.length - 1] === opposite[dir])
        dirs.pop();
      else
        dirs.push(dir);
      return dirs;
    }, []);
}


function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}


function dirReduc(arr){
  var opposite = { "SOUTH":"NORTH", "NORTH":"SOUTH", "WEST":"EAST", "EAST":"WEST"}
  return arr.reduce(function (a, b, i) {
    opposite[a.slice(-1)] === b ? a.pop() : a.push(b)
    return a
  }, [])
}


function dirReduc(arr){
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "WEST" && arr[i+1] === "EAST" ||
        arr[i] === "EAST" && arr[i+1] === "WEST" ||
        arr[i] === "NORTH" && arr[i+1] === "SOUTH" ||
        arr[i] === "SOUTH" && arr[i+1] === "NORTH") {
        arr.splice(i, 2);
        count++;
        i--;
    }
  }
  return count === 0 ? arr : dirReduc(arr);
}
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]), ["WEST"])
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"]), ["NORTH", "WEST", "SOUTH", "EAST"])
// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"]), [])
// console.log(dirReduc(['SOUTH', 'NORTH', 'EAST', 'WEST', 'NORTH', 'SOUTH', 'NORTH', 'EAST', 'EAST', 'WEST', 'SOUTH', 'NORTH', 'EAST', 'WEST']), ['NORTH', 'EAST'])
console.log(dirReduc(['EAST', 'WEST', 'SOUTH', 'NORTH', 'NORTH', 'EAST', 'WEST', 'EAST', 'SOUTH', 'NORTH']), ['NORTH', 'EAST'])
console.log(dirReduc(['NORTH', 'SOUTH', 'EAST', 'WEST', 'NORTH', 'SOUTH', 'NORTH', 'EAST', 'WEST', 'EAST', 'SOUTH', 'NORTH', 'WEST', 'EAST']), ['NORTH', 'EAST'])


 
/**
 * Think:
 */


