//请用算法实现，从给定的无序、不重复的数组data中，取出n个数，使其相加和为sum

//第一种方法 回溯 
function getSum(arr,k) {
    let res = []
    function dfs(temp,start,remain,nums) {
        if(remain < 0) {
            return 
        }else if(remain === 0) {
            return res.push([...temp])
        }
        for(let i = start;i < nums.length;i++) {
            temp.push(nums[i])
            dfs(temp,i+1,remain-nums[i],nums)
            temp.pop()
        }
    }
    dfs([],0,k,arr)
    return res
}
var aa = [1, 2, 3, 4, 5, 6, 7, 8, 9]
var bb = 10
console.log(getSum(aa, bb))























// var calSum = function(nums, target) {
//     let res = []
//     const dfs = (tempList, nums, remain, start) => {
//       if (remain < 0) {
//         return
//       } else if (remain === 0) {
//         return res.push([...tempList])
//       }
//       for (let i = start; i < nums.length; i++) {
//         tempList.push(nums[i])
//         // 　　　这里start为i表示数字可以重复使用，如果为i + 1表示不能重复使用
//         dfs(tempList, nums, remain - nums[i], i + 1)
//         tempList.pop()
//       }
//     }
//     dfs([], nums, target, 0)
//     for(let j = 0;j < res.length;j++) {
//         console.log(res[j])
//     }
    
//   }
  
//   var aa = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   var bb = 10
//   calSum(aa, bb)


  // function doSum(arr,result) {
//     for(let i = 1;i < 1 << arr.length;i++) {
//         let sum = 0
//         let temp = ''
//         for(let j = 0;j < arr.length;j++) {
//             if((i & 1 << j) != 0) {
//                 sum += arr[j]
//                 temp += arr[j] + '+'
//             }
//         }
//         //console.log(sum)
//         if(sum === result) {
//             let r = temp.split('+')
//             let p = []
//             for(let h = 0;h < r.length;h++) {
//                 if(r[h] != '') {
//                     p.push(r[h])
//                 }
//             }
//             console.log(p)
//         }
//     }
// }
// let aa = [1,2,3,4,5,6,7,8,9]
// let bb = 10
// doSum(aa,bb)