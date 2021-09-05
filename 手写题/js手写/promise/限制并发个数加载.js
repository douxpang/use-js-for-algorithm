// 有8个图片资源的url，已经存储在数组urls中。

// urls类似于['https://image1.png', 'https://image2.png', ....]

// 而且已经有一个函数function loadImg，输入一个url链接，返回一个Promise，该Promise在图片下载完成的时候resolve，下载失败则reject。

// 但有一个要求，任何时刻同时下载的链接数量不可以超过3个。

// 请写一段代码实现这个需求，要求尽可能快速地将所有图片下载完成。


var urls = [
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png",
    "https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png",
  ];
function loadImg(url) {
    return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function() {
        console.log("一张图片加载完成");
        resolve(img);
    };
    img.onerror = function() {
        reject(newError('Could not load image at' + url));
    };
    img.src = url;
    });
}

// ////////////////随意版  直接 每三个一组 但是这样不能保证效率最高

function limit(urls,fn,k) {
    let res = [];
    let p = Promise.resolve();
    function handleUrls(nums) {
        let res = [];
        let len = Math.ceil(nums.length / k);
        for(let i = 0;i < len;i++) {
            res.push(nums.slice(i * k,(i+1) * k));
        }
        return res;
    }
    function ajax(nums) {
        return nums.map(item => fn(item))
    }
    let double = handleUrls(urls);
    double.map(item => {
        p = p.then(() => Promise.all(ajax(item).then(data => {
            res.push(...data);
            return res
        })))
    })
    return p;
}

limit(urls,loadImg,3).then(res => {
    console.log(res);
    res.forEach(img => {
        document.body.appendChild(img)
    })
})
