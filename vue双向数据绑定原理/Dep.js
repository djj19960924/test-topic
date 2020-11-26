//发布订阅模式
class Dep{
    static target = null;
    constructor(){
        this.list = [];
    }
      listen(subs){
        this.list.push(listener);
    }
    //发布消息
    notify(){
        for(let i=0;i<this.list.length;i++){
          this.list[i].call(this);
      }
    }
}

export default Dep;