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

console.log(toFixed(factorial(30)));