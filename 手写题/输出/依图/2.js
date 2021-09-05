// part1

// 在词法分析阶段  会分析参数(扫描)  变量和函数 都会提升  function优先级更高  相当于 function a 提到最上边  

console.log(a);  //[Function: a]
function a() {};
console.log(a);   // [Function: a]
var a = 1;
console.log(a);  // 1



// part2
var foo = 1;
console.log(foo);  // 1
function foo() {};                  // 相当于 这行直接去最上边了 然后被 1 覆盖了
console.log(foo);  // 1
