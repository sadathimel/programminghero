// 10! = 1*2*3*3*4*5*6*7*8*9*10
function factorial(n){
    if(n == 0){
        return 1
    }
    else{
        return n * factorial(n-1);
    }
}
var result = factorial(10)
console.log(result);