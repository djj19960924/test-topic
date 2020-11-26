// after 在多少次之后执行
function after(times,callback){
    return function(){
        if(--times == 0){
            callback()
        }
    }
}

let fn = after(3,function(){ //当达到预计的次数，执行某个函数
    console.log('after')
})

//解决异步问题
fn()
fn()
fn()