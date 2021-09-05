let arr = [1,1,1,2,2,3,4,4]

function dropRepeat1(arr) {
    return Array.from(new Set(arr))
}
console.log(dropRepeat1(arr))

function dropRepeat2(arr) {
    return [...new Set(arr)]
}
console.log(dropRepeat2(arr))

function dropRepeat3(arr) {
   
    let newarr = arr.reduce((pre,cur) => {
        if(!pre.includes(cur)) {
            return pre.concat(cur)
        }else {
            return pre
        } 
    },[])
    return newarr
}
console.log(dropRepeat3(arr))



function dropRepeat4(arr) {
   
    let obj = {}
    let ret = []
    for(let i = 0;i < arr.length;i++) {
        if(!arr[i] in obj) {
            obj[arr[i]] = 1
        }
    }
    console.log(obj)
    for(let m in obj) {
        ret.push(m)
    }
    return ret
}
console.log(dropRepeat4(arr))