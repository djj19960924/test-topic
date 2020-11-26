//数组 转为 Map

// const arr = ["foo","bar","baz"];
// const arrChangeMap = (arr) => new Map(arr.map((value,key)=>[key,value]));

// console.log(arrChangeMap(arr));

//Map 转为对象
// const map = new Map();
// map.set(1,"foo").set(2,"bar").set(3,"baz");
// const mapChangeObj = (map) => {
//     let obj = {};
//     for(let [k,v] of map){
//         obj[k] = v;
//     }
//     return obj;
// }
// console.log(mapChangeObj(map));

//对象转为 Map
// const obj = {
//     "1": "foo",
//     "2": "bar",
//     "3": "baz",
// }
// const objChangeMap = (obj) => {
//     let map = new Map();
//     for(let key in obj) {
//         map.set(key,obj[key]);
//     }
//     return map;
// }
// console.log(objChangeMap(obj));

//Map 转为 JSON

// var a = function(){
//     console.log(a.caller);
// }

// var b = function(){
//     a();
// }

// b();
// a()


// function fn() {
//   var info = {
//     name: "li"
//   }
//   return info
// }

// var b = `foo ${JSON.stringify(fn())} bar`
// console.log(b)

//map()、reduce()和filter()的使用
//1.如果你想要一个数组，请使用map()方法
//2.如果你需要一个结果，请使用reduce()方法
//3.如果你要过滤出一个结果，请使用filter()方法

var arrObj = [
  {age:11,name:'aaa'},
  {age:12,name:'bbb'},
  {age:13,name:'ccc'},
]
// console.log(arrObj.entries())
//map()三个参数
//1、第一个参数是当前数组中的第几个成员
//2、第二个参数是当前成员在数组中的索引就是第几个
//3、第三个参数是调用map方法的那个数组本身
// var age = arrObj.map(_d=> _d.age)
// console.log(age)

//reduce循环的是回调方法,数组中每个成员都进入回调，但区别在于每次回调方法返回的值，都会传递到下次回调中
//第二个参数是0是计算的初始值，_n是承接计算的结果，初始值是0

var ageYear = arrObj.reduce((_n,_y)=>{
  console.log(_n,_y)
  return _n+_y.age
},0);
console.log(ageYear)

//filter()返回是一个数组，filter接收的是一个匿名函数，参数就是数组对象中的每一个成员，进行比较
//只要filter方法的回调函数中的比较运算符结果为true,那么符合条件的对象就会被包在一个数组中返回，比较结果为false的就被过滤掉了

// var arrName = arrObj.filter(_d=>_d.name === 'ccc')
// console.log(arrName);

//some方法返回的是一个布尔值，some接收的是一个匿名函数，参数就是数组对象中的每一个成员 只要其中一个为true 就会返回true的
// var result = arrObj.some(_d=>_d.age > 11)
// console.log(result)

//every（）方法必须所有都返回true才会返回true，哪怕有一个false，就会返回false
//every（）和 some（）目的：确定数组的所有成员是否满足指定的测试
// var result = arrObj.every(_d=>_d.age > 11)
// console.log(result)

//find()方法 有一个对象数组，找到符合条件的对象 （find方法找到符合条件的对象之后不在往后执行）无符合条件返回undefined
// var obj = arrObj.find(_d=>_d.age===22);
// console.log(obj)

// var arr = ["apple","banana","cover","double"]

// arr.copyWithin(1,1)
// console.log(arr)
