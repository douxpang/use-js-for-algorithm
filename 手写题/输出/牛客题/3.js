class A {}
class B extends A {};

const a = new A();
const b = new B();


console.log(a.__proto__ === A.prototype)    // true

console.log(b.__proto__)   //  B.prototype

B.prototype === A  // true


//https://blog.csdn.net/han_calligrapher/article/details/81592638



