//假如有一堆图片
let imgs = document.querySelectorAll('img')
//刚开始的时候把url放在data属性 显露时候再赋予src
let clientHeight = window.innerHeight || window.documentElement.clientHeight|| document.body.clientHeight

function lazyLoad() {
    let scrollTop = window.pageYOffset || window.documentElement.scrollTop
    for(let i = 0;i < imgs.length;i++) {
        let x = clientHeight + scrollTop - imgs[i].offsetTop
        if(x > 0 && x < clientHeight + imgs[i].height) {
            imgs[i].src = imgs[i].getAttribute('data')
        }
    }
}
addEventListener('scroll',lazyLoad)