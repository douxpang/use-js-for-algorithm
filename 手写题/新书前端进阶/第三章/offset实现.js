// 一个元素 离最顶部的距离




// 1 . 递归  

const offset = ele => {    // 这是这个方法
    let result = {
        left: 0,
        top: 0
    }
    let position;

    const getOffset = (node,init) => {
        if(node.nodeType !== 1) {     // nodeType 为1 的时候 才是 元素节点
            return  
        }
    
        position = window.getComputedStyle(node)['position'];
    
        if(typeof(init) === 'undefined' && position === 'static') {    // 如果这次没有传第二个参数 并且这层元素为static  就说明这不是offset计算的边界 直接return出去
            getOffset(node.parentNode)
            return 
        }
    
        result.top = node.offsetTop + result.top - node.scrollTop;
        result.left = node.offsetLeft + result.left - node.scrollLeft;
    
        if(position === 'fixed') {
            return 
        }
    
        getOffset(node.parentNode)
    
    }

    getOffset(ele,true);

    return result

}


//  2. getBoundingClientRect  方法  对于 整个视口的左上角 返回一个对象


const offset = ele => {
    let result = {
        left:0,
        top:0
    }
    if(window.getComputedStyle(ele)['display'] === 'none') {
        return result
    }
    result = ele.getBoundingClientRect();
    let document = ele.ownerDocument.documentElement;

    return {
        top: result.top + window.pageYOffset - document.clientTop
    }
}


