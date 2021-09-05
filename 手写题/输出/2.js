const p1 = new Promise((resolve) => {
    setTimeout(() => {
        console.log('timeout');
        resolve();
    },1000)
})


const p2 = new Promise(() => {}).then(() => {
    console.log('hi shopee')
})

Promise.race([p2,p1])   // timeout  因为 p2 里 之前没有resolve  不会运行 hi shopee