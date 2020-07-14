// 3! = 1*2*3
// 4! = 1*2*3*4
// 5! = 1*2*3*4*5
// 10! = 1*2*3*4*5*6*7*8*9*10 

// var factorial = 1;
// for(let i = 1; i <= 50; i++){
//     factorial = factorial * i
//     console.log(i, factorial)
// }

// factorial for-loop

// function factorial (n){
//     var factorial = 1;
//     for(var i = 1; i <= n; i++) {
//         factorial = factorial * i;
//     }
//     return factorial;
// }
// var factorial20 = factorial(20)
// console.log(factorial20)

// factorial while - loop
// var i = 1;
// var factorial = 1;
// while(i<=10){
//     factorial = factorial * i;
//     // console.log(i, factorial);
//     i++;
// }
// console.log(factorial)

function factorial(n){
    var i = 1;
    var fact = 1;
    while(i <= n) {
        fact = fact * i;
        i++;
    }
    return fact;

}
var result = factorial(10);
console.log(result);