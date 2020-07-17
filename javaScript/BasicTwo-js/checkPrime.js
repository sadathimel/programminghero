
function inPrime(n){
    for (i = 2; i < n; i++) {
      if (n % i == 0) {
        return 'Not a prime number'
      }
    }
    return 'Your Number is a Prime Number'
}
// var result = inPrime(12);
var result = inPrime(12);
// var result = inPrime(13);
console.log(result)
