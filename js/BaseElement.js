export default class BaseElement{
    constructor(){
        this.elem = this.createElem();
    }
    appendTo(parent){
        if(typeof parent === "string") parent = document.querySelector(parent);
        parent.appendChild(this.elem);
    }
}
