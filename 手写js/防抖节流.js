//这里我们设一个场景  有一块区域 我们触碰里面的数字会+1  分别用防抖和节流去限制

//防抖
//我个人是这么理解防抖的  在规定时间内再次触发就清除定时后重新设置，直到不触发了 就像游戏里英雄回城一样

//简单场景
// 1.search搜索联想，用户在不断输入值时，用防抖来节约请求资源。
// 2.window触发resize的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次。
//防止按钮重复触发

let count = 0
let container = document.querySelector0('container') 
function fn() {
    container.innerHTML = count++
}
function debounce(fn,wait) {
    var timer
    return function() {
        clearTimeout(timer)   //只要再整就清除
        timer = setTimeout(fn,wait)
    }

}
container.onmouseover = debounce(fn,1000)


//节流
// 1.鼠标不断点击触发，mousedown(单位时间内只触发一次)。
// 2.监听滚动事件，比如是否滑到底部自动加载更多，用throttle来判断
//节流就像引燃 只会周期触发
let count = 0
let container = document.querySelector('container') 
function fn() {
    container.innerHTML = count++
}
function throttle(fn,wait) {
    let last;
    return function(...args) {
        let now = new Date()
        if(!last || now > last + wait) {
            last = now
            fn.apply(this,args)
        }
    }
}
container.onmouseover = throttle(fn,1000)