// 请实现一个函数，将一个字符串中的每个空格替换成“%20”。例如，当字符串为We Are Happy。则经过替换之后的字符串为We%20Are%20Happy

function replaces(str) {
    let reg = /\s+/g    //加上s后边的 + 号后 就可以一下匹配多个空格
    let str1 = str.replace(reg,'%20')
    return str1
}
console.log(replaces('we    are happy'))


function replaces1(str) {
    let arr = str.split(' ')
    let str1 = arr.join('%20')
    return str1
}

console.log(replaces1('we are happy'))