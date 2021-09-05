let arr = ['a','a','b','c','c','a'];
let el = 'a';



// for(let i = 0;i < arr.length;i++) {
//     if(arr[i] === el) {
//         arr.splice(i,1);
//     }
// }
// console.log(arr)    //[ 'a', 'b', 'c', 'c' ]   这样因为index有bug  可能就会有跳过


// for(let i = 0;i < arr.length;) {
//     if(arr[i] === el) {
//         arr.splice(i,1)
//     } else {
//         i++                 // 不删减元素的时候才增加
//     }
// }
// console.log(arr)   // 这样的话 可以


arr = arr.filter(item => {
    return item !== el
})


console.log(arr)