//给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true


var isAnagram = function (s, t) {
    const hash = new Array(26).fill(0);
    const aCode = 'a'.charCodeAt(0);

    for (let i = 0; i < s.length; i++) {
        hash[s.charCodeAt(i) - aCode]++;
    }
    for (let i = 0; i < t.length; i++) {
        if (hash[t.charCodeAt(i) - aCode] == 0) {
            return false;
        }
        hash[t.charCodeAt(i) - aCode]--;
    }
    for (const v of hash) {
        if (v != 0) {
            return false;
        }
    }
    return true;
};
