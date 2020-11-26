class Complier{
    constructor(el,vm){
        this.el = document.querySelector(el);
        this.vm = vm;
        this._createFragment();
    }
    _createFragment(){
        bar frag = document.createDocumentFragment();
        var child;
        while(child = this.el.firstChild){
            _complie(child);
        }
    }
    _complie(node){
        if(node.nodeType === 1){

        }
        if(node.nodeType === 3){
            
        }
    }
}

export default Complier;