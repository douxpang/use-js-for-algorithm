Array.prototype.map = function(fn,thisArg) {
    if(this === null) {
        return new TypeError('cannot read')
    }

    if(Object.prototype.toString.call(fn) !== '[Object Function]') {
        return new TypeError('回调出错')
    }

    let len = this.length;

    let  T = thisArg;
    let res = []

    for(let i = 0;i < len;i++) {

        let temp = this[i];

        let value = fn.call(R,temp,i,this);

        res[i] = value

    }
    return res
}