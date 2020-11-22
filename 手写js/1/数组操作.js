// 请把两个数组['A1','A2','B1','B2','C1','C2'] 和 ['A','B','C'] 合并为[A1,A2,A,B1,B2,B,C1,C2,C]

function assign(arr1,arr2) {
    arr2 = arr2.map(item => {
        return item + 3
    })
    console.log(arr2)
    let a3 = [...arr1,...arr2].sort().map(item => {
        if(item.includes('3')) {        //includes可以  indexOf不行
            return item.split('')[0]
        }
        return item
    })
    return a3   
}
console.log(assign(['A1','A2','B1','B2','C1','C2'],['A','B','C']))