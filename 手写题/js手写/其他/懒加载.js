<img data="" />


let img = document.getElementsByTagName('img');
let num = img.length;
let count = 0;


function load() {
    let viewHeight = document.documentElement.clientHeight;
    let scroll = document.documentElement.scrollHeight;
    
    for(let i = count;i < num;i++) {
        if(img[i].offsetHeight = viewHeight + scroll) {
            img[i].src = img[i].getAttrbite('data');
            count++
        }
    }
}

load();

function throttle() {
    let last = 0;
    return function() {
        let now = new Date();
        let self = this;
        if(now - last < wait) return;

        last = now;
        fn.apply(self,args)
    }
}


window.addEventListener('scroll',load)







// 方案二：getBoundingClientRect
// 现在我们用另外一种方式来判断图片是否出现在了当前视口, 即 DOM 元素的 getBoundingClientRect API。
// 上述的 lazyload 函数改成下面这样:
// function lazyload() {
//   for(let i = count; i <num; i++) {
//     // 元素现在已经出现在视口中
//     if(img[i].getBoundingClientRect().top < document.documentElement.clientHeight) {
//       if(img[i].getAttribute("src") !== "default.jpg") continue;
//       img[i].src = img[i].getAttribute("data-src");
//       count ++;
//     }
//   }
// }
