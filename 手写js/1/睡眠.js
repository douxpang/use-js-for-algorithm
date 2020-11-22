// 实现一个sleep sleep(1000) 意味着等待1000ms


//promise
function sleep(ms) {
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms)
    })
}
sleep(1000).then(() => {
    console.log(1)
})


//es5
function sleep1(fn,ms) {
    setTimeout(fn,ms)
}
function add() {
    console.log(1)
}
sleep1(add,1000)