Array.prototype.uniq = function () {
    return [...new Set(this)]
}

function uniq(nums) {
    return Array.from(new Set(nums));
}




Array.prototype.uniq = function () {
    var resArr = [];
    var flag = true;  // 为了排除 nan
     
    for(var i=0;i<this.length;i++){
        if(resArr.indexOf(this[i]) == -1){
            if(this[i] != this[i]){   //排除 NaN
               if(flag){
                    resArr.push(this[i]);
                    flag = false;
               }
            }else{
                 resArr.push(this[i]);  
            }
        }
    }
    return resArr;
 }
 


function set(nums) {
    let res = nums.reduce((pre,cur) => {
        // console.log(pre)
        if(!pre.includes(cur)) {
            return pre.concat(cur)
        } else {
            return pre
        }
        
    },[])
    return res
}
console.log(set([1,1,2,2,3,4,4]))



//  filter

function unip2(nums) {
    return nums.filter((item,index) => {
        return nums.indexOf(item) == index
    })
}



var arr =  [5,7,1,8,1,8,3,4,9,7];
function unique( arr ){
    arr = arr.sort();
    //console.log(arr);

    var arr1 = [arr[0]];
    for(var i=1,len=arr.length;i<len;i++){
        if(arr[i] !== arr[i-1]){
            arr1.push(arr[i]);
        }
    }
    return arr1;
}
console.log(unique(arr));   //  1, 1, 3, 4, 5, 7, 7, 8, 8, 9



console.log([1,2,3,4].concat(5))