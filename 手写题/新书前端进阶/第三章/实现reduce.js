Array.prototype.reduce = function(func,init) {
    let arr = this;
    let base = typeof init === 'undefined' ? arr[0] : init;  //给没给初始值 给了的话用 否则数组第一位

    let start = typeof int === 'undefined' ? 1 : 0;

    arr.slice(start).forEach(function(val,index) {
        base = func(base,val,index + start,arr)
    })

    return base
}