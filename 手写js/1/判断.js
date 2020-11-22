// 下列代码中a在什么情况下会打印1
// var a = ''
// if(a == 1 && a == 2 & a==3) {
//     console.log(1)
// }



var a = [1,2,3]
console.log(a.toString)
a.toString = a.shift    //在 a 用 == 的时候 会触发toString  然后shift一个数
if(a == 1 && a == 2 & a==3) {
    console.log(1)
}