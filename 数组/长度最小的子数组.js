// 给定一个含有 n 个正整数的数组和一个正整数 target 。

// 找出该数组中满足其和 ≥ target 的长度最小的 连续子数组 [numsl, numsl+1, ..., numsr-1, numsr] ，并返回其长度。如果不存在符合条件的子数组，返回 0 。

 

// 示例 1：

// 输入：target = 7, nums = [2,3,1,2,4,3]
// 输出：2
// 解释：子数组 [4,3] 是该条件下的长度最小的子数组。




// var minSubArrayLen = function(target, nums) {
//     if(nums.length === 0) {
//         return 0
//     }
//     let len = nums.length;
//     let ans = Math.pow(2,53) - 1;
    
//     for(let i = 0;i < len;i++) {
//         let sum = 0;
//         for(let j = i;j < len ;j++) {
//             sum += nums[j];
//             console.log(sum)
//             if(sum >= target) {
//                 ans = Math.min(ans,j - i + 1)
//                 break;
//             }
//         }
//     }
//     return ans == (Math.pow(2,53) - 1) ? 0 : ans
// }





var minSubArrayLen = function(target, nums) {
    let len = nums.length;
    if(len === 0) {
        return 0
    }
    let ans = Math.pow(2,53) - 1,left = 0,right = 0,sum = 0;

    while(right < len) {
        sum += nums[right];
        console.log(sum)
        while(sum >= target) {
            ans = Math.min(ans,right - left + 1);
            console.log('ans',ans)
            sum -= nums[left]
            left++
        } 
        right++
        
    }   

    return ans === (Math.pow(2,53) - 1) ? 0 : ans
}

console.log(minSubArrayLen(7,[2,3,1,2,4,3]))




// class Solution {
//     public int minSubArrayLen(int s, int[] nums) {
//         int n = nums.length;
//         if (n == 0) {
//             return 0;
//         }
//         int ans = Integer.MAX_VALUE;
//         int start = 0, end = 0;
//         int sum = 0;
//         while (end < n) {
//             sum += nums[end];
//             while (sum >= s) {
//                 ans = Math.min(ans, end - start + 1);
//                 sum -= nums[start];
//                 start++;
//             }
//             end++;
//         }
//         return ans == Integer.MAX_VALUE ? 0 : ans;
//     }
// }

