//判断类型 Object.prototype.toString.call()
function isType(type){
    return function(obj){
        return Object.prototype.toString.call(obj).includes(type)
    }
}
//包装成一个高阶函数 批量生成函数
let types = ['String','Object','Array','Null','Undefined','Boolean']
let fns = {};
types.forEach(type=>{
    fns['is'+type] = isType(type)
})
let a = true

console.log(fns.isBoolean(a))
//高级函数
//lodash库(可以看下源码) after


