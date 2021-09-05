// 核心要点👇

//     创建一个新对象，这个对象的__proto__要指向构造函数的原型对象
//     执行构造函数
//     返回值为object类型则作为new方法的返回值返回，否则返回上述全新对象

function _new() {
    let obj = {};
    let [constructor, ...args] = [...arguments];
    obj.__proto__ = constructor.prototype;
    let result = constructor.apply(obj, args);
    if (result && typeof result === 'function' || typeof result === 'object') {
        return result;
    }
    return obj;
}

