//这里总结一下我最常用的三种排序
//冒泡排序
function BubbleSort(arr) {
    //假如我想升序排列 我会把每次排出最大的到最后一位 所以用i依次向前
    for(let i = arr.length - 1,temp;i > 0;i--) {
        for(let j = 0;j < i;j++) {
            temp = arr[j]
            if(arr[j+1] < temp) {
                arr[j] = arr[j+1]
                arr[j + 1] = temp
            }
        }
    }
    return arr
}
console.log(BubbleSort([6,3,7,1,9]))

//选择排序
function selectionSort(arr) {
    for(let i = 0,len = arr.length,min;i < len;i++) {
        min = arr[i]
        for(let j = i + 1;j < len;j++) {
            //在这次循环里 会把整个之后最小的比较出来
            if(arr[j] < min) {
                let c = min
                min = arr[j]
                arr[j] = c
            }
        }
        arr[i] = min
    }
    return arr
}
console.log(selectionSort([6,3,7,1,9]))


//快速排序

//1
function quicklySort(arr) {
    let left = []
    
}
console.log(quicklySort([6,3,7,1,9]))