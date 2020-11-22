//所谓扁平化 就是将多维数组 变为一维数组
//eg   [1,[2,3,[4,5]]]   => [1,2,3,4,5]
function flatten(arr) {
    let newArr = arr.reduce((pre,cur) => {
        return pre.concat((Array.isArray(cur)) ? flatten(cur) : cur)
    },[])
    return newArr
}
console.log(flatten([1,[2,3,[4,5]]]))

function flatten1(arr) {
    let res = []
    arr.map(item => {
        if(Array.isArray(item)) {
            res = res.concat(flatten1(item))
        }else {
            res.push(item)
        }
    })
    return res
}


function flatten2(arr) {
        return arr.toString().split(',').map(function(item){
            return Number(item);
        })
    
}


//还可以用这个some 是达成条件返回
function flatten3(ary) {
    while (ary.some(Array.isArray)) {
      ary = [].concat(...ary);
    }
    return ary;
}