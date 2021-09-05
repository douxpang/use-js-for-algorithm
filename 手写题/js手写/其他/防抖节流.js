// 这些其实原来都有写过  但都觉得写的一般  跟着木易扬写一下



// 防抖
// 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间

// 思路：
// 每次触发事件时都取消之前的延时调用方法


function say() {
    console.log('hello')
}
//input.addEventListener('input',debounce(sayHi,1000));






function debounce(fn,time) {
    let timer = null;
    return function(...args) {
        if(timer) clearTimeout(timer);
        let self = this;
        console.log(args)
        timer = setTimeout(function() {
            fn.apply(self,args)
        },time)
    }
}
// clearTimeout(timer)
let i = 0;
function fn() {
    console.log(i++)
}

debounce(fn,1000)(12345);










// 节流
// 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率

// 思路：
// 每次触发事件时都判断当前是否有等待执行的延时函数


// function throttle(fn,time) {
//     let canrun = true;
//     return function() {
//         if(!canrun) return
//         canrun = false;
//         setTimeout(() => {
//             fn.apply(this,arguments);
//             canrun = true;
//         },time)
//     }
// }

function thro(fn,wait) {
    let last = 0;
    return function(...args) {
        let self = this;
        let now = new Date();

        if(now - last < wait) return;

        last = now;
        fn.apply(self,args);
    }
}



function throttle(fn,time) {
    let flag = true;
    return function(...args) {
        if (!flag) return;
        flag = false;
        setTimeout(() => {
        fn.apply(context, args);
        flag = true;
        }, interval);
    }
}



// function say(e) {
//     console.log(e.target.innerWidth);
// }

// window.addEventListener('resize',throttle(say,500))