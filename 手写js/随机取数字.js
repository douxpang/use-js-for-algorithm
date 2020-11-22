// 用js实现随机选取10–100之间的10个数字，存入一个数组，并排序
let arr = []
function getRandom(start,end) {
    let n = end - start
    return Math.random(n) + start
}
for(let i = 0;i < 10;i++) {
    arr.push(getRandom(10,100))
}