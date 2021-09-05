var name = 'jay';

function Person(name) {
    this.name = name;

    console.log(this.name);
}


var a = Person('Tom')       // tom

console.log(name)    //  tom    上面的 没有new就是 直接调用 会改动全局 this

console.log(a)    // undefined

var b = new Person('Micah');      // micah
console.log(b)    //Person { name: 'Micah' }