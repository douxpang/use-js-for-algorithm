// 实现效果，点击容器内的图标，图标边框变成border 1px solid red，点击空白处重置

const box = document.getElementById('box')
function isIcon(target) {
    return target.className.includes('icon')
}
box.click = function(e) {
    e = e || window.event
    e.stopPropagation()
    let target = e.target
    if(isIcon(target)) {
        target.style.border = '1px slide red'
    }
}
document.onclick = function(e) {
    const children = box.children
    for(let i = 0;i < children.length;i++) {
        if(isIcon(children[i])) {
            children[i].style.border = 'none'
        }
    }
}