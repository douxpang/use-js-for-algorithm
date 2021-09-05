// Ajax是一种技术方案，但并不是一种新技术。它依赖现有的CSS/HTML/JavaScript，而其中最核心的依赖是浏览器提供的XMLHttpRequest对象，是这个对象使得浏览器可以发出HTTP请求与接收HTTP响应。实现了在页面不刷新个情况下和服务器进行数据交互。

// 基本


let xhr = new XMLHttpRequest();
//true：异步的方式。
//false：同步的方式    


xhr.open('GET','hello.json',true);

xhr.send();




// 同步获取

let xhr = new XMLHttpRequest();
xhr.open('GET','hello.json',false);
xhr.send();
let data = xhr.responseText;
console.log(data);


// 异步获取

let xhr = new XMLHttpRequest();
xhr.open('GET','hello.json',true);
xhr.send();
xhr.addEventListener('load',function() {
    let data = xhr.responseText;
    console.log(data);
})



// 常用写法

let xhr = new XMLHttpRequest();
xhr.open('GET','http://hello.php',true);
xhr.onreadystatechange = function(){
    if(xhr.readyState === 4) {
        if((xhr.status > 200 && xhr.status < 300) || xhr.status === 304) {
            console.log(xhr.responseText)
        } else {
            console.log('出错')
        }
    }
}
xhr.onerror = function() {
    console.log()
}

// post
let xhr = new XMLHttpRequest();
xhr.open('POST','https://hello.php',true);
xhr.send('username=luoshushu&passwore=123') 
  xhr.addEventListener('load', function () {
    if((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304){
      var data = xhr.responseText
      console.log(data)
    }else{
      console.log('出错了')
    }
  })



