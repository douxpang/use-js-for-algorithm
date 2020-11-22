// 封装一个异步加载图片的方法

// 这个相对简单一些，只需要在图片的onload函数中，使用resolve返回一下就可以了



// function loadImg(url) {
//     return new Promise((resolve, reject) => {
//       const img = new Image();
//       img.onload = function() {
//         console.log("一张图片加载完成");
//         resolve(img);
//       };
//       img.onerror = function() {
//           reject(new Error('Could not load image at' + url));
//       };
//       img.src = url;
//     });
  