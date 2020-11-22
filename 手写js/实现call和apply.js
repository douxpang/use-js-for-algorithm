//call
Function.prototype.myCall = function(obj,...arg) {
    var obj = obj || window
    obj.fn = this
    let result = obj.fn(...arg)
    delete obj.fn
    return result
}

let obj = {
    value : 1
}
function bar(name,age) {
    return {
        value : this.value,
        name : name,
        age : age
    }
}

console.log(bar.myCall(obj,'doux',21))







//apply
Function.prototype.myApply = function(context) {
    context = context || window
    context.fn = this
    if(arguments[1]) {
        //如果传了数组
        result = context.fn(...arguments[1])
    }else {
        result = context.fn()
    }
    delete context.fn()
    return result
}
//看下这个例子
function log() {
    console.log.myApply(this,arguments)
}
log('123')








