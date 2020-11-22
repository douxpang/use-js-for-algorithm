//首先想到的是用Set数据结构去去重 再化为数组
function distinct(arr) {
    return [...new Set(arr)]
}

function distinct1(arr) {
    return Array.from(new Set(arr))
}

function distinct2(arr) {
    let ret = []
    for(let i of arr) {
        !ret.includes(i) && ret.push(i)
        //如果前面的不成立 就执行后面
    }
    return result
}

//当然还有reduce
function distinct3(arr) {
    let ret = []
    ret = arr.reduce((pre,cur) => {
        if(!pre.includes(cur)) {
            pre.push(cur)
        }
        return pre
    },[])
    return ret
}
console.log(distinct3([1,1,2,2]))


function distinct4(arr){
    for(let i=0,len=arr.length;i<len;i++){
        for(let j=i+1;j<len;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1);
                //数组长度变了
                len --;
                j--;
            }
        }
    }
}