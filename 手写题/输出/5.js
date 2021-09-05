var obj = {
    age: 18,
    foo: function(func) {
        console.log(1)
        func();  
        console.log(this.age)  // 18
        arguments[0]()   // 这里 也运行一次temp
    }
}

var age = 10;
function temp() {
    console.log('age',this.age)
}
obj.foo(temp);