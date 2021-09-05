// 比如 sleep(1000) 意味着等待1000毫秒，可从 Promise、Generator、Async/Await 等角度实现

// promise
const sleep = function(time,val) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(val)
        },time)
    })
}

sleep(1000,'promise sleep').then((val) => {
    console.log(val)
})


// async

const sleep2 = function(time) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        },time)
    })
}
async function out() {
    console.log('fuck the code')
    await sleep2(1000)
    console.log('fuck the code again')
} 

out()