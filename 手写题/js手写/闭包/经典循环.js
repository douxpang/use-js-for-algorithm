for (var i = 0; i< 10; i++){
	setTimeout(() => {
    console.log('第一种',i);       //  原因就是  settimeout代码在主线程的函数调用栈清空后才执行
    }, 1000)
}


// 改造成输出 0-9 用更多方法         



// 1 原理：

// 利用 setTimeout 函数的第三个参数，会作为回调函数的第一个参数传入
// 利用 bind 函数部分执行的特性

// 1.1

for (var i = 0; i< 10; i++){
	setTimeout((i) => {
		console.log(i);
    }, 1000, i)
}

// 1.2

for (var i = 0; i< 10; i++){
	setTimeout(console.log, 1000, i)
}

// 1.3
for (var i = 0; i< 10; i++){
	setTimeout(console.log.bind(Object.create(null),i), 1000)
}


// // 2 
// 原理：

// 利用 let 变量的特性 — 在每一次 for 循环的过程中，let
//  声明的变量会在当前的块级作用域里面（for 循环的 body 体，也即两个花括号之间的内容区域）
//  创建一个文法环境（Lexical Environment），该环境里面包括了当前 for 循环过程中的 i，具体链接
for (let i = 0; i < 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000)
  }


//   for (let i = 0; i < 10; i++) {   等价
//     let _i = i;// const _i = i;
//     setTimeout(() => {
//       console.log(_i);
//     }, 1000)
//   }


//3

for (var i = 0; i< 10; i++){
    (function(i) {
        setTimeout(() => {
            console.log(i);
        }, 1000)
    })(i)	
}



// 方法四

// 原理：

// 很多其它的方案只是把 console.log(i) 放到一个函数里面，因为 setTimeout 函数的第一个参数只接受函数以及字符串，如果是 js 语句的话，js 引擎应该会自动在该语句外面包裹一层函数
// 代码 1：

// for (var i = 0; i < 10; i++) {
//   setTimeout(console.log(i), 1000)
// }
// 代码 2：

// for (var i = 0; i < 10; i++) {
//   setTimeout((() => {
//     console.log(i);
//   })(), 1000)
// }



