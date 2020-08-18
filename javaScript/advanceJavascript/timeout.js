function doSomething() {
    console.log(222);
}
console.log(111);
// setTimeout(()=>{
//     console.log('lazy and waiting')
// },0)
// console.log(333);

setInterval(() => {
    console.log('doing it')
}, 3000);