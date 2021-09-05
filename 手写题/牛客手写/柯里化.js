// 这个柯里化写的倒是很有帮助

function curryIt(fn) {
    var args = [];
    var result = function(...arg){     
        //  成功通过 传入 ...arg  和 concat  将只能 一个一个传 变为传多个 虽然总参数 还是下边设置的四个

        console.log(arg)  // 之前上边参数是 arg 的时候 是单个数字  现在用...arg  是个数组
        args = args.concat(arg);
        console.log(args)
        if(args.length < fn.length){
           return result;
        }else 
           //console.log(this)   就是 全局
           return fn.apply(this,args);
    }
    return result;
}


let fn = function(a,b,c,d) {return a*b*c*d};
console.log(curryIt(fn)(1)(2)(3,4))










// function curry(fn) {
//     let args = [];
//     let result = function(arg) {
//         args.push(arg);
//         if(args.length < fn.length) {
//             return result
//         } else {
//             return fn.apply(this,)
//         }
//     }
// }