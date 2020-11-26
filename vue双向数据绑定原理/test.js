/**
 * 如果需要精确的添加或修改对象的属性。就可以使用Object.defineProperty()
 * 
*/
var obj = {};
// //在对象中添加一个属性与数据描述符
Object.defineProperty(obj,'a',{
    value: 20,
    writable: true,
})
obj.a = 2;

/**
 * Enumerable 属性
 * 默认 false
 * enumerable定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。
*/
var o = {};
// Object.defineProperty(o, "a", { value : 1, enumerable:true });
// Object.defineProperty(o, "b", { value : 2, enumerable:false });
// Object.defineProperty(o, "c", { value : 3 }); // enumerable defaults to false
// o.d = 4; // 如果使用直接赋值的方式创建对象的属性，则这个属性的enumerable为true

// for (var i in o) {    
//   console.log(i);  
// }
// Object.keys(o);

var bValue;
Object.defineProperty(o,"b",{
    get:function () { return bValue; },
    set:function (v) { bValue=v; },
    enumerable:true,
    configurable:true
});
o.b=45;
