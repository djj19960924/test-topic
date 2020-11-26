/**
 * 1.函数中的this
 * 函数中的this表示的是window对象，无论函数中嵌套多少层，内层函数中的this同样也指的window对象
*/
var name = 'window name'
function parent() {
  var name = 'function name'
  function sub() {
    var name = 'sub function this'
    console.log('sub函数中:', this.name)
  }
  sub()
  console.log('parent函数中:', this.name)
}
parent() //log:低于都是window name

/**
 * 2.构造函数中的this
 * 在构造函数中，this对象表示的是该构造函数创建的实例对象
*/
var name = 'window name'
function Fn() {
  this.name = 'constructor'
}
var thisFn = new Fn()
console.log(thisFn.name)

/**
 * 3.匿名函数中的this
 * 匿名函数的执行环境是全局作用域，所以其this对象指的是window对象
*/
var name = 'window name'
function Fn() {
  this.name = 'constructor'
  return function() {
    console.log(this.name)
  }
}
Fn()

/**
 * 4.对象的方法中的this
 * 在对象方法中,this的值就是该方法所在对象，此时this可以访问到该方法所在对象下的任意属性
 * 当然如果将该对象的方法赋值给一个变量，然后通过变量调用，那么这个时候的this就不是该对象了
*/
var name = 'window name'
var objThis = {
  name: 'objThis name',
  sayName: function() {
    console.log(this.name)
    console.log(this)
  }
}
//通过对象调用
objThis.sayName() //log:'objThis name',objThis对象
//将方法赋值给变量在调用
const fn = objThis.sayName
fn() //log:'window name',window

/**
 * 5.回调函数中的this
 * 1) dom事件中的this
 * -在事件中使用this，它表示的是这个事件绑定的那个元素的Dom
 * 2) jquery实践中的this
 * - 此处的this表示，dom对象
 * 3) 普通函数的this
 * - 此处的this与调用函数回调的执行环境有关，一般为window
*/
// <div id="box" class="this-box">这是事件dom</div>
// document.getElementById('box').onclick = function() {
//   console.log(this) //log:这个div元素
// }
// $('.item').click(function() {
//   console.log(this) //点击的dom对象
// })
const arr = [1,2,3]
arr.map(function(item,index) {
  console.log(this) //log:window
})
