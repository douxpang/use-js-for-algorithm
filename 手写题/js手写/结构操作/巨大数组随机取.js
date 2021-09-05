// 考虑到性能问题，如何快速从一个巨大的数组中随机获取部分元素。



const func = function(nums,size) {
    let res = [];
    for(let i = 0;i < size.length;i++) {
        const randomIndex = Math.floor(Math.random() * (arr.length - i));
        let item = arr[randomIndex]  
        res.push(item);
        arr[randomIndex] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = item
    }
    return res
}

console.log()