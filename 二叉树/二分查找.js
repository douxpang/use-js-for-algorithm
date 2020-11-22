function binarySearch(data,arr,start,end) {
    if(start > end) {
        return -1
    }
    let mid = Math.floor((start + end) /2)
    if(data === mid) {
        return mid
    }else if(data < mid) {
        return binarySearch(data,arr,start,mid - 1)
    } else {
        return binarySearch(data,arr,mid + 1,end)
    }
}

