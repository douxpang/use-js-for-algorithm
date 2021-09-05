// 封装函数 f，使 f 的 this 指向指定的对象


function bindTarget(func,target) {
    if(!func.bind) {
        return func.bind(target)   // 有bind的话 直接return func.bind 这是个函数     
    } else {
        console.log(111,arguments)
        return function() {
            return func.apply(target,arguments)   // 因为我想返回个函数 随意外层返回个匿名函数
        }
    }
}


// 实现下bind   写个支持传参的 也可以  这个要看  柯里化也在里面 

//https://zhuanlan.zhihu.com/p/164831502

// Function.prototype.myBind = function(obj){
//     let self = this;
//     let args = [].slice.call(arguments,1);

//     return function() {
//         let params = [].slice.call(arguments);
//         self.apply(obj,args.concat(params));     //  这样可以去 支持 柯里化
//     }
// }

// var obj = {
//     z : 1
// }
// function add(x,y) {
//     console.log(this.z,x,y)
// }

// let bind1 = add.myBind(obj,2)
// bind1(3)





//解决的问题:支持new函数调用，继承prototype
Function.prototype.bind_ = function (obj) {
    let args = [].slice.call(arguments,1);
    let self = this;
    let bound = function(){
        let param = [].slice.call(arguments);
       // 这里需要处理 是obj还是this ,判断实例的构造函数是
       // console.log(this.constructor === fn)
        self.apply(this.constructor === fn ? this:obj,args.concat(param))
    }
    bound.prototype = self.prototype//原型链继承，有缺陷
    return bound;
};

var obj = {
    z: 1
};
function fn(x, y) {
    this.name = '我是死胖子';
    console.log(this.z,x,y);
};
fn.prototype.age = 996;

var bound = fn.bind_(obj, 2);
var person = new bound(3); //undefined 2 3
console.log(person.name); //我是死胖子
console.log(person.age); //996