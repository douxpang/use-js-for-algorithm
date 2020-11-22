//简单递归
function fibonacci(n) {
    if(n == 1 || n == 2) {
        return 1
    }
    return fibonacci(n-1) + fibonacci(n-2)
}

//尾递归优化
function fibonacci1 (n , ac1 = 1 , ac2 = 1) {
    if( n <= 1 ) {return ac2};
  
    return Fibonacci1 (n - 1, ac2, ac1 + ac2);
}


//函数迭代
function fibonacci2(n) {
    let res1 = 1
    let res2 = 1
    let sum
    for(let i = 2;i < n;i++) {
        sum = res1 + res2
        res1 = res2
        res2 = sum
    }
    return sum
}

//用解构
function fb3(n) {
     let res1 =1;
     let res2 =1;
    for(var i=2;i<n;i++) {   
        [res1,res2] = [res2,res1+res2]
    }
    return res2

}
