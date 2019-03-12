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







