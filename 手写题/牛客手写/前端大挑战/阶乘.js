function fn1(n) {
    if(n === 1) return 1
    return n * fn1(n - 1);
}


//  尾递归优化

function fn2(n,total = 1) {
    if(n===1) return total
    return fn2(n - 1,n * total);
} 