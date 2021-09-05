// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

//  

// 示例 1:

// 输入: s = "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// 示例 2:

// 输入: s = "bbbbb"
// 输出: 1
// 解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。



// 错误思路 最初接触的时候有个简单的想法 想着实现一下

// 但其实思路就是不科学的  dvdf这种用例无法解决 没有想到 这个算法会拆解成 'dv' 'df'

var lengthOfLongestSubstring = function(s) {
    let len = s.length;
    if(len < 2) {
        return len
    }
    let temp = [];
    let str = '';
    for(let i = 0;i < len - 1;i++) {
        if(str.indexOf(s[i]) < 0) {
            str = str + s[i]
        } else {
            temp.push(str)
            str = '' + s[i]
        } 
    }
    if(str.indexOf(s[len - 1]) < 0) {
        str = str + s[len - 1]
    }

    temp.push(str)

    let lengthArray = temp.map(item => {
        return item.length
    })
    lengthArray.sort((a,b) => b - a);
    return lengthArray[0]
};



// 其实用暴力解法也是可以的 就是用双重循环把所有的子串都拿出来


function fn(s) {
    let len = s.length;
    if(len < 2) {
        return len
    }
}


// 解法一 还是用更科学的滑动窗口 

var lengthOfLongestSubstring1 = function(s) {
    // 哈希集合，记录每个字符是否出现过 
    const occ = new Set();
    const n = s.length;
    // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
    let rk = -1, ans = 0;
    for (let i = 0; i < n; ++i) {
        console.log(occ)
        if (i != 0) {
            // 左指针向右移动一格，移除一个字符
            occ.delete(s[i - 1]);
        }
        while (rk + 1 < n && !occ.has(s[rk + 1])) {
            // 不断地移动右指针
            occ.add(s[rk + 1]);
            ++rk;
        }
        // 第 i 到 rk 个字符是一个极长的无重复字符子串  每次都会把达到最长的长度记录下来了已经
        ans = Math.max(ans, rk - i + 1);
    }
    return ans;
};
lengthOfLongestSubstring1('pwwkew')