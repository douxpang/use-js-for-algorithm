function add() {
    var a = 1;
    return function () {
        a++;   // 第一次 这里的 a 是 1   的二次时候 这里是3 
        return a++; // 这里return的是上边a++ 的2 
    }

    
}

var result = add();
console.log()

console.log(result());   // 第一次调用 result  

console.log(result())