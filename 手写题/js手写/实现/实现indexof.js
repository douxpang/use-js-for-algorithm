//  不是很难  看会不会写


function _index(string,target) {
    if(typeof string !== 'string') {
        throw new Error('sting')
    }
    let m = string.match(new RegExp(target));
    return m? m.index: -1;
}
console.log(_index('123',3))