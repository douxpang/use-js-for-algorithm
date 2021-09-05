// add(1); 			// 1
// add(1)(2);  	// 3
// add(1)(2)(3)；// 6
// add(1)(2, 3); // 6
// add(1, 2)(3); // 6
// add(1, 2, 3); // 6

// 明显要用柯里化   如果用更通用的之前写过


//  这个 add函数 就很好

// function add(){
// 	let args = [...arguments];
// 	let addfun = function(){
// 		args.push(...arguments);
// 		return addfun;
// 	}
// 	addfun.toString = function(){
// 		//console.log('调用函数了')
// 		return args.reduce((a,b)=>{
// 			return a + b;
// 		});
// 	}
// 	return addfun;
// }

function add() {
    let args = [].slice.call(arguments);
    let fn = function() {
        let arg_fn = [].slice.call(arguments);

        return add.apply(null,args.concat(arg_fn));
    }
    fn.toString = function() {
        return args.reduce((pre,cur) => {
            return pre + cur
        },0)
    }
    return fn
}




console.log(add(1),
add(1)(2),
add(1)(2)(3),
add(1)(2, 3),
add(1, 2)(3),
add(1, 2, 3))