const data = {
    name: 'phr',
    age: 21,
    nums: [1,2,3],
    info: {
        address: 'jilin'
    }
}
const old = Array.prototype
const arr


function define(target,key,value) {
    Object.defineProperty(target,key,{
        get() {
            return value
        },
        set: function(newValue) {
            if(newValue !== value) {
                value = newValue
            }
        }
    })
}


function observer(target) {
    if(typeof target !== 'object' || target == null) {
        return target
    }

    for(let key in target) {
        define(target,key,target[key])
    }
}


observer(data)


// 测试
// data.name = 'lisi'
// data.age = 21
// // console.log('age', data.age)
// data.x = '100' // 新增属性，监听不到 —— 所以有 Vue.set
// delete data.name // 删除属性，监听不到 —— 所有已 Vue.delete
// data.info.address = '上海' // 深度监听
data.nums.push(4) // 监听数组
