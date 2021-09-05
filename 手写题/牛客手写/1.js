
// 1 

// 不改变数组，末尾加一位返回
// in: [1,2,3,4]  ,  10
// out: [1,2,3,4,10]

// function append(arr,item) {
    //1 for 循环成新数组 再push
    //2  return arr.concat(item);

    //3   let newArr = arr.slice(0);  // slice(start, end)浅拷贝数组
    // newArr.push(item);
    // return newArr;       slice是浅拷贝   

    //4 return [...arr,item]
// }


// 2  移除arr中与item相等的元素  在原数组上操作

// function removeWithoutCopy(arr, item) {         //   之前一直不明白的操作  splice影响 for循环的问题 竟然只要从后往前遍历就解决了   ！！！！！！！！！！
//     for(let i=arr.length;i>0;i--){
//         if(arr[i]==item){
//             arr.splice(i,1);
//         }
//     }
//     return arr;
// }

function removeWithoutCopy(arr,item) {     //  或者用这种方法
    for(let i = 0;i < arr.length;) { 
        if(arr[i] == item) {
            arr.splice(i,1)
        }else {
            i++
        }
    }
    return arr
}


console.log(removeWithoutCopy([1,1,1,1,2,1,1,2,2,2,2],2))

// 3 求数组的和  [1,2,3,4] -> 10

function add(nums) {
    return nums.reduce((pre,cur) => {
        return pre + cur
    },0)
}
function sum(arr) {
    let res = 0
    for(let i=0;i<=arr.length;i++){
        res +=arr[i]
    }
    return res
}


//   合并数组


function concat(arr1, arr2) {
    let resArr = arr1.concat(arr2)
    return resArr
}

function concat(arr1, arr2) {
    let resArr = [...arr1,...arr2]
    return resArr
}

function concat(arr1, arr2) {
    let resArr = arr1.slice(0);
    [].push.apply(resArr,arr2);
    return resArr;
}



//  统计arr中item 出现次数  [1,2,3,4,4,4,4,4],4  => 5
function count(arr, item) {
    let res = arr.filter(v => {
        return v === item
     });
     return res.length;
 }

 function count(arr, item) {
    let resCount = 0
   arr.map(v => {
       if(v === item){
           resCount++
       }
    });
    return resCount;
}

function count(arr,item) {
    let res = count.reduce((pre,cur) => {
        return cur == item ? pre + 1 : pre;
    },0)
}