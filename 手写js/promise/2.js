// 有8个图片资源的url，已经存储在数组urls中（即urls=['http://example.com/1.jpg',...,'http:''example.com/8.jpg']），而且已经有一个函数function loading，输入一个url链接，返回一个Promise，该Promise在图片下载完成的时候resolve，下载失败则reject。
// 但有一个要求，任何时刻同时下载的链接数量不可以超过3个。
// 请写一段代码实现这个需求，要求尽可能快速地将所有图片下载完成。

// 题目的意思是需要先并发请求3张图片，当一张图片加载完成后，又会继续发起一张图片的请求，让并发数保持在3个，直到需要加载的图片都全部发起请求。
// 用Promise来实现就是，先并发请求3个图片资源，这样可以得到3个Promise，组成一个数组promises，然后不断调用Promise.race来返回最快改变状态的Promise，然后从数组promises中删掉这个Promise对象，再加入一个新的Promise，直到全部的url被取完，最后再使用Promise.all来处理一遍数组promises中没有改变状态的Promise


var urls = ['https://www.kkkk1000.com/images/getImgData/getImgDatadata.jpg', 'https://www.kkkk1000.com/images/getImgData/gray.gif', 'https://www.kkkk1000.com/images/getImgData/Particle.gif', 'https://www.kkkk1000.com/images/getImgData/arithmetic.png', 'https://www.kkkk1000.com/images/getImgData/arithmetic2.gif', 'https://www.kkkk1000.com/images/getImgData/getImgDataError.jpg', 'https://www.kkkk1000.com/images/getImgData/arithmetic.gif', 'https://www.kkkk1000.com/images/wxQrCode2.png'];
function loadImg(url) {
    return new Promise((resolve, reject) => {
        const img = new Image()
        img.onload = function () {
            console.log('一张图片加载完成');
            resolve();
        }
        img.onerror = reject
        img.src = url
    })
};

function limitLoad(urls,handler,limit) {
    let news = [].concat(urls)
    let promises = []

    promises = news.splice(0,limit).map((url,index) => {
        return handler(url).then(() => {
            return index
        })
    })
    console.log(promises)
    return news.reduce((last,url,currentIndex) => {
        return last.then(() => {
            return Promise.race(promises)
        }).catch(err => {
            console.error(err)
        }).then((res) => {
            promises[res] = handler(news[currentIndex]).then(() =>{ return res})
        })
    },Promise.resolve()).then(() => {
        return Promise.all(promises)
    })
    
}
limitLoad(urls,limitLoad,3)