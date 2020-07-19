function add(number1, number2){
    var total = number1 + number2;
    return total;
}
var result = add(23,23);
console.log(result);

function getlargNumber (numbers){
    var larger = numbers[0];
    for(var i = 0; i<numbers.length; i++){
        var element = numbers[i];
        if(element > larger){
            larger = element;
        }
    }
    return larger;
}
var numbers = [45, 23, 78, 84];
var output = getlargNumber(numbers);
console.log('output', output);