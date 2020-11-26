/**
 * Promise.all()
 * 可以将多个promise实例包装成一个新的promise实例
 * 一旦任意一个失败，pAll状态也会变成失败
*/

let p1 = new Promise((resolve,reject)=>{
  //setTimeout函数第三个参数是要作为传入第一个执行函数中的参数存在
  //setTimeout(resolve,2000,'p1')
  setTimeout(reject,2000,'p1')
})
let p2 = new Promise((resolve,reject)=>{
  setTimeout(resolve,1000,'p2')
})
let p3 = new Promise((resolve,reject)=>{
  setTimeout(resolve,3000,'p3')
})

// let pAll = Promise.all([p1,p2,p3])
// pAll.then((success)=>{
//   console.log(success)
//   //返回的值的顺序是以参数顺序是一样的，与异步请求时间顺序无关
// },(err)=>{
//   console.log(err)
// })

//Promise.race()谁最先完成就是谁
let pAll = Promise.race([p1,p2,p3])
pAll.then((success)=>{
  console.log(success)
},(err)=>{
  console.log(err)
})