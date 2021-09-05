var bar = {
    myname: "bar",
    getName: function() {
        console.log(myname);
        console.log(this);
    }
}
 
function foo() {
    var myname = "foo";
    return bar.getName;
}
var myname = "global";
var _printName = foo();
_printName();       // 这里调用 bar 的时候    输出 global 和 window对象
bar.getName();      //  这个也是 global   和  bar对象