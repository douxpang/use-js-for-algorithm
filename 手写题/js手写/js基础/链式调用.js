// 实现 5.add(2).minus(3)   =  4



Number.prototype.add = function(s) {
    return this + s;  //  return this.valueof() + s
}

Number.prototype.minus = function(s) {
    return this - s;
}

console.log((5).add(3).minus(2));