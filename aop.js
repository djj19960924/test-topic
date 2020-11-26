//AOP 面向切片编程 把原来代码切成片，在中间加上我自己的代码
//装饰器 扩展原有的方法 重写原有的方法

function say(who){
    console.log(who + '888')
}

Function.prototype.before = function(fn){
    that = this
    return function (){
        fn()
        console.log('arguments:',arguments)
        that(...arguments)
    }
}

let newFn = say.before(function(){
    console.log('1')
})

newFn('我') 
//1、调用newFn()函数就相当于调用 return function(){}函数
//2、return function(){}函数先让before函数先执行，再让以前的say()方法执行
//3、say调用的before，可以认为this = say
//4、可以把return function(){}函数改为箭头函数，或者that = this

//回调1) 可以解决预置参数的问题 bind 预置参数
//    2) 解决异步问题




