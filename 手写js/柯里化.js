// // function add(a,b) {
// //     return a + b
// // }
// //https://juejin.im/post/5bf18715e51d45244939acc5

// function curringAdd(a) {
//     return function(b) {
//         return a + b
//     }
// }
// console.log(curringAdd(1)(2))


// //参数复用
// function test(reg,txt) {
//     return reg.test('txt')
// }
// function test1(reg) {
//     return function(txt) {
//         return reg.test(txt)
//     }
// }

// let hasNumber = test1(/\d+/g)
// hasNumber('123')
// //如果我有很多地方都要校验是否有数字，其实就是需要将第一个参数reg进行复用，这样别的地方就能够直接调用hasNumber，hasLetter等函数，让参数能够复用，调用起来也更方便



// function curry(){
//     const argsList = [...arguments]
    
//     const fn = function(){
//         argsList.push(...arguments)
//         return fn
//     }
    
//     fn.toString = function(){
//         return argsList.reduce((a, b) => a + b)
//     }
    
//     return fn
// }

// console.log(curry(1, 2)(3)(4, 5, 6)) // 21



// var overtime = (function() {
//     var args = [];
  
//     return function() {
//       if(arguments.length === 0) {
//         var time = 0;
//         for (var i = 0, l = args.length; i < l; i++) {
//           time += args[i];
//         }
//         return time;
//       }else {
//         [].push.apply(args, arguments);
//       }
//     }
//   })();
// overtime(1)
// overtime(2)
// console.log(overtime())


// function currying(fn,...args1){
//     return args1.length >= fn.length ? fn(args1) : args2=>{ currying(fn,...args1,...args2) }
// }
// function add(a,b) {
//     return a + b
// }

// console.log(currying(add,[1,2,3]))
function currying(fn, ...args) {
    //console.log('fn',fn.length)
    //console.log([...args].length)
    return args.length >= fn.length? 
            fn(...args):
            (...args2) => currying(fn, ...args, ...args2);
}
function add1(a,b,c,d){
  return a+b+c+d
}
let add = currying(add1)
console.log(add1(1,2,3,4))


const add2 = function(a){
    var sum = a;
    var temp = function(b){
        sum += b
        return temp
    }
    temp.toString = function(){
        return sum
    }
    return temp
}
console.log(add2(1)(2)(3)(4))