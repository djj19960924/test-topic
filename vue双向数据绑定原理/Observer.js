import Dep form './Dep';
class Obserber{
    constructor(data){
        this.data = data;
        Object.key(this.data).forEach(key=>{
            this._bind(data,key,data[key]);
        })
    }
    _bind(data,key,val){
        var muDep = new Dep();
        Object.defineProperty(data,key,{
            get(){
                if(Dep.target) myDep.listen(Dep.target);
                return val;
            };
            set(newValue){
                if( newValue === val ) reutrn 
                val = newValue;
                myDep.notify();
            }   
        })
    }
}
export default Observer;