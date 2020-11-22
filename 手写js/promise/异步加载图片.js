function loadImg(url) {
    return new Promise((resolve,reject) => {
        const img = new Image()
        img.onload = function() {
            console.log('一张图片加载完成')
            resolve(img)
        }
        img.onerror = function() {
            reject(new Error('错误'))
        }
        img.src = url
    })
}