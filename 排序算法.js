//创建列表类
function ArrayList() {
  //属性
  this.array = [];

  //方法
  //将数据可以插入到数组中的方法
  ArrayList.prototype.insert = function(item) {
    return this.array.push(item);
  }
  //toString
  ArrayList.prototype.toString = function() {
    return this.array.join('-');
  }

  //交换两个位置的数据
  ArrayList.prototype.swap = function(m,n) {
    let temp = this.array[m];
    this.array[m] = this.array[n];
    this.array[n] = temp;
  }

  //实现排序算法
  //冒泡排序
  ArrayList.prototype.bubbleSort = function() {
    //1.获取数组长度
    let length = this.array.length;
    //第一次: j=length-1,比较到倒数第一个位置
    //第二次: j=length-2,比较到倒数第二个位置
    //......
    for (let j=0; j<length-1; j++) {
      //第一次进来:   i=0,比较 0 和 1位置的两个数据,如果0位置大于1位置的数据
      //最后一次进来: i=length-2,比较length-2和length-1的两个数据
      for (let i=0;i<length-j-1;i++) {
        if(this.array[i] > this.array[i+1]) {
          //交换两个数据
          this.swap(i,i+1);
        }
      }
    }
    return this.array;
  }
  //选择排序
  ArrayList.prototype.selectionSort = function() {
    //1.获取数组长度
    let length = this.array.length;
    //2.外层循环：从0位置开始取数据
    for(let j=0;j<length-1;j++) {
      let min = j;
      //内层循环：从i+1位置开始,和后面的数据进行比较
      for(let i=min+1;i<length;i++) {
        if(this.array[min] > this.array[i]){
          min = i;
        }
      }
      this.swap(min,j);
    }
    return this.array;
  }
  //插入排序
  ArrayList.prototype.insertionSort = function () {
    //1.获取数组长度
    var length = this.array.length;
    //2.外层循环：从第1个位置开始获取数据，向局部有序进行插入
    for(let i=1;i<length;i++) {
      //3.内层循环: 获取i位置的元素，和前面的数据依次进行比较
      let temp = this.array[i];
      let j = i;
      while (this.array[j-1] > temp&& j>0) {
        this.array[j] = this.array[j-1];
        j--
      }
      //4.将j位置的数据，放置temp就可以
      this.array[j] = temp;
    }

    // for (i = 1;i < len;i++){
		//   tmp = arr[i];
    //   for (j = i - 1;j >= 0 && arr[j] > tmp;j--){
    //     arr[j + 1] = arr[j];
    //   }
    //   arr[j + 1] = tmp;
    // }
  }

  //快速排序
  //1.选择枢纽
  ArrayList.prototype.median = function(left,right) {
    
  }
}



//测试类
var list = new ArrayList();
list.insert(66);
list.insert(10);
list.insert(110);
list.insert(2);
list.insert(32);
list.insert(8);
list.insert(561);

console.log(list.selectionSort());