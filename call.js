//call()方法内部改变this机制，通过将调用函数作为传入对象的一个属性来调用，来实现this指向的改变
//1、不传参数或者第一个参数传null,this指向window
//2、第一个参数之后的参数作为调用函数的传参接收
//3、改变函数this指向，返回调用函数执行结果

Function.prototype.myCall = function(context){
    if(typeof this!=='function'){
        throw new TypeError('Error')
    }
    context = context || window
    context.fn = this
    const args = [...arguments].slice(1)
    const result = context.fn(...args)
    delete context.fn
    return result
}
