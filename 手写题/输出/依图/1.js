// part1
console.log(a);
function a() {};
console.log(a);
var a = 1;
console.log(a);

// part2
var foo = 1;
console.log(foo); 
function foo() {};
console.log(foo); 




// part1
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f();
}
checkscope();

// part2
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
checkscope()();





var name = 'window'
var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this.name)
    return () => {
      console.log(this.name)
    }
  }
}
var obj2 = {
  name: 'obj2',
  foo: () => {
    console.log(this.name)
    return function () {
      console.log(this.name)
    }
  }
}

obj1.foo()()
obj2.foo()()




async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
    setTimeout(() => {
      console.log('timer1')
    }, 0)
  }
  async function async2() {
    setTimeout(() => {
      console.log('timer2')
    }, 0)
    console.log("async2");
  }
  async1();
  setTimeout(() => {
    console.log('timer3')
  }, 0)
  console.log("start")





数组排序之后相邻数的最大差值
限定语言：C、Python、C++、Javascript、Python 3、Java、Go
给定一个整形数组arr，返回排序后相邻两数的最大差值
arr = [9, 3, 1, 10]。如果排序，结果为[1, 3, 9, 10]，9和3的差为最大差值，故返回6。
arr = [5, 5, 5, 5]。返回0。
[要求]
时间复杂度为O(n)O(n)O(n)，空间复杂度为O(n)O(n)O(n) 




defer async  z-index  居中  怎么宽高1:1   js变量提升   文档流 首屏优化 