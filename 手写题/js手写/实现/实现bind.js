

    // 对于普通函数，绑定this指向

    // 对于构造函数，要保证原函数的原型对象上的属性不能丢失



Function.prototype.bind = function(thisArg,...args) {
    if(typeof this !== 'function') {
        return new Error()
    }
    let self = this;

    let resFn = function () {
        self.apply(this instanceof self ? 
            this : 
            thisArg, args.concat(Array.prototype.slice.call(arguments)));
    }

    resFn.prototype = Object.create(self.prototype);

    return resFn;

}