// module.exports = {
//     add: (...args) => {
//         return args.reduce((prev,curr)=>{
//             return prev + curr;
//         })
//     },
//     mul: (...args) => {
//         return args.reduce((prev,curr)=>{
//             return prev*curr;
//         })
//     }
// }

const increment = (number)=>({type: 'INCREMENT',data: number})
console.log(increment(3))
//高阶函数
function fun1(a,b){
	console.log(a);
  console.log(b);
}
fun1(1,2);
/**
*	高阶函数特点：
*		1.将函数作为参数传递给另外一个函数进行加工
*		2.返回值通常还是一个函数，是加工之后的函数
*/
function fun2(fn,a,b,c,d){
	return function(){
        fn(a,b);
        console.log(c);
        console.log(d);
    }
}
let fn = fun2(fun1,1,2,3,4);
fn()