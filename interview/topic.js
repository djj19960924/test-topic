/**
 * 1.查找数组元素位置
 * 如果数组中存在item，则放回元素在数组中的位置，否则返回-1
 * input: [1,2,3,4],3 output:2
*/
function indexOf(arr,item) {
  if(Array.prototype.indexOf) {//判断浏览器是否支持indexOf方法
    return arr.indexOf(item)
  }else{
    for(let i=0;i<arr.length;i++) {
      if(arr[i]===item) return i
    }
  }
  return -1
}
console.log(indexOf([1,2,3,4],3))

/**
 * 2、添加元素(末尾添加)
 * 在数组arr末尾添加元素item，不要直接修改数组arr，结果返回新的数组
 * input:[1,2,3,4] output:[1,2,3,4,5]
*/
function push(arr,item) {
  let newArray = []
  for(let i=0;i<arr.length;i++) {
    newArray.push(arr[i])
  }
  newArray.push(item)
  return newArray //return arr.push返回的是数组长度
}

function append(arr,item) {
  return arr.concat(item)
}
console.log(append([1,2,3,4],5))