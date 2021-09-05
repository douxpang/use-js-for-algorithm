// 原型链

function Man() {
    this.skill = 'coding';
}
Man.prototype.say = function () {
    return this.skill;
}

function Person() {
    this.name = 'phr';
}

Person.prototype = new Man;

Person.prototype.perSay = function () {
    return this.name;
}

let me = new Person();
console.log(me.say() + me.perSay())

//第一个问题是
// let s1 = new Man()
// let s2 = new Man()   如果有引用类型 一个改了 Man里的也会改
// 、所有新实例都会共享父类实例的属性。（原型上的属性是共享的，一个实例修改了原型属性，另一个实例的原型属性也会被修改！
// 第二个是 不可以像构造函数传参



// 构造函数
function subType(name) {
    this.name = name;
}

function superType(color) {
    this.color = color;
    subType.call(this, 'phr')
}
let n = new superType('red');

console.log('构造', n.name)
//缺点
//因为方法和属性只能写在构造函数中,因此不能实现函数复用 只能继承父类的实例属性和方法，不能继承原型属性/方法


function Type(name) {
    this.name = name;
    this.sale = 'male'
}

Type.prototype.showName = function () {
    console.log(this.name)
}
Type.prototype.showSex = function () {
    console.log(this.sex)
}


function SubType(name, age) {
    Type.call(this, name);
    this.age = age
}
SubType.prototype = new Type();
SubType.prototype.showAge = function () {
    console.log(this.age)
}

let sub = new SubType('bob', 11)





// ES6
class Animal {
    constructor(props) {
        this.name = props.name
    }
    eat() {
        console.log(this.name + 'eat eggs')
    }
}
class Bird extends Animal {
    constructor(props, myAttr) {
        super(props)
        this.type = props.type;
        this.attr = myAttr
    }
    fly() {
        console.log(this.name + '' + this.attr + '' + this.type)
    }
}
let myBird = new Bird({
    name: '燕子',
    type: 'egg'
}, 'bird class')
myBird.eat()
myBird.fly()