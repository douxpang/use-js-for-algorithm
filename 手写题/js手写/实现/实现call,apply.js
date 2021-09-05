function myCall(obj,...args) {
    let obj = obj || window;
    obj.fn = this;

    //或用这种方法取参数

    let args = [...arguments][1]    


    let result = obj.fn(...args);
    delete obj.fn;

    return result;

}


Function.prototype.apply = function(context) {
    let context = context || window;

    context.fn = this;

    var result;

    if(arguments[1]) {
        result = context.fn(...arguments[1])
    } else {
        result = context.fn();
    }

    delete Object.fn;
    return result;
}