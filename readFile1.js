let fs = require('fs')
function after(times,callback){ //使用after函数 可以简化异步操作
    let arr = []
    return function(r){
        arr.push(r) //把结果传递到对应的callback中
        if(--times === 0){
            callback(arr)
        }
    }
}

//解决异步并发问题,就是计数
let newFn = after(3,function(arr){
    console.log(arr) //当异步完成后触发此方法
})
fs.readFile('./name.txt','utf8',function(error,data){
    newFn(data) 
})

fs.readFile('./age.txt','utf8',function(error,data){
    newFn(data)
})

fs.readFile('./age.txt','utf8',function(error,data){
    newFn(data)
})

