function quickSort(arr) {
  if(arr.length<=1) {
    return arr
  }
  let middleIndex = Math.floor(arr.length/2)

  let middle = arr.splice(middleIndex,1)[0]

  let left = []
  let right = []

  arr.forEach(el=>{
    if(el<middle) {
      left.push(el)
    }else {
      right.push(el)
    }
  })
  return quickSort(left).concat([middle],quickSort(right))
}

const arr = quickSort([2,4321,54,143])
console.log(arr)