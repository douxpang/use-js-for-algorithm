// part1
var scope = "global scope";
function checkscope1(){
    var scope = "local scope";
    function f(){
        console.log(scope);
    }
    return f();
}
checkscope1();    // local scope

// part2
var scope = "global scope";
function checkscope2(){
    var scope = "local scope";
    function f(){
        console.log(scope);           
        //return scope
    }
    return f;
}
checkscope2()();    // 下午以为结果是 global scope 但其实是 local scope
                    //  这里考的不是this 而是 作用域！！ 他的this是window 但是作用域链是声明时候确定的 这样不会变！！