// function isLeapYear (year){
//     const remainder = year % 4;
//     if(remainder == 0){
//         return true;
//     }else {
//         false;
//     }
// }
// const check2000 = isLeapYear(2000)
// console.log(check2000);

function leapYear2(year){
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0
}
var isLeapYear2 = leapYear2(1600)
console.log(isLeapYear2);