function f1() { 
    var n = 999; 
    nAdd = function(){n+=1} 
    function f2(){console.log(n)}; 
    return f2; 
} 
//nAdd();   // 在调用 f1之前 这里会报错 找不到这个函数

let result = f1()

// 为什么 调用后 里面的变量不能用 函数却可以用

result();  // 999
//console.log(n)  // 这里输出 肯定是 报错找不到
nAdd()
result(); //999




