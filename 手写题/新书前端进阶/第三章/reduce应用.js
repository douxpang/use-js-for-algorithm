// const f1 = () => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log('p1 running')
//             resolve(1)
//         },1000)
//     })
// }


const f1 = () => new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log('p1 running')
        resolve(1)          // 为了链式传递下去
    },1000)
})

const f2 = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('p2 running');
            resolve(2)
        },1000)
    })
}


const array = [f1,f2];

// const runPromise = (array,value) => array.reduce((pre,cur) => pre.then(cur),Promise.resolve(value))


const runPromise = (array,value) => {
    array.reduce((pre,cur) => {
        return pre.then(cur)
    },Promise.resolve(value))
}


runPromise(array,'init')


