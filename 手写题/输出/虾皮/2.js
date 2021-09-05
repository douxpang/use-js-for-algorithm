var a = 10

var obj = {

  a: 20,

  say: () => {

    console.log(this.a)

  }

}

obj.say()    // 10  这个没什么问题  箭头函数直接指向了父级作用域的this

var anotherObj={a:30}

obj.say.apply(anotherObj)  //  这个上午不假思索答了 30  后来才反应过来 箭头函数this绑定不能改啊 所以还是10

