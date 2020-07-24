function addNumbers(num1, num2){
      var sum = 0;
      for (let i = 0; i < arguments.length; i++) {
            const num = arguments[i];
            sum = sum + num;
      }
      // arguments.push(15);
      return sum;
}
var result = addNumbers(3, 5, 8);
console.log(result);
