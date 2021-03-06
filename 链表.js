//封装链表类
function LinkedList() {
  //内部的类：节点类
  function Node(data) {
    this.data = data;
    this.next = null;
  }
  //属性
  this.head = null;
  this.length = 0;
  //1、追加方法
  LinkedList.prototype.append = function(data) {
    //1.创建新的节点
    var newNode = new Node(data);
    //2.判断是否添加的是第一个节点
    if (this.length===0) { //2.1是第一个节点
      this.head = newNode;
    } else {              //2.2不是第一个节点
      //找到最后一个节点
      var current = this.head;
      while (current.next) {
        current = current.next;
      };
      //最后节点的next指向新的节点
      current.next = newNode;
    }
    //3.length+1
    this.length += 1;
  };
  //2.toString方法
  LinkedList.prototype.toString = function() {
    //1.定义变量
    var current = this.head;
    var listString = "";
    //2.循环获取一个个的节点
    while(current) {
      listString += current.data+" ";
      current = current.next;
    };
    return listString;
  }
}
//测试代码
//1.创建LinkedList
let list = new LinkedList();
//2.测试append方法
list.append('abc');
list.append('cba');
list.append('nba');
console.log(list.toString());