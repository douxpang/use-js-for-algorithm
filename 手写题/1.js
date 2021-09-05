console.log(Boolean([]))        // [] 的布尔值是 true  其实没有理解原理

var a = Object.prototype.toString;

console.log(a.call([1,2]))        //判断类型的一个好方法！！！昨天为什么没有想到  对象的tostring方法  call到想检测类型的元素上 [object Array] 就是这个数组的第二项

let arr1 = [[1],[2],[3]];
console.log(arr1.slice())      //slice 截取后边的数组 可以不填



console.log(/(png|jpg|jepg)/.test('1.jpg'))    // 检验用(|)正则去匹配字符串  这个括号的用法


//在正则表达式中，利用()进行分组，使用斜杠加数字表示引用，\1就是引用第一个分组，\2就是引用第二个分组。将[a-zA-Z]做成一个分组，然后引用，就可判断是否有连续重复的字母。  

function containsRepeatingLetter(str) {
    return /([a-zA-Z])\1/.test(str);    //这个 \1是精髓
}
console.log(containsRepeatingLetter('231a2aaaa31'))



console.log(...[])      //测试 ... 一个空数组  不会报错

for (let v in [1,2,3]) {
    console.log('0713',v)    // 测试 for in 数组 可以输出每一项
}

let arr2 = ['a','b'];
console.log('0715',arr2.indexOf('6'))



var b = 10;
(function b(){
    b = 20;
    console.log('0722',b);  
})();

var obj = {
    '2': 3,
    '3': 4,
    'length': 2,
    'splice': Array.prototype.splice,
    'push': Array.prototype.push
}
obj.push(1)
obj.push(2)
console.log('0722', obj)


let obj1 = {
    'p': 1,
    'h': 2
}
let n = undefined;
console.log('0723',obj1[n])



var nickname = "LiLei";
function Person(name){
  this.nickname = name;
  this.sayHi = function() {
    console.log('0729a',this);       // 指向person
    setTimeout(function(){
      console.log('666',this);      // 这里this 不指向person了 指向这个timeout
    }, 0);
  }
}
var Male = {
  nickname: 'xiaofang',
  sayHi: () => {
    console.log('0729b',this.nickname);
  }
}
var person = new (Person.bind(Male, 'XiaoHong'));
console.log('person是',person)
person.sayHi();




console.log('0730', 1 instanceof Array)


// const Person1 = {
// 'name': 'little bear',
// 'age': 18,
// 'sayHello': function () {
//     let self = this;
//     setInterval(function () {
//     console.log('我叫' + self.name + '我今年' + self.age + '岁!')
//     }, 1000)
// }
// }
// Person1.sayHello()     // 调用到setinterval的时候 this已经指向全局了  要么 像上边那样缓存this 要么尖头函数

let obj0731 = {
    url: 'http://localhost:3000/say',
    params: { wd: 'Iloveyou' },
    callback: 'show'
}
function fn({ url, params, callback }) {
    params = { ...params, callback }
    console.log(0826,params)
}
fn(obj0731)

