//  题意就是说 在all的数组里 想要 即使 有error 也返回整个数组



// 第一种方法

//  因为 promise.all  

//  比如这样  promise.all(requests).then(...).catch(...)  会在 requests 的所有 项都 resolve时候 才会进入 then方法
//  把所有结果 用一个数组返回
//  如果就是有一个reject  就会进后边的catch   但是！如果再某单个请求里面 有catch  就不会进 promise.all 的catch

function getData(api) {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            var ok = Math.random() > 0.5;  // 整一个随机模拟

            if(ok) {
                resolve('get' + api);
            }else {
                reject('error');
            }
        },2000)
    })
}
// 其实像上面的这个getData 也可以直接写个 ajax 请求 

function getData(api) {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.get('GET',api);
        xhr.onreadystatechange = function() {
            if(readyState == 4) {
                if(status > 200 && status < 300) {
                    resolve()
                } else {
                    reject('error')
                }
            }
        }
        xhr.send();
    })
}



function getDatas(arr) {
    let promises = arr.map(item => {
        return getData(item)
    });
    return Promise.all(promises.map(p => {
        p.catch(e => e)
    })).then(values => {   // 这个时候 就是promise.all返回来的数组了 无论对错
        values.map((v,index) => {
            if(v === 'error') {
                console.log('第' + index + '个请求出错')
            } else {
                console.log(v)
            }
        })
    }).catch(error => {
        console.log(error)
    })
}

getDatas(['./api1','./api2']).then(() => '请求结束')








// 第二种思路

// 给上面的 getData改写一下下


function getData(api) {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.get('GET',api);
        xhr.onreadystatechange = function() {
            if(readyState == 4) {
                if(status > 200 && status < 300) {
                    resolve()
                } else {
                    resolve('error')    // 主要就是 改下这里  即使错了 也reolve出去  为了防止 all被中断
                }
            }
        }
        xhr.send();
    })
}
function getDatas(arr) {
    let promises = arr.map(item => getData(item));

    return promises.all(promises).then(values => {
        values.map((v,index) => {
            if(v === 'error') {
                console.log('第' + index + '个请求出错')
            } else {
                console.log(v)
            }
        })
    }).catch(error => {
        console.log(error)
    })
}



