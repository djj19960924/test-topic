var arr = [4,1,1,9,1]

//递归
function rec_opt(arr,i){
    if(i==0){
        return arr[0]
    }else if(i==1){
        return Math.max(arr[0],arr[1])
    }else{
        var A = rec_opt(arr,i-2)+arr[i]
        var B = rec_opt(arr,i-1)
        return Math.max(A,B)
    }
}
//非递归
function dp_opt(arr){
    var opt = new Array(arr.length)
    opt[0] = arr[0];
    opt[1] = Math.max(arr[0],arr[1])
    for(let i =2;i<arr.length;i++){
        var A = opt[i-2]+arr[i];
        var B = opt[i-1]
        opt[i] = Math.max(A,B)
    }
    return opt[arr.length-1]
}
console.log(dp_opt(arr))

//console.log(rec_opt(arr,6))

