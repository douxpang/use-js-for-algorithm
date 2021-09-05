Array.prototype.push = function(...args) {
    let O = Object(this);

    let len = O.length;
    let argCount = args.length;


    for(let i = 0;i < argCount;i++) {
        O[len + 1] = args[i]
    }
    let newL = len + argCount;
    O.length = newL;
    return newL
}


Array.prototype.pop = function() {
    let  O = Object(this)
    let len = this.length;
    if(len == 0) {
        return undefined
    }
    len--;
    let value = O[len];
    delete O[len];
    O.length = len
    return value;

}