// 给你一个字符串 s，找到 s 中最长的回文子串。

// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。

// 1 暴力法

// 先用暴力法试一下 也就是说我们可以直接截取不同的字符串

function fn(s) {
  // 先想初始特殊情况
  if (s.length < 2) {
    return s;
  }
  let len = s.length;
  // 因为我们最后要的结果是其最长的一段  所以我们通过那段字符串的 开始坐标和长度获取
  let begin = 0;
  let maxLen = 1;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (j - i + 1 > maxLen && isHuiwen(s, i, j)) {
        begin = i;
        maxLen = j - i + 1;
      }
    }
  }
  // 最后知道了 我们要找的字符串的开始位置 和 长度 用sibstr 最方便了
  let res = s.substr(begin, maxLen);
  return res;

  function isHuiwen(str, left, right) {
    while (left <= right) {
      if (str[left] != str[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
  }
}



// 2 动态规划

// 除了暴力法之外 还是适合动态规划法去进行解决  就在于回文串的中间部分仍然是个回文串 

// 用P(i,j) 去表示 i 到 j 的字符串 是否回文  他要满足中间的是回文 和 两边一样 两个条件

// 所以状态方程大概就是  P(i,j) = P(i+1,j-1) and (Si == Sj)

// 然后再加上做一下边界条件 就可以让我先去做啦

//  如果当前字符串里面的内容只有


// 写法一  和上边暴力的思路一样 只是通过动态规划的方法去找到他的begin 和 maxlength

var longestPalindrome = function(str) {
    let len = str.length;
    if(len < 2) {
        return str
    }
    let maxLen = 1;
    let begin = 0;
    console.log(len)
    let dp = Array.from(new Array(len),() => new Array(len).fill(0));
    console.log(dp)
    for(let i = 0;i < len;i++) {
        dp[i][i] = true
    }
    // 因为Pij 和 P(i+1.j-1) 有关 纵i 横j 就在左下角 所以从上到下 从左到右来
    for(let j = 1;j < len;j++) {
        for(let i = 0;i < j;i++) {
            if(str[i] !== str[j]) {
                dp[i][j] = false
            } else {
                if(j - i < 3) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i+1][j-1]
                }
            }

            if(dp[i][j] && j - i + 1 > maxLen) {
                begin = i;
                maxLen = j -i + 1
            }
        }
    }

    let res = str.substr(begin, maxLen);
    return res;
};





// 写法二  是用一个res去进行长度保存
var longestPalindrome = function(s) {
    let n = s.length;
    let res = '';
    let dp = Array.from(new Array(n),() => new Array(n).fill(0));
    for(let i = n-1;i >= 0;i--){
        for(let j = i;j < n;j++){
            dp[i][j] = s[i] == s[j] && (j - i < 2 || dp[i+1][j-1]);
            if(dp[i][j] && j - i +1 > res.length){
                res = s.substring(i,j+1);
            }
        }
    }
    return res;
};


// 创建二维数组 更好的方法 可以记一下
console.log(Array.from(new Array(5),() => new Array(5).fill(0)))
console.log(Array.from(new Array(5),() => new Array(5)))