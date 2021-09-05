function fn(target) {
	if(typeof target !== 'object') {
      return typeof target
    }else {
      let temp = Object.prototype.toString.call(target)

      temp = temp.split(' ').slice(1)[0].replace(']','');
      
      return temp
    }
}


console.log(fn([1,2]))


//console.log(Object.prototype.toString.call([1,2]))