// <!-- // for(var i = 0;i < 10;i++) {
// //     setTimeout(() => {
// //         console.log(i)
// //     },100)
// // } // 10 10 10 ...


// // -->

// 要想改成0123

//方法一
// for(let i = 0;i < 10;i++) {
//     setTimeout(() => {
//          console.log(i)      //会在花括号里生成作用域
//     },100)
// }

//方法二
// for(var i = 0;i < 10;i++) {
//     setTimeout((i) => {
//         console.log(i)
//     },100,i)
// }

for(var i = 0;i < 10;i++) {
    (i => {
        setTimeout(() => {
            console.log(i)
        },100)
    })(i)
}



const obj = {
    test: () => {
        console.log(this)
    }
    }
    
obj.test()
test2 = obj.test;
 test2()