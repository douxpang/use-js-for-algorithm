// 位1的个数

// 编写一个函数，输入是一个无符号整数，返回其二进制表达式中数字位数为 ‘1’ 的个数（也被称为汉明重量）。

 

// 示例 1：

// 输入：00000000000000000000000000001011
// 输出：3

// 用正则表达式 match出来一个1的数组

function hammingWeight(n) {
    let str = n.toString(2)
    let reg = /1/g
    let res = str.match(reg).length
    return res
}
console.log(hammingWeight(0000000001100000000000000000001011))


var hammingWeight1 = function(n) {
    return n.toString(2).split('').reduce((t,n) => +t + +n)
    
};
console.log(hammingWeight1(00000000000001100000000000001011))