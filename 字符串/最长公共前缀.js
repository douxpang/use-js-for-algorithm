// 编写一个函数来查找字符串数组中的最长公共前缀。

// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1:

// 输入: ["flower","flow","flight"]
// 输出: "fl"


var longestCommonPrefix = function(strs) {
    let temp = 0,res = 0
    for(let i = 0;i < strs.length;i++) {
        temp = fn1(strs[i],strs[i + 1])
        res = Math.min(res,temp)
    }
    return strs[0].split('').splice(0,res).join('')
};
function fn1(str1,str2) {
    let r = ''
    for(let i = 0;i < str1.length;i++) {
        //console.log(str1)
        console.log(typeof str1[i])
        if(str1[i].charCodeAt() == str2[i].charCodeAt()) {
            r += str1[i]
        }else {
            break
        }
    }
    return r.length
}

console.log(longestCommonPrefix(["flower","flow","flight"]))