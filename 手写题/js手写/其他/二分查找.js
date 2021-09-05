//二分查找
function search(arr,key) {
    var low = 0,high = arr.length-1;
    
    while(low<=high) {
        let mid = parseInt((low+high)/2);
        if(arr[mid]==key) {
            return mid
        }
        else if(arr[mid]>key){
            high = mid-1
        }
        else if(arr[mid]<key) {
            low = mid+1;
        }
        else {
            return -1
        }
    }
}
var arr1 =[1,2,3,4,5,6]
console.log(search(arr1,2))

//递归

//递归函数里 先把截止条件写出来
//每个递归函数前要有return
function search2(low,high,arr,key) {
    if(high<low) {
        return -1
    }
    let mid = parseInt((low+high)/2);
    if(arr[mid] === key) {
        return mid
    }
    else if(arr[mid]<key) {
        low = mid+1;
       return search(low,high,arr,key)      //  这里注意  每次都要 return！！！！！！！！！！！！！！！！
    }
    else if(arr[mid]>key) {
        high = mid-1;
       return  search(low,high,arr,key)
    }

  
}
var arr1 =[1,2,3,4,5,6]
console.log(search2(0,5,arr1,3))