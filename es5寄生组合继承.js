function SuperType(name){
    this.name = name;
    this.colors = ['red','blue','green']
}

SuperType.prototype.sayName = function(){
    alert(this.name)
}

function SubType(name,age){
    SuperType.call(this,name);
    this.age = age;
}
SubType.prototype = Object.create(SuperType.prototype,{
    constructor: {
        value: SubType,
        enumerable: false,
        writable: true,
        configurable: true
    }
})
SubType.prototype.sayAge = function(){
    alert(this.age)
}
let instance = new SubType('gim','17')
instance.sayName();
instance.sayAge()