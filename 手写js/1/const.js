const a = 20
const b ={
    age:18,
    star:500
}
b.age = 22        //在JS中，复杂数据类型，存储在栈中的是堆内存的地址，存在栈中的这个地址是不变的，但是存在堆中的值是可以变得。
console.log(b)   