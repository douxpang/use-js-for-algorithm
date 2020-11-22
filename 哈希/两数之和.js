// 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。

// 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]



//方法一
//根据题意，找到两个数相加为target，应该都会轻易想到遍历，暴力求解
//时间都会长一些 但这之间也会有不同
function twoSum(nums,target) {
    for(let i = 0;i < nums.length;i++) {
        let diff = target - nums[i]
        for(let j = i + 1;j < nums.length;j++) {
            if(nums[j] === diff) {
                return [i,j]
            }
        }
    }
}
//这里没有每次遍历去比对两数的和 那样很有可能时间超时 而是用j和差数比较


//方法二
//之前不管是 双层for循环还是 用indexOf  时间复杂度都是on方  可以用对象的键值减去一层复杂度  效率会上升
var twoSum = function(nums, target) {
    let obj = {}
    let ret = []
    nums.forEach((item,index) => {        //注意这种情况foreach比map要快 因为map有回调
        obj[item] = index
    })
    
     
    for(let i = 0;i < nums.length;i++) { 
        let n = obj[target - nums[i]]
        if ( n && n !== i) {
            ret =  [i,n]
            break
        } 
    }
    return ret
 };

//三
 var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]] !== undefined) return [i, map[nums[i]]];
        else map[target - nums[i]] = i;
    }
};
