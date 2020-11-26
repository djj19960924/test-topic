import Observer from './Observer';
import Complier from './Complier';

class Vue{
    constructor(options){
        this.$options = options;
        this._$el = this.$options.el;
        this._data = this.$options.data;
        //Object.keys处理对象，返回可枚举的属性数组
        Object.keys(this._data).forEach(key=>{
            this._proxy(key);
        })
        new Observer(this._data);
        new Complier(this.$el,this);
    }
    _proxy(key){
        var self = this;
        Object.defineProperty(this,key,{
            get(){
                return self._data[key];
            },
            set(value){
                self._data[key] = value;
            }
        })
    }
}

export default Vue;