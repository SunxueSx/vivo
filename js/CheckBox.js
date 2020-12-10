export default class CheckBox extends EventTarget{
    elem;
    label;
    checked=false;
    constructor(_data,_label){
        super();
        this.data=_data;
        this.label=_label;
        this.elem=this.createElem();
    }
    createElem(){
        if(this.elem) return this.elem;
        let div=document.createElement("div");
        div.style.float="left";
        div.style.marginRight="5px";
        div.style.marginTop="4px";
        div.style.position="relative";
        let icon=document.createElement("span");
        Object.assign(icon.style,{
            width:"20px",
            height:"20px",
            position:"relative",
            display:"inline-block",
            marginRight:"3px",
            border:"1px solid #666666",
            borderRadius:"3px",
            marginLeft: "40px",
        });
        let a=document.createElement("div");
        Object.assign(a.style,{
            width: "5px",
            height: "10px",
            marginLeft:"4px",
            marginTop:"1px",
            borderColor: "#FFFFFF",
            borderStyle: "solid",
            borderWidth: "0 4px 5px 0",
            transform: "rotate(45deg)",
        })
        icon.appendChild(a)
        div.appendChild(icon);
        let labelSpan=document.createElement("span");
        labelSpan.textContent=this.label;
        labelSpan.style.userSelect="none";
        labelSpan.style.position="relative"
        div.appendChild(labelSpan);
        div.addEventListener("click",e=>this.clickHandler(e));
        div.addEventListener("mouseover",e=>this.mouseHandler(e));
        div.addEventListener("mouseout",e=>this.mouseHandler(e));
        return div;
    }
    appendTo(parent){
        if(typeof parent==="string") parent=document.querySelector(parent);
        parent.appendChild(this.elem);
    }
    insertTo(parent,elem){
        if(typeof parent==="string") parent=document.querySelector(parent);
        if(typeof elem==="string") elem=document.querySelector(elem);
        parent.insertBefore(this.elem,elem);
    }
    clickHandler(e){
        this.checked=!this.checked;
        this.setCheck(this.checked); 
        var evt=new Event("change");
        evt.checked=this.checked;
        evt.data=this.data;
        this.dispatchEvent(evt);
    }
    setCheck(_check){
        this.checked=_check;
        Object.assign(this.elem.firstElementChild.style,{
            backgroundColor:this.checked ? "rgb(54 161 251)" : "#FFFFFF",
            border:this.checked ? "1px solid rgb(54 161 251)" : "1px solid #666666"
        });
        this.elem.firstElementChild.firstElementChild.display=this.checked ? "block" : "none"
    }
    mouseHandler(e){
        if(this.checked){
            this.elem.firstElementChild.style.borderColor="1px solid rgb(54 161 251)";
            return;
        }
        if(e.type==="mouseover"){
            this.elem.firstElementChild.style.borderColor="#aaaaaa";
        }else{
            this.elem.firstElementChild.style.borderColor="#666666";
        }
    }
}