function jsFactorial1 (n) {
  if(!jsFactorial1.cache){
    jsFactorial1.cache = 1;
  }
  if(n){
    jsFactorial1.cache = jsFactorial1.cache * n;
    n--;
    return jsFactorial1(n);
  }else{
    jsFactorial1.result = jsFactorial1.cache;
    jsFactorial1.cache = 1;
    return jsFactorial1.result
  }
}

// console.log(jsFactorial1(2))
// console.log(jsFactorial1(3))
// console.log(jsFactorial1(4))
// console.log(jsFactorial1(5))
// console.log(jsFactorial1(6))


function zeros (n) {
  if(!zeros.cache){
    zeros.cache = 1;
  }
  if(n){
    console.log('乘以', n);
    zeros.cache = zeros.cache * n;
    n--;
    return zeros(n);
  }else{
    zeros.result = zeros.cache;
    zeros.cache = 1;
    let cache1 = zeros.result.toLocaleString('fullwide',{useGrouping:false});
    // let cache2 = +cache1.split('').reverse().join('') + '';
    return cache1;
  }
}

// console.log(zeros(2))
// console.log(zeros(3))
// console.log(zeros(4))
// console.log(zeros(5))
// console.log(zeros(6))
// console.log(zeros(30))



var f = [];
function factorial (n) {
  if (n == 0 || n == 1){return 1;}
  if (f[n] > 0){return f[n];}
  return f[n] = factorial(n-1) * n;
}

function toFixed(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1]);
    if (e) {
        x *= Math.pow(10,e-1);
        x = '0.' + (new Array(e)).join('0') + x.toString().substring(2);
    }
  } else {
    var e = parseInt(x.toString().split('+')[1]);
    if (e > 20) {
        e -= 20;
        x /= Math.pow(10,e);
        x += (new Array(e+1)).join('0');
    }
  }
  return x;
}

// console.log(toFixed(factorial(30)));


function orderWeight(string){
  const initArr =  string.split(' ').map(cv => {
    return {
      value: cv,
      weight: cv.split('').reduce((ac, ccv) => +ac + +ccv, 0)
    }
  })
  return initArr.sort((a, b) => {
    return  a.weight < b.weight ? -1  : 
            a.weight > b.weight ? 1   : 
            a.value < b.value   ? -1  :
            a.value > b.value   ? 1   : 0
  }).map(cv => cv.value).join(' ');
}


// console.log(orderWeight("103 123 4444 99 2000")) // "2000 103 123 4444 99"
// console.log(orderWeight("2000 10003 1234000 44444444 9999 11 11 22 123")) // "11 11 2000 10003 22 123 1234000 44444444 9999"


var str = '1 2 3';
str.replace('1', function(a, b, c){
  console.log(a);   // 1 0 1 2 3
  console.log(b);   // 2 2 1 2 3
  console.log(c);   // 3 4 1 2 3
})

