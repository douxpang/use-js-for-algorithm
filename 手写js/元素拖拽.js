//假设html css已完成

let drag = document.getElementById('box');
drag.onmousedown = function(event) {
    event = event || window.event
    let diffX = event.clientX - drag.offsetLeft
    let diffY = event.clientY - drag.offsetHeight
    drag.onmousemove = function(e) {
        e = e || window.event
        let left = e.clientX - diffX
        let top = e.clientY - diffY
        if(left < 0) {
            left = 0
        }else if(left > window.innerWidth - drag.offsetWidth) {
            left = window.innerWidth - drag.offsetWidth
        }
        drag.style.left = left + 'px'
        drag.style.right = right + 'px'
    }
    drag.onmouseup = function(e) {
        e = e || window.event
        this.onmousemove = null
        this.onmousemove = null
    }
}