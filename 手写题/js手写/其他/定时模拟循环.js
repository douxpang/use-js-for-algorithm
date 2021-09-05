// 方法1


// let num = 0
// function iAdd1() {
//     console.log(num++);
//     let timer = setTimeout(iAdd1,200)
//     if(num === 5) {
//         clearTimeout(timer)
//     }
// }
// var timer = setTimeout(iAdd1,200)



//方法2
function mySetInterval() {
    mySetInterval.timer = setTimeout(() => {
        arguments[0]()
        mySetInterval(...arguments)
    }, arguments[1])
}

mySetInterval.clear = function() {
    clearTimeout(mySetInterval.timer)
}

mySetInterval(() => {
    console.log(11111)
}, 1000)

setTimeout(() => {
    // 5s 后清理
    mySetInterval.clear()
}, 5000)
