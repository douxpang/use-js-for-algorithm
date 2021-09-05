
// // reduce

// function sum(arr) {
//     return arr.reduce(function(prev, curr, idx, arr){
//         return prev + curr;
//     },0);
// }

// // 循环 

// function sum(arr) {
//     var len = arr.length;
//     if(len == 0){
//         return 0;
//     } else if (len == 1){
//         return arr[0];
//     } else {
//         return arr[0] + sum(arr.slice(1));
//     }
// }


//递归

function sum(arr) {
    let len = arr.length;
    if(len === 1) {
        return arr[0]
    }else {
        return arr[0] + sum(arr.slice(1));
    }
}

console.log(sum([1,2,3]))
console.log([1,2,3,4].slice(1))