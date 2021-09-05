function load(url) {
    return new Promise((resolve,reject) => {
        let image = new Image();
        image.onload = function() {
            console.log('一张加载完成');
            resolve(image)
        }
        image.onerror = function() {
            console.log('加载失败');
            reject(new Error('失败'))
        }
        image.src = url
    })

}

load('https://image1.png')