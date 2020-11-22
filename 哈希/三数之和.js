// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例:

// 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

// 满足要求的三元组集合为：
// [
//   [-1, 0, 1],
//   [-1, -1, 2]
// ]

var threeSum = function(nums) {
    let res = [],len = nums.length
    if(!nums || len < 3) return res
    nums.sort((a,b) => a-b)
    if(nums[0] > 0 || nums[len - 1] < 0) return res
    for(let i = 0;i < len;i++) {
        if(nums[i] > 0)  break
        if(i > 0 && nums[i] === nums[i-1])  continue
        let left = i + 1,right = len - 1

        while(left < right) {
            let sum = nums[i] + nums[left] + nums[right]
            if(sum === 0) {
                res.push([nums[i],nums[left],nums[right]])
                while(left < right && nums[left] == nums[left + 1]) left++
                while(left < right && nums[right] == nums[right - 1]) right++
                left++
                right--
            }
            if(sum < 0) {
                left++
            }
            if(sum > 0) {
                right--
            }
        }
        
    }
    return res
};