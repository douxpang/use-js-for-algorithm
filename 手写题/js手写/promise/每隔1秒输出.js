const nums = [1,2,3,4];

nums.reduce((pre,cur) => {
    return pre.then(() => {
        return new Promise((reso,reject) => {
            setTimeout(() => {
                reso(console.log(cur));
            },1000)
        })
    })
},Promise.resolve())