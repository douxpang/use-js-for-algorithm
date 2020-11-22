setTimeout(function() {
    setTimeout(arguments.callee,500)
},500)

//上面那种方法在严格模式下不可用

function iAdd() {
    document.write(++i)
    var timer = setTimeout(iAdd,200)
    if(i > 50) {
        clearTimeout(timer)
    }
}
var tiemr = setTimeout(iAdd,200)