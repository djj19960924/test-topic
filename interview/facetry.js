let array = [4, 34, 5, 90, 3, 2]

//冒泡
function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

//快速
function quickSort(array) {
  let length = array.length;
  if (array.length <= 0) {
    return array
  };
  let left = [], right = [];
  let middleIndex = Math.floor(length / 2);
  let middleValue = array.splice(middleIndex, 1)[0];
  for (let i = 0; i < length - 1; i++) {
    let item = array[i];
    item < middleValue ? left.push(item) : right.push(item)
  }
  return quickSort(left).concat(middleValue, quickSort(right));
}

function swap(m, n) {
  let temp = array[m];
  array[m] = array[n];
  array[n] = temp;
}
//选择
function selectSort(array) {
  let length = array.length;
  for (let i = 0; i < length - 1; i++) {
    let min = i;
    for (let j = min + 1; j < length; j++) {
      if (array[min] > array[j]) {
        min = j;
      }
    }
    swap(min, i);
  }
  return array;
}

//插入
function insertionSort(array) {
  // let length = array.length; 
  // //1.准备一个新数组，用来存储抓到手里的牌，开始先抓一张牌进来
  // let handle = [];
  // handle.push(array[0]);
  // //2.从第二项开始依次抓牌,一直到把台面上的牌抓光
  // for(let i=1;i<length;i++) {
  //   //A是新抓的牌
  //   let A = array[i];
  //   //和handle手里的牌一次比较（从后向前比）
  //   for(let j=handle.length-1;j>=0;j--) {
  //     let B = handle[j];
  //     //如果当前新牌A比要比较的牌B大了，把A放到B的后面
  //     if(A>B) {
  //       handle.splice(j+1,0,A);
  //       break;
  //     }
  //     //已经比到第一项，我们把新牌放到手中最前面即可
  //     if(j===0) {
  //       handle.unshift(A);
  //     }
  //   }
  // }
  // return handle;
  let length = array.length;
  for (let i = 1; i < length; i++) {
    let temp = array[i];
    let j = i;
    while (j > 0 && array[j - 1] > temp) {
      array[j] = array[j - 1];
      j--
    }
    array[j] = temp;
  }
  return array;
}

console.log(insertionSort(array))

const input = [
  { id: 3, parent: 2 },
  { id: 1, parent: null },
  { id: 2, parent: 1 },
]
//1.递归
function findRoot(arr) {
  for(let i in arr) {
    if(!arr[i].parent) return arr[i]
  }
}
function findChild(arr,parent) {
  // var child = []
  for (let i in arr) {
    if(arr[i].parent&&arr[i].parent===parent.id) {
      parent.child = arr[i]
    }
  }
  if(parent.child) {
    findChild(arr,parent.child)
  }
  // if(child.length > 0) {
  //   parent.child = child
  //   for (let i in child) {
  //     findChild(arr,child[i])
  //   }
  // }
}
var root = findRoot(input)
var obj = Object.assign({},root)
findChild(input,obj)
console.log(obj)
