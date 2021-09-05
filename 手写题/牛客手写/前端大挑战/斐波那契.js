//使用普通迭代
function fibonacci(n){
	if(n<=2){ 
		return 1;
	}else{
		var first = 1;
		var second = 1;
		var third = 0;
		for(var i=3; i<=n; i++){  
			third = first + second;
			first = second; 
			second = third;
		}
		return third;
	}
}
//使用递归
function fibonacci(n){ 
	if(n<=2){
		return 1;
	}else{
		return fibonacci(n-1) + fibonacci(n-2);		
	}
}


//  尾调用 
function fibonacci(n,ac1 = 1,ac2 = 1) {
	if(n <= 1) return ac2

	return fibonacci(n - 1,ac2,ac1 + ac2)
}











//使用动态规划
function fibonacci(n){
	var val = [];
	if(n<=2){
		return 1;
	}else{
		val[1]=1; //n为2
		val[2]=2; //n为3
		for(var i=3; i<n; ++i){
			val[i] = val[i-1] + val[i-2];
		}
		return val[n-1];
	}
}
//在这里使用普通迭代和动态规划的效率一样，递归效率最低。