<input id="input"></input>




//
const data = {}
const input = document.getElementById('input')
Object.defineProperty(data,'text',{
    set(value) {
        input.value = value
        this.value = value
    }
})
input.onChange = function(e) {
    data.text = e.target.value
}