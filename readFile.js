let fs = require('fs')
//1)异步不能使用try catch
//2)同步“异步的返回结果”
//fs.readFile
let arr = []
let i = 0
function fn(data,index){
    arr[index] = data;
    if(++i == 2){
        console.log(arr)
    }
}
fs.readFile('./name.txt','utf8',function(error,data){
    fn(data,1) //每个异步函数执行完后，调用一个回调通知完成了，将结果传入
})

fs.readFile('./age.txt','utf8',function(error,data){
    fn(data,0)
})