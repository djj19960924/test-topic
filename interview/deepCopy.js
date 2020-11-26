let obj = {
  name: 'test',
  age: 18,
  msg: {
    age: 18
  },
  say: function() {
    console.log(1)
  },
  arr: [12,15,1,5]
}
var o = {}

function deepCopy(newObj,oldObj) {
  for(let k in oldObj) {
    let item = oldObj[k]
    if(item instanceof Array) {
      newObj[k] = []
      deepCopy(newObj[k],item)
    }else if(item instanceof Function){
      newObj[k] = item
    }else if(item instanceof Object) {
      newObj[k] = {}
      deepCopy(newObj[k],item)
    }else {
      newObj[k] = item
    }
  }
}
deepCopy(o,obj)
console.log(o)
o.say = function () {
  console.log(2)
}
obj.say()