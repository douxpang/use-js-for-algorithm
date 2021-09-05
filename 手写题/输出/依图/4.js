var name = 'window'
var obj1 = {
  name: 'obj1',
  foo: function () {
    console.log(this.name)   // obj1
    return () => {
      console.log(this.name) // obj1   
    }
  }
}

var obj2 = {
  name: 'obj2',
  foo: () => {
    console.log(this.name)  // window
    return function () {
      console.log(this.name)  // window
    }
  }
}

obj1.foo()()
obj2.foo()()