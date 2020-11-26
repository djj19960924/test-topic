//封装栈类
function Stack(){
    //栈中的属性
    this.items = [];

    //栈的相关操作
    //1、将元素压入栈
    Stack.prototype.push = function(element){
        this.items.push(element);
    }
    
}


//栈的使用
var s = new Stack();