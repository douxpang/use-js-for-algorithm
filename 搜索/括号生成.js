// 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

// 例如，给出 n = 3，生成结果为：

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

var generateParenthesis = function(n) {
    let res = []
    let help = (temp,l,r) => {
        if(l === n && r === n) {
            res.push(temp)
            return
        }
        if(l < n) {
            help(temp + '(',l+1,r)
        }
        if(r < l) {
            help(temp + ')',l,r + 1)
        }
    }
    help('',0,0)
    return res
};