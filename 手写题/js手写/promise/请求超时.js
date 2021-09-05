//   如果几秒内 这个请求没有返回 就会报错

//  有个很好的方法 就是可以用 promise.race




function getData(url) {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET',url,true);
        xhr.send();
        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status > 200 && xhr.status < 300) {
                    try {
                        resolve(xhr.responseText);
                    } catch(e) {

                    }
                } else {
                    reject(new Error('获取出错'))
                }
            }
        }
    })
}


function fn(url,time) {
    Promise.race([
        getData(url),
        new Promise((resolve,reject) => {setTimeout(function() {reject(new Error('超时'))},time)})
    ]).then((val) => {
        console.log('结果为' + val)
    }).catch(e => console.log(e))
}