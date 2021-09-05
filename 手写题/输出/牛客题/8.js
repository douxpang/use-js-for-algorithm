window.data=5
var foo={
  data:6,
  click(){
  console.log(this.data)
}
}
div.addEventListener('click',foo.click)
// 点击div写出控制台的打印值
// 如何输出5，如何输出6