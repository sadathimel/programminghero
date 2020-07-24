function evenify(num) {
  if (num % 2 == 0) {
    return num;
  } else {
    return num*2;
  }
}
var result = evenify(3)
var square = result * result;
console.log('square', square);

function evenify_all(nums) {
  var even_array = []
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    var result = evenify(num);
    even_array.push(result)
  }
  return even_array;
}

var nums = [5, 12, 89, 45, 18, 8];
var nums_even = evenify_all(nums)
console.log(nums_even);
// evenify_all(nums)

friends_age = [13, 17, 19, 20, 18];
// evenify_all(friends_age);
