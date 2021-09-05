function isArray(target) {
    let res = Object.prototype.toString.call(target).split(' ');
    if(/Array/.test(res[1])) {
        return true;
    } else {
        return false
    }
}
console.log(isArray(1))






// function isArray(target) {
//     return Array.isArray(target)
// }


console.log(isArray([1,2]))